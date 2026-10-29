const STORAGE_KEY = "serviceBusinessOS.leads.v1";
const STATUS_LABELS = {
  new: "New inquiry",
  quoted: "Quote sent",
  booked: "Job booked",
  closed: "Closed",
};
const NEXT_STATUS = { new: "quoted", quoted: "booked", booked: "closed" };
const NEXT_LABEL = { new: "Mark quoted", quoted: "Mark booked", booked: "Close request" };
const SERVICE_TYPES = new Set(["Standard clean", "Deep clean", "Move-in / move-out", "Recurring clean", "Other"]);
const MAX_LEADS = 1000;
const MAX_IMPORT_BYTES = 1024 * 1024;

const refs = {
  leadForm: document.querySelector("#leadForm"),
  leadId: document.querySelector("#leadId"),
  customerName: document.querySelector("#customerName"),
  customerEmail: document.querySelector("#customerEmail"),
  customerPhone: document.querySelector("#customerPhone"),
  serviceType: document.querySelector("#serviceType"),
  followUpDate: document.querySelector("#followUpDate"),
  leadNotes: document.querySelector("#leadNotes"),
  leadStatus: document.querySelector("#leadStatus"),
  formTitle: document.querySelector("#formTitle"),
  formError: document.querySelector("#formError"),
  saveLeadButton: document.querySelector("#saveLeadButton"),
  cancelEditButton: document.querySelector("#cancelEditButton"),
  leadSearch: document.querySelector("#leadSearch"),
  leadList: document.querySelector("#leadList"),
  pipelineCount: document.querySelector("#pipelineCount"),
  emptyState: document.querySelector("#emptyState"),
  emptyMessage: document.querySelector("#emptyMessage"),
  newCount: document.querySelector("#newCount"),
  quotedCount: document.querySelector("#quotedCount"),
  dueCount: document.querySelector("#dueCount"),
  exportButton: document.querySelector("#exportButton"),
  importFile: document.querySelector("#importFile"),
  importButton: document.querySelector("#importButton"),
  startFreshButton: document.querySelector("#startFreshButton"),
  dataStatus: document.querySelector("#dataStatus"),
  liveStatus: document.querySelector("#liveStatus"),
  prototypeNotice: document.querySelector(".prototype-notice p"),
};

let leads = [];
let activeStatus = "all";
let storageAvailable = true;

function localIsoDate(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function offsetDate(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return localIsoDate(date);
}

function readableDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value || "")) return "No follow-up set";
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  if (localIsoDate(date) !== value) return "No follow-up set";
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(date);
}

function demoLeads() {
  const now = new Date().toISOString();
  return [
    {
      id: "demo-1", customerName: "Morgan Ellis", customerEmail: "morgan@example.com",
      customerPhone: "", serviceType: "Deep clean", followUpDate: offsetDate(0),
      leadNotes: "Two-bedroom apartment. Asked about a one-time visit next week.",
      status: "new", createdAt: now,
    },
    {
      id: "demo-2", customerName: "Avery Jones", customerEmail: "",
      customerPhone: "(555) 010-0142", serviceType: "Recurring clean", followUpDate: offsetDate(2),
      leadNotes: "Interested in biweekly service. Quote sent for a first visit.",
      status: "quoted", createdAt: now,
    },
    {
      id: "demo-3", customerName: "Priya Shah", customerEmail: "priya@example.com",
      customerPhone: "", serviceType: "Move-in / move-out", followUpDate: "",
      leadNotes: "Move-out clean booked for the end of the month.",
      status: "booked", createdAt: now,
    },
  ];
}

function announce(message) {
  refs.liveStatus.textContent = message;
}

function setDataStatus(message) {
  refs.dataStatus.textContent = message;
  announce(message);
}

function showStorageIssue() {
  refs.prototypeNotice.innerHTML = "<strong>Session-only prototype.</strong> Browser storage is unavailable, so changes may disappear when this tab closes. Export a backup before leaving.";
}

function showSavedNotice() {
  refs.prototypeNotice.innerHTML = "<strong>Local prototype.</strong> Information stays in this browser. Use sample customer details for now; export a backup before clearing browser data.";
}

function persist() {
  if (!storageAvailable) return false;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ schema: 1, leads }));
    return true;
  } catch {
    storageAvailable = false;
    showStorageIssue();
    announce("Browser storage is unavailable. Export a backup before leaving.");
    return false;
  }
}

function isValidDate(value) {
  return value === "" || readableDate(value) !== "No follow-up set";
}

function validImportedLead(item) {
  if (!item || typeof item !== "object") return false;
  const limits = { id: 100, customerName: 100, customerEmail: 150, customerPhone: 40, serviceType: 60, followUpDate: 10, leadNotes: 600, createdAt: 40 };
  if (!Object.entries(limits).every(([key, max]) => typeof item[key] === "string" && item[key].length <= max)) return false;
  let validTimestamp = false;
  try { validTimestamp = new Date(item.createdAt).toISOString() === item.createdAt; }
  catch { validTimestamp = false; }
  return Boolean(item.id && item.customerName.trim() && SERVICE_TYPES.has(item.serviceType) &&
    (item.customerEmail.trim() || item.customerPhone.trim()) &&
    Object.hasOwn(STATUS_LABELS, item.status) && isValidDate(item.followUpDate) &&
    validTimestamp);
}

function validPayload(payload) {
  if (!payload || payload.schema !== 1 || !Array.isArray(payload.leads) || payload.leads.length > MAX_LEADS) return false;
  if (!payload.leads.every(validImportedLead)) return false;
  return new Set(payload.leads.map((item) => item.id)).size === payload.leads.length;
}

function load() {
  let raw;
  try {
    raw = localStorage.getItem(STORAGE_KEY);
  } catch {
    storageAvailable = false;
    showStorageIssue();
    leads = demoLeads();
    return;
  }
  if (raw === null) {
    leads = demoLeads();
    persist();
    return;
  }
  try {
    const payload = JSON.parse(raw);
    if (!validPayload(payload)) throw new Error("Invalid backup format");
    leads = payload.leads;
  } catch {
    storageAvailable = false;
    leads = [];
    refs.prototypeNotice.innerHTML = "<strong>Saved data could not be read.</strong> No stored data will be overwritten. You can import a valid backup or export this session's changes.";
    refs.startFreshButton.hidden = false;
    setDataStatus("Saved data could not be read. Import a backup or choose Start fresh to remove only this prototype's saved data.");
  }
}

function makeElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function buildLeadCard(lead) {
  const card = makeElement("article", "lead-card");
  card.dataset.leadId = lead.id;
  card.tabIndex = -1;

  const header = makeElement("div", "lead-card-header");
  const heading = makeElement("div");
  heading.append(makeElement("h3", "", lead.customerName), makeElement("p", "service", lead.serviceType));
  const badge = makeElement("span", "status-badge", STATUS_LABELS[lead.status]);
  badge.dataset.status = lead.status;
  header.append(heading, badge);
  card.append(header);

  const meta = makeElement("div", "lead-meta");
  meta.append(makeElement("span", "", lead.customerEmail || lead.customerPhone));
  if (lead.followUpDate) {
    const due = lead.followUpDate <= localIsoDate() && lead.status !== "closed";
    meta.append(makeElement("span", due ? "due-label" : "", `${due ? "Follow up due" : "Follow up"} ${readableDate(lead.followUpDate)}`));
  }
  card.append(meta);
  if (lead.leadNotes) card.append(makeElement("p", "lead-note", lead.leadNotes));

  const actions = makeElement("div", "lead-actions");
  const edit = makeElement("button", "lead-action", "Edit details");
  edit.type = "button";
  edit.dataset.action = "edit";
  actions.append(edit);
  if (NEXT_STATUS[lead.status]) {
    const next = makeElement("button", "lead-action next", NEXT_LABEL[lead.status]);
    next.type = "button";
    next.dataset.action = "advance";
    actions.append(next);
  }
  card.append(actions);
  return card;
}

function render() {
  refs.newCount.textContent = String(leads.filter((lead) => lead.status === "new").length);
  refs.quotedCount.textContent = String(leads.filter((lead) => lead.status === "quoted").length);
  refs.dueCount.textContent = String(leads.filter((lead) => lead.followUpDate && lead.followUpDate <= localIsoDate() && lead.status !== "closed").length);

  const query = refs.leadSearch.value.trim().toLocaleLowerCase();
  const visible = leads.filter((lead) => {
    const statusMatch = activeStatus === "all" || lead.status === activeStatus;
    const searchable = `${lead.customerName} ${lead.serviceType} ${lead.leadNotes} ${lead.customerEmail} ${lead.customerPhone}`.toLocaleLowerCase();
    return statusMatch && searchable.includes(query);
  }).sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  refs.leadList.replaceChildren(...visible.map(buildLeadCard));
  refs.pipelineCount.textContent = `${visible.length} of ${leads.length} request${leads.length === 1 ? "" : "s"} shown`;
  refs.emptyState.hidden = visible.length > 0;
  refs.emptyMessage.textContent = leads.length === 0
    ? "Add your first inquiry to start the pipeline."
    : "Try a different search or status filter.";
}

function showFormError(message, control) {
  refs.formError.textContent = message;
  refs.formError.hidden = false;
  control?.focus();
}

function clearFormError() {
  refs.formError.hidden = true;
  refs.formError.textContent = "";
}

function resetForm() {
  refs.leadForm.reset();
  refs.leadId.value = "";
  refs.formTitle.textContent = "Add an inquiry";
  refs.saveLeadButton.textContent = "Save inquiry";
  refs.cancelEditButton.hidden = true;
  clearFormError();
}

function newId() {
  return globalThis.crypto?.randomUUID?.() || `lead-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function handleSubmit(event) {
  event.preventDefault();
  clearFormError();
  const customerName = refs.customerName.value.trim().replace(/\s+/g, " ");
  const customerEmail = refs.customerEmail.value.trim();
  const customerPhone = refs.customerPhone.value.trim();
  const serviceType = refs.serviceType.value;
  const followUpDate = refs.followUpDate.value;
  const leadNotes = refs.leadNotes.value.trim();
  if (!customerName) return showFormError("Add a customer name.", refs.customerName);
  if (!customerEmail && !customerPhone) return showFormError("Add an email or phone number for a reply.", refs.customerEmail);
  if (customerEmail && refs.customerEmail.validity.typeMismatch) return showFormError("Enter a valid email address.", refs.customerEmail);
  if (!serviceType) return showFormError("Choose a service.", refs.serviceType);
  if (!isValidDate(followUpDate)) return showFormError("Choose a valid follow-up date.", refs.followUpDate);
  if (leads.length >= MAX_LEADS && !refs.leadId.value) return showFormError("This prototype has reached its 1,000-request limit. Export a backup before adding more.");

  const existing = leads.find((item) => item.id === refs.leadId.value);
  const lead = {
    id: existing?.id || newId(), customerName, customerEmail, customerPhone,
    serviceType, followUpDate, leadNotes, status: refs.leadStatus.value,
    createdAt: existing?.createdAt || new Date().toISOString(),
  };
  if (existing) leads = leads.map((item) => item.id === existing.id ? lead : item);
  else leads.unshift(lead);
  persist();
  refs.leadSearch.value = "";
  activeStatus = "all";
  updateFilters();
  render();
  resetForm();
  announce(existing ? `${customerName} updated.` : `${customerName} added to the pipeline.`);
  const savedCard = [...refs.leadList.children].find((card) => card.dataset.leadId === lead.id);
  if (savedCard) savedCard.focus({ preventScroll: true });
}

function editLead(lead) {
  refs.leadId.value = lead.id;
  refs.customerName.value = lead.customerName;
  refs.customerEmail.value = lead.customerEmail;
  refs.customerPhone.value = lead.customerPhone;
  refs.serviceType.value = [...refs.serviceType.options].some((option) => option.value === lead.serviceType) ? lead.serviceType : "Other";
  refs.followUpDate.value = lead.followUpDate;
  refs.leadNotes.value = lead.leadNotes;
  refs.leadStatus.value = lead.status;
  refs.formTitle.textContent = `Edit ${lead.customerName}`;
  refs.saveLeadButton.textContent = "Save changes";
  refs.cancelEditButton.hidden = false;
  clearFormError();
  refs.customerName.scrollIntoView({ block: "center", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  refs.customerName.focus({ preventScroll: true });
  announce(`Editing ${lead.customerName}.`);
}

function handleLeadAction(event) {
  const button = event.target.closest("button[data-action]");
  const card = button?.closest(".lead-card");
  const lead = leads.find((item) => item.id === card?.dataset.leadId);
  if (!lead) return;
  if (button.dataset.action === "edit") return editLead(lead);
  const next = NEXT_STATUS[lead.status];
  if (!next) return;
  lead.status = next;
  persist();
  render();
  announce(`${lead.customerName} moved to ${STATUS_LABELS[next].toLowerCase()}.`);
  const updatedCard = [...refs.leadList.children].find((item) => item.dataset.leadId === lead.id);
  updatedCard?.focus({ preventScroll: true });
}

function exportBackup() {
  try {
    const backup = { schema: 1, exportedAt: new Date().toISOString(), leads };
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `service-business-backup-${localIsoDate()}.json`;
    document.body.append(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    setDataStatus(`Backup exported with ${leads.length} request${leads.length === 1 ? "" : "s"}.`);
  } catch {
    setDataStatus("Export did not work in this browser. Try again from a different browser.");
  }
}

async function importBackup() {
  const file = refs.importFile.files?.[0];
  if (!file) return;
  if (file.size > MAX_IMPORT_BYTES) return setDataStatus("Backup is too large. Choose a file under 1 MB.");
  let payload;
  try { payload = JSON.parse(await file.text()); }
  catch { return setDataStatus("Could not read that JSON backup."); }
  if (!validPayload(payload)) return setDataStatus("That backup does not match the Service Business OS format.");
  if (!window.confirm(`Replace ${leads.length} current requests with ${payload.leads.length} from this backup?`)) {
    setDataStatus("Import canceled. Current requests were kept.");
    return;
  }
  leads = payload.leads;
  storageAvailable = true;
  const saved = persist();
  if (saved) {
    showSavedNotice();
    refs.startFreshButton.hidden = true;
  }
  resetForm();
  refs.leadSearch.value = "";
  activeStatus = "all";
  updateFilters();
  refs.importFile.value = "";
  refs.importButton.disabled = true;
  render();
  setDataStatus(saved
    ? `${leads.length} requests imported. Export a new backup to keep a copy.`
    : `${leads.length} requests loaded for this session only. Export a backup before leaving.`);
}

function startFresh() {
  if (!window.confirm("Remove only the unreadable Service Business OS data in this browser and start with an empty pipeline?")) return;
  try {
    localStorage.removeItem(STORAGE_KEY);
    storageAvailable = true;
    leads = [];
    const saved = persist();
    if (saved) showSavedNotice();
    refs.startFreshButton.hidden = saved;
    resetForm();
    render();
    setDataStatus(saved ? "Started fresh with an empty pipeline." : "Started an empty session, but browser storage is unavailable. Export a backup before leaving.");
  } catch {
    setDataStatus("Could not clear the unreadable data in this browser.");
  }
}

function updateFilters() {
  document.querySelectorAll(".filter").forEach((button) => {
    const active = button.dataset.status === activeStatus;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function init() {
  load();
  render();
  refs.leadForm.addEventListener("submit", handleSubmit);
  refs.leadForm.addEventListener("input", clearFormError);
  refs.cancelEditButton.addEventListener("click", () => {
    resetForm();
    refs.customerName.focus();
    announce("Edit canceled.");
  });
  refs.leadSearch.addEventListener("input", render);
  refs.leadList.addEventListener("click", handleLeadAction);
  document.querySelectorAll(".filter").forEach((button) => {
    button.addEventListener("click", () => {
      activeStatus = button.dataset.status;
      updateFilters();
      render();
    });
  });
  refs.exportButton.addEventListener("click", exportBackup);
  refs.importFile.addEventListener("change", () => {
    refs.importButton.disabled = !refs.importFile.files?.length;
    if (refs.importFile.files?.[0]) setDataStatus(`${refs.importFile.files[0].name} selected. Choose Import backup to review replacement.`);
  });
  refs.importButton.addEventListener("click", importBackup);
  refs.startFreshButton.addEventListener("click", startFresh);
}

init();
