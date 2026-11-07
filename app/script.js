const STORAGE_KEY = "serviceBusinessOS.leads.v1";
const STATUS_LABELS = {
  new: "New inquiry",
  quoted: "Quote sent",
  booked: "Job booked",
  closed: "Closed",
};
const QUOTE_LABELS = { draft: "Draft quote", sent: "Awaiting decision", accepted: "Quote accepted", declined: "Quote declined" };
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
  dueList: document.querySelector("#dueList"),
  visitList: document.querySelector("#visitList"),
  viewDueButton: document.querySelector("#viewDueButton"),
  viewBookedButton: document.querySelector("#viewBookedButton"),
  overviewPanel: document.querySelector(".overview-panel"),
  pipelineTitle: document.querySelector("#pipelineTitle"),
  exportButton: document.querySelector("#exportButton"),
  importFile: document.querySelector("#importFile"),
  importButton: document.querySelector("#importButton"),
  startFreshButton: document.querySelector("#startFreshButton"),
  dataStatus: document.querySelector("#dataStatus"),
  liveStatus: document.querySelector("#liveStatus"),
  prototypeNotice: document.querySelector(".prototype-notice p"),
  quotePanel: document.querySelector("#quotePanel"),
  quoteTitle: document.querySelector("#quoteTitle"),
  quoteForm: document.querySelector("#quoteForm"),
  quoteLeadId: document.querySelector("#quoteLeadId"),
  quoteAmount: document.querySelector("#quoteAmount"),
  quoteStatus: document.querySelector("#quoteStatus"),
  quoteScope: document.querySelector("#quoteScope"),
  quoteError: document.querySelector("#quoteError"),
  cancelQuoteButton: document.querySelector("#cancelQuoteButton"),
  jobPanel: document.querySelector("#jobPanel"),
  jobForm: document.querySelector("#jobForm"),
  jobLeadId: document.querySelector("#jobLeadId"),
  jobTitle: document.querySelector("#jobTitle"),
  jobDate: document.querySelector("#jobDate"),
  jobError: document.querySelector("#jobError"),
  cancelJobButton: document.querySelector("#cancelJobButton"),
  repeatPanel: document.querySelector("#repeatPanel"),
  repeatForm: document.querySelector("#repeatForm"),
  repeatLeadId: document.querySelector("#repeatLeadId"),
  repeatTitle: document.querySelector("#repeatTitle"),
  repeatDate: document.querySelector("#repeatDate"),
  repeatError: document.querySelector("#repeatError"),
  removeRepeatButton: document.querySelector("#removeRepeatButton"),
  cancelRepeatButton: document.querySelector("#cancelRepeatButton"),
};

let leads = [];
let activeStatus = "all";
let storageAvailable = true;
let pendingImport = null;

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
      quote: { amountCents: 24000, scope: "First visit deep clean, then biweekly standard cleans.", status: "sent" },
    },
    {
      id: "demo-3", customerName: "Priya Shah", customerEmail: "priya@example.com",
      customerPhone: "", serviceType: "Move-in / move-out", followUpDate: "",
      leadNotes: "Move-out clean booked for the end of the month.",
      status: "booked", createdAt: now,
      quote: { amountCents: 32000, scope: "Move-out clean before handover.", status: "accepted" },
      job: { scheduledDate: offsetDate(7), status: "scheduled" },
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
  const quote = item.quote;
  const validQuote = quote == null || (typeof quote === "object" &&
    Number.isInteger(quote.amountCents) && quote.amountCents >= 1 && quote.amountCents <= 99999999 &&
    typeof quote.scope === "string" && quote.scope.trim() && quote.scope.length <= 600 &&
    Object.hasOwn(QUOTE_LABELS, quote.status));
  const job = item.job;
  const validJob = job == null || (typeof job === "object" &&
    typeof job.scheduledDate === "string" && isValidDate(job.scheduledDate) && job.scheduledDate &&
    ["scheduled", "completed"].includes(job.status) && quote?.status === "accepted" &&
    (job.repeatDate == null || (typeof job.repeatDate === "string" && job.repeatDate && isValidDate(job.repeatDate) && job.status === "completed")) &&
    ((job.status === "scheduled" && item.status === "booked") ||
      (job.status === "completed" && item.status === "closed")));
  return Boolean(item.id && item.customerName.trim() && SERVICE_TYPES.has(item.serviceType) &&
    (item.customerEmail.trim() || item.customerPhone.trim()) &&
    Object.hasOwn(STATUS_LABELS, item.status) && isValidDate(item.followUpDate) &&
    validTimestamp && validQuote && validJob);
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
  if (lead.followUpDate && lead.status !== "closed") {
    const due = lead.followUpDate <= localIsoDate();
    meta.append(makeElement("span", due ? "due-label" : "", `${due ? "Follow up due" : "Follow up"} ${readableDate(lead.followUpDate)}`));
  }
  card.append(meta);
  if (lead.leadNotes) card.append(makeElement("p", "lead-note", lead.leadNotes));
  if (lead.quote) {
    const quote = makeElement("div", "quote-summary");
    quote.append(
      makeElement("strong", "", `${new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(lead.quote.amountCents / 100)} · ${QUOTE_LABELS[lead.quote.status]}`),
      makeElement("p", "", lead.quote.scope),
    );
    card.append(quote);
  }
  if (lead.job) {
    const job = makeElement("p", "job-summary", `${lead.job.status === "completed" ? "Completed" : "Booked for"} ${readableDate(lead.job.scheduledDate)}`);
    card.append(job);
  }
  if (lead.job?.repeatDate) {
    const due = lead.job.repeatDate <= localIsoDate();
    card.append(makeElement("p", due ? "repeat-summary due-label" : "repeat-summary", `${due ? "Repeat follow-up due" : "Repeat follow-up"} ${readableDate(lead.job.repeatDate)}`));
  }

  const actions = makeElement("div", "lead-actions");
  const edit = makeElement("button", "lead-action", "Edit details");
  edit.type = "button";
  edit.dataset.action = "edit";
  actions.append(edit);
  const quoteButton = makeElement("button", "lead-action", lead.quote ? "Edit quote" : "Prepare quote");
  quoteButton.type = "button";
  quoteButton.dataset.action = "quote";
  actions.append(quoteButton);
  if (lead.quote?.status === "sent") {
    for (const [status, label] of [["accepted", "Accepted"], ["declined", "Declined"]]) {
      const decision = makeElement("button", "lead-action", label);
      decision.type = "button";
      decision.dataset.action = status;
      actions.append(decision);
    }
  }
  if (lead.quote?.status === "accepted" && lead.job?.status !== "completed") {
    const schedule = makeElement("button", "lead-action next", lead.job ? "Reschedule job" : "Schedule job");
    schedule.type = "button";
    schedule.dataset.action = "schedule";
    actions.append(schedule);
  }
  if (lead.job?.status === "scheduled") {
    const complete = makeElement("button", "lead-action next", "Mark completed");
    complete.type = "button";
    complete.dataset.action = "complete";
    actions.append(complete);
  }
  if (lead.job?.status === "completed") {
    const repeat = makeElement("button", "lead-action next", lead.job.repeatDate ? "Edit repeat reminder" : "Plan repeat follow-up");
    repeat.type = "button";
    repeat.dataset.action = "repeat";
    actions.append(repeat);
  }
  card.append(actions);
  return card;
}

function followUpDueDate(lead, today) {
  if (lead.status !== "closed" && lead.followUpDate && lead.followUpDate <= today) return lead.followUpDate;
  if (lead.job?.repeatDate && lead.job.repeatDate <= today) return lead.job.repeatDate;
  return "";
}

function overviewItem(lead, detail) {
  const item = document.createElement("li");
  const button = makeElement("button", "overview-item");
  button.type = "button";
  button.dataset.jumpLead = lead.id;
  button.append(makeElement("strong", "", lead.customerName), makeElement("span", "", detail));
  item.append(button);
  return item;
}

function renderOverview(due, today) {
  const sortedDue = [...due].sort((a, b) =>
    followUpDueDate(a, today).localeCompare(followUpDueDate(b, today)) || a.customerName.localeCompare(b.customerName));
  const visits = leads.filter((lead) => lead.job?.status === "scheduled")
    .sort((a, b) => a.job.scheduledDate.localeCompare(b.job.scheduledDate) || a.customerName.localeCompare(b.customerName));
  refs.dueList.replaceChildren(...sortedDue.slice(0, 3).map((lead) => {
    const date = followUpDueDate(lead, today);
    const kind = lead.job?.repeatDate === date ? "Repeat follow-up" : "Inquiry follow-up";
    return overviewItem(lead, `${kind} · ${date < today ? "Overdue since" : "Due"} ${readableDate(date)}`);
  }));
  refs.visitList.replaceChildren(...visits.slice(0, 3).map((lead) => {
    const date = lead.job.scheduledDate;
    return overviewItem(lead, `${date < today ? "Visit overdue since" : date === today ? "Visit today" : "Visit"} ${readableDate(date)}`);
  }));
  if (!sortedDue.length) refs.dueList.append(makeElement("li", "overview-empty", "No follow-ups due right now."));
  if (!visits.length) refs.visitList.append(makeElement("li", "overview-empty", "No visits booked yet."));
  refs.viewDueButton.hidden = sortedDue.length <= 3;
  refs.viewBookedButton.hidden = visits.length <= 3;
}

function render() {
  const today = localIsoDate();
  const due = leads.filter((lead) => followUpDueDate(lead, today));
  refs.newCount.textContent = String(leads.filter((lead) => lead.status === "new").length);
  refs.quotedCount.textContent = String(leads.filter((lead) => lead.quote?.status === "sent").length);
  refs.dueCount.textContent = String(due.length);
  renderOverview(due, today);

  const query = refs.leadSearch.value.trim().toLocaleLowerCase();
  const visible = leads.filter((lead) => {
    const statusMatch = activeStatus === "all" || (activeStatus === "due" ? Boolean(followUpDueDate(lead, today)) : lead.status === activeStatus);
    const searchable = `${lead.customerName} ${lead.serviceType} ${lead.leadNotes} ${lead.customerEmail} ${lead.customerPhone} ${lead.quote?.scope || ""}`.toLocaleLowerCase();
    return statusMatch && searchable.includes(query);
  }).sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  refs.leadList.replaceChildren(...visible.map(buildLeadCard));
  refs.pipelineCount.textContent = `${visible.length} of ${leads.length} request${leads.length === 1 ? "" : "s"} shown`;
  refs.emptyState.hidden = visible.length > 0;
  refs.emptyMessage.textContent = leads.length === 0
    ? "Add your first inquiry to start the pipeline."
    : "Try a different search or status filter.";
}

function showPipeline(status) {
  refs.leadSearch.value = "";
  activeStatus = status;
  updateFilters();
  render();
  refs.pipelineTitle.scrollIntoView({ block: "start", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  refs.pipelineTitle.focus({ preventScroll: true });
}

function jumpToLead(id) {
  refs.leadSearch.value = "";
  activeStatus = "all";
  updateFilters();
  render();
  const card = [...refs.leadList.children].find((item) => item.dataset.leadId === id);
  card?.scrollIntoView({ block: "center", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  card?.focus({ preventScroll: true });
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
  const existing = leads.find((item) => item.id === refs.leadId.value);
  if (!customerName) return showFormError("Add a customer name.", refs.customerName);
  if (!customerEmail && !customerPhone) return showFormError("Add an email or phone number for a reply.", refs.customerEmail);
  if (customerEmail && refs.customerEmail.validity.typeMismatch) return showFormError("Enter a valid email address.", refs.customerEmail);
  if (!serviceType) return showFormError("Choose a service.", refs.serviceType);
  if (!isValidDate(followUpDate)) return showFormError("Choose a valid follow-up date.", refs.followUpDate);
  if (leads.length >= MAX_LEADS && !refs.leadId.value) return showFormError("This prototype has reached its 1,000-request limit. Export a backup before adding more.");
  if (refs.leadStatus.value === "quoted" && !["sent", "accepted"].includes(existing?.quote?.status) && existing?.status !== "quoted") {
    return showFormError("Prepare and send a quote before marking this request quoted.", refs.leadStatus);
  }
  if (refs.leadStatus.value === "booked" && !existing?.job && existing?.status !== "booked") {
    return showFormError("Schedule a job before marking this request booked.", refs.leadStatus);
  }
  if (existing?.job && refs.leadStatus.value !== (existing.job.status === "completed" ? "closed" : "booked")) {
    return showFormError("The job sets this request's status. Update the job from its request card.", refs.leadStatus);
  }

  const lead = {
    id: existing?.id || newId(), customerName, customerEmail, customerPhone,
    serviceType, followUpDate, leadNotes, status: refs.leadStatus.value,
    createdAt: existing?.createdAt || new Date().toISOString(),
    quote: existing?.quote || null, job: existing?.job || null,
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
  if (button.dataset.action === "quote") return editQuote(lead);
  if (button.dataset.action === "schedule") return editJob(lead);
  if (button.dataset.action === "repeat") return editRepeat(lead);
  if (button.dataset.action === "complete") {
    if (lead.job?.status !== "scheduled") return;
    lead.job.status = "completed";
    lead.status = "closed";
    persist(); render();
    announce(`${lead.customerName}'s job marked completed.`);
    refs.leadList.querySelector(`[data-lead-id="${CSS.escape(lead.id)}"]`)?.focus({ preventScroll: true });
    return;
  }
  if (button.dataset.action === "accepted" || button.dataset.action === "declined") {
    if (lead.quote?.status !== "sent") return;
    lead.quote.status = button.dataset.action;
    if (button.dataset.action === "declined") lead.status = "closed";
    else if (lead.status !== "booked") lead.status = "quoted";
    persist();
    render();
    announce(`${lead.customerName}'s quote ${button.dataset.action}.`);
    refs.leadList.querySelector(`[data-lead-id="${CSS.escape(lead.id)}"]`)?.focus({ preventScroll: true });
    return;
  }
}

function editJob(lead) {
  if (lead.quote?.status !== "accepted" || lead.job?.status === "completed") return;
  refs.jobLeadId.value = lead.id;
  refs.jobTitle.textContent = `${lead.job ? "Reschedule" : "Schedule"} job for ${lead.customerName}`;
  refs.jobDate.value = lead.job?.scheduledDate || "";
  refs.jobError.hidden = true;
  refs.jobPanel.hidden = false;
  refs.jobPanel.scrollIntoView({ block: "start", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  refs.jobDate.focus({ preventScroll: true });
}

function closeJobEditor() {
  const leadId = refs.jobLeadId.value;
  refs.jobPanel.hidden = true;
  refs.jobLeadId.value = "";
  [...refs.leadList.children].find((card) => card.dataset.leadId === leadId)?.focus({ preventScroll: true });
}

function handleJobSubmit(event) {
  event.preventDefault();
  const lead = leads.find((item) => item.id === refs.jobLeadId.value);
  if (!lead || lead.quote?.status !== "accepted" || lead.job?.status === "completed") return;
  const scheduledDate = refs.jobDate.value;
  if (!scheduledDate || !isValidDate(scheduledDate)) {
    refs.jobError.textContent = "Choose a valid visit date.";
    refs.jobError.hidden = false;
    refs.jobDate.focus();
    return;
  }
  lead.job = { scheduledDate, status: "scheduled" };
  lead.status = "booked";
  persist(); render(); closeJobEditor();
  announce(`${lead.customerName}'s job booked for ${readableDate(scheduledDate)}.`);
}

function editRepeat(lead) {
  if (lead.job?.status !== "completed") return;
  refs.repeatLeadId.value = lead.id;
  refs.repeatTitle.textContent = `Repeat follow-up for ${lead.customerName}`;
  refs.repeatDate.value = lead.job.repeatDate || "";
  refs.repeatError.hidden = true;
  refs.removeRepeatButton.hidden = !lead.job.repeatDate;
  refs.repeatPanel.hidden = false;
  refs.repeatPanel.scrollIntoView({ block: "start", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  refs.repeatDate.focus({ preventScroll: true });
}

function closeRepeatEditor() {
  const leadId = refs.repeatLeadId.value;
  refs.repeatPanel.hidden = true;
  refs.repeatLeadId.value = "";
  [...refs.leadList.children].find((card) => card.dataset.leadId === leadId)?.focus({ preventScroll: true });
}

function handleRepeatSubmit(event) {
  event.preventDefault();
  const lead = leads.find((item) => item.id === refs.repeatLeadId.value);
  if (lead?.job?.status !== "completed") return;
  const date = refs.repeatDate.value;
  if (!date || !isValidDate(date)) {
    refs.repeatError.textContent = "Choose a valid follow-up date.";
    refs.repeatError.hidden = false;
    refs.repeatDate.focus();
    return;
  }
  lead.job.repeatDate = date;
  persist(); render(); closeRepeatEditor();
  announce(`Repeat follow-up saved for ${lead.customerName} on ${readableDate(date)}.`);
}

function removeRepeat() {
  const lead = leads.find((item) => item.id === refs.repeatLeadId.value);
  if (!lead?.job?.repeatDate) return;
  delete lead.job.repeatDate;
  persist(); render(); closeRepeatEditor();
  announce(`Repeat follow-up removed for ${lead.customerName}.`);
}

function editQuote(lead) {
  refs.quoteLeadId.value = lead.id;
  refs.quoteTitle.textContent = `${lead.quote ? "Edit" : "Prepare"} quote for ${lead.customerName}`;
  refs.quoteAmount.value = lead.quote ? (lead.quote.amountCents / 100).toFixed(2) : "";
  refs.quoteStatus.value = lead.quote?.status || (lead.status === "booked" ? "accepted" : "draft");
  refs.quoteScope.value = lead.quote?.scope || "";
  refs.quoteError.hidden = true;
  refs.quotePanel.hidden = false;
  refs.quotePanel.scrollIntoView({ block: "start", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  refs.quoteAmount.focus({ preventScroll: true });
}

function closeQuoteEditor() {
  const leadId = refs.quoteLeadId.value;
  refs.quotePanel.hidden = true;
  refs.quoteLeadId.value = "";
  [...refs.leadList.children].find((card) => card.dataset.leadId === leadId)?.focus({ preventScroll: true });
}

function handleQuoteSubmit(event) {
  event.preventDefault();
  const lead = leads.find((item) => item.id === refs.quoteLeadId.value);
  if (!lead) return;
  const amount = Number(refs.quoteAmount.value);
  const scope = refs.quoteScope.value.trim();
  const amountCents = Math.round(amount * 100);
  let error = "";
  let control;
  if (!Number.isFinite(amount) || amount < .01 || amount > 999999.99 || Math.abs(amount * 100 - amountCents) > .00001) {
    error = "Enter a price between $0.01 and $999,999.99, using cents if needed.";
    control = refs.quoteAmount;
  } else if (!scope) {
    error = "Describe what this quote includes.";
    control = refs.quoteScope;
  } else if (lead.job && refs.quoteStatus.value !== "accepted") {
    error = "A scheduled or completed job needs an accepted quote.";
    control = refs.quoteStatus;
  }
  if (error) {
    refs.quoteError.textContent = error;
    refs.quoteError.hidden = false;
    control.focus();
    return;
  }
  lead.quote = { amountCents, scope, status: refs.quoteStatus.value };
  if (!lead.job) {
    if (lead.quote.status === "declined") lead.status = "closed";
    else if (lead.quote.status === "sent" || (lead.quote.status === "accepted" && lead.status !== "booked")) lead.status = "quoted";
    else if (lead.status === "closed" || lead.status === "quoted") lead.status = "new";
  }
  persist();
  refs.quotePanel.hidden = true;
  refs.quoteLeadId.value = "";
  refs.jobPanel.hidden = true;
  refs.jobLeadId.value = "";
  refs.repeatPanel.hidden = true;
  refs.repeatLeadId.value = "";
  refs.leadSearch.value = "";
  activeStatus = "all";
  updateFilters();
  render();
  announce(`${QUOTE_LABELS[lead.quote.status]} saved for ${lead.customerName}.`);
  refs.leadList.querySelector(`[data-lead-id="${CSS.escape(lead.id)}"]`)?.focus({ preventScroll: true });
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

async function previewImport() {
  pendingImport = null;
  refs.importButton.disabled = true;
  const file = refs.importFile.files?.[0];
  if (!file) return setDataStatus("No backup selected.");
  if (file.size > MAX_IMPORT_BYTES) return setDataStatus("Backup is too large. Choose a file under 1 MB.");
  setDataStatus("Checking backup…");
  let payload;
  try { payload = JSON.parse(await file.text()); }
  catch {
    if (refs.importFile.files?.[0] === file) setDataStatus("Could not read that JSON backup.");
    return;
  }
  if (refs.importFile.files?.[0] !== file) return;
  if (!validPayload(payload)) return setDataStatus("That backup does not match the Service Business OS format.");
  pendingImport = { file, payload };
  refs.importButton.disabled = false;
  const counts = Object.keys(STATUS_LABELS).map((status) =>
    `${payload.leads.filter((lead) => lead.status === status).length} ${status}`).join(", ");
  setDataStatus(`Ready to import ${payload.leads.length} request${payload.leads.length === 1 ? "" : "s"} (${counts}). This will replace ${leads.length} current request${leads.length === 1 ? "" : "s"}. Export a copy of your current requests first if you want to keep them.`);
}

function importBackup() {
  if (!pendingImport || pendingImport.file !== refs.importFile.files?.[0]) return;
  const { payload } = pendingImport;
  if (!window.confirm(`Replace ${leads.length} current request${leads.length === 1 ? "" : "s"} with ${payload.leads.length} from this backup? This cannot be undone unless you exported a copy.`)) {
    setDataStatus("Import canceled. Current requests were kept.");
    return;
  }
  leads = payload.leads;
  refs.quotePanel.hidden = true;
  refs.quoteLeadId.value = "";
  refs.jobPanel.hidden = true;
  refs.jobLeadId.value = "";
  refs.repeatPanel.hidden = true;
  refs.repeatLeadId.value = "";
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
  pendingImport = null;
  render();
  setDataStatus(saved
    ? `${leads.length} request${leads.length === 1 ? "" : "s"} imported. Export a new backup to keep a copy.`
    : `${leads.length} request${leads.length === 1 ? "" : "s"} loaded for this session only. Export a backup before leaving.`);
}

function startFresh() {
  if (!window.confirm("Remove only the unreadable Service Business OS data in this browser and start with an empty pipeline?")) return;
  try {
    localStorage.removeItem(STORAGE_KEY);
    storageAvailable = true;
    leads = [];
    refs.quotePanel.hidden = true;
    refs.quoteLeadId.value = "";
    refs.jobPanel.hidden = true;
    refs.jobLeadId.value = "";
    refs.repeatPanel.hidden = true;
    refs.repeatLeadId.value = "";
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
  refs.overviewPanel.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-jump-lead]");
    if (button) jumpToLead(button.dataset.jumpLead);
  });
  refs.viewDueButton.addEventListener("click", () => showPipeline("due"));
  refs.viewBookedButton.addEventListener("click", () => showPipeline("booked"));
  refs.leadList.addEventListener("click", handleLeadAction);
  refs.quoteForm.addEventListener("submit", handleQuoteSubmit);
  refs.quoteForm.addEventListener("input", () => { refs.quoteError.hidden = true; });
  refs.cancelQuoteButton.addEventListener("click", () => { closeQuoteEditor(); announce("Quote edit canceled."); });
  refs.jobForm.addEventListener("submit", handleJobSubmit);
  refs.jobForm.addEventListener("input", () => { refs.jobError.hidden = true; });
  refs.cancelJobButton.addEventListener("click", () => { closeJobEditor(); announce("Job scheduling canceled."); });
  refs.repeatForm.addEventListener("submit", handleRepeatSubmit);
  refs.repeatForm.addEventListener("input", () => { refs.repeatError.hidden = true; });
  refs.removeRepeatButton.addEventListener("click", removeRepeat);
  refs.cancelRepeatButton.addEventListener("click", () => { closeRepeatEditor(); announce("Repeat follow-up canceled."); });
  document.querySelectorAll(".filter").forEach((button) => {
    button.addEventListener("click", () => {
      activeStatus = button.dataset.status;
      updateFilters();
      render();
    });
  });
  refs.exportButton.addEventListener("click", exportBackup);
  refs.importFile.addEventListener("change", previewImport);
  refs.importButton.addEventListener("click", importBackup);
  refs.startFreshButton.addEventListener("click", startFresh);
}

init();
