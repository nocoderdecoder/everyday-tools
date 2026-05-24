const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const todayDate = document.querySelector("#todayDate");
const billTotal = document.querySelector("#billTotal");
const tipPercent = document.querySelector("#tipPercent");
const peopleCount = document.querySelector("#peopleCount");
const splitResult = document.querySelector("#splitResult");
const tipAmountResult = document.querySelector("#tipAmountResult");
const totalWithTipResult = document.querySelector("#totalWithTipResult");
const messyText = document.querySelector("#messyText");
const cleanTextButton = document.querySelector("#cleanTextButton");
const copyTextButton = document.querySelector("#copyTextButton");
const copyStatus = document.querySelector("#copyStatus");
const focusInputs = Array.from(document.querySelectorAll(".focus-input"));
const saveFocusButton = document.querySelector("#saveFocusButton");
const clearFocusButton = document.querySelector("#clearFocusButton");
const focusStatus = document.querySelector("#focusStatus");
const readingText = document.querySelector("#readingText");
const readingTimeResult = document.querySelector("#readingTimeResult");
const readingWordCount = document.querySelector("#readingWordCount");
const timerMinutes = document.querySelector("#timerMinutes");
const timerRemaining = document.querySelector("#timerRemaining");
const timerStartButton = document.querySelector("#timerStartButton");
const timerPauseButton = document.querySelector("#timerPauseButton");
const timerResetButton = document.querySelector("#timerResetButton");
const timerStatus = document.querySelector("#timerStatus");
const timerPreset5 = document.querySelector("#timerPreset5");
const timerPreset10 = document.querySelector("#timerPreset10");
const timerPreset25 = document.querySelector("#timerPreset25");
const unitMode = document.querySelector("#unitMode");
const unitValue = document.querySelector("#unitValue");
const unitResult = document.querySelector("#unitResult");
const copyUnitButton = document.querySelector("#copyUnitButton");
const unitStatus = document.querySelector("#unitStatus");
const themeToggle = document.querySelector("#themeToggle");
const pickerItems = document.querySelector("#pickerItems");
const pickerResult = document.querySelector("#pickerResult");
const pickerButton = document.querySelector("#pickerButton");
const pickerCopyButton = document.querySelector("#pickerCopyButton");
const pickerStatus = document.querySelector("#pickerStatus");

todayDate.textContent = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  month: "short",
  day: "numeric",
}).format(new Date());

function getSystemTheme() {
  if (!window.matchMedia) return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

const themeStorageKey = "themePreference";
const themeLabels = {
  system: "System",
  dark: "Dark",
  light: "Light",
};

function normalizeThemePreference(value) {
  if (value === "dark" || value === "light" || value === "system") return value;
  return "system";
}

function getThemePreference() {
  return normalizeThemePreference(localStorage.getItem(themeStorageKey));
}

function resolveTheme(preference) {
  if (preference === "system") return getSystemTheme();
  return preference;
}

function renderTheme(preference, source = "stored") {
  const resolved = resolveTheme(preference);
  const nextTheme = resolved === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = nextTheme === "dark" ? "dark" : "";
  if (nextTheme === "light") delete document.documentElement.dataset.theme;

  if (!themeToggle) return;
  const label = themeLabels[preference] || "System";
  themeToggle.textContent = `Theme: ${label}`;
  themeToggle.dataset.source = source;
  themeToggle.setAttribute("aria-label", `Theme: ${label}. Click to change theme.`);
}

function setThemePreference(preference) {
  localStorage.setItem(themeStorageKey, preference);
  renderTheme(preference, "stored");
}

function getNextThemePreference(preference) {
  switch (preference) {
    case "system":
      return "dark";
    case "dark":
      return "light";
    default:
      return "system";
  }
}

function initThemeToggle() {
  if (!themeToggle) return;

  const stored = getThemePreference();
  renderTheme(stored, stored === "system" ? "system" : "stored");

  if (window.matchMedia) {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    media.addEventListener("change", () => {
      if (getThemePreference() !== "system") return;
      renderTheme("system", "system");
    });
  }

  themeToggle.addEventListener("click", () => {
    const current = getThemePreference();
    const next = getNextThemePreference(current);
    setThemePreference(next);
  });
}

initThemeToggle();

function parseNumberLike(value) {
  return Number(String(value).replace(/[^0-9.-]/g, "")) || 0;
}

function calculateSplit() {
  const bill = parseNumberLike(billTotal.value);
  const tip = parseNumberLike(tipPercent.value);
  const people = Math.max(parseNumberLike(peopleCount.value) || 1, 1);
  const tipAmount = bill * (tip / 100);
  const total = bill + tipAmount;
  splitResult.textContent = currency.format(total / people);
  tipAmountResult.textContent = currency.format(tipAmount);
  totalWithTipResult.textContent = currency.format(total);
}

[billTotal, tipPercent, peopleCount].forEach((input) => {
  input.addEventListener("input", calculateSplit);
});

cleanTextButton.addEventListener("click", () => {
  messyText.value = messyText.value
    .split("\n")
    .map((line) => line.replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .join("\n");
  copyStatus.textContent = "Text cleaned.";
});

copyTextButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(messyText.value);
    copyStatus.textContent = "Copied.";
  } catch {
    copyStatus.textContent = "Copy did not work in this browser.";
  }
});

function loadFocus() {
  const saved = JSON.parse(localStorage.getItem("dailyFocus") || "[]");
  focusInputs.forEach((input, index) => {
    input.value = saved[index] || "";
  });
  focusStatus.textContent = saved.some((value) => String(value).trim())
    ? "Loaded from this browser."
    : "Saved in this browser.";
}

function countWords(text) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function updateReadingTime() {
  const words = countWords(readingText.value);
  const minutes = words === 0 ? 0 : Math.max(1, Math.ceil(words / 200));
  readingTimeResult.textContent = `${minutes} min`;
  readingWordCount.textContent = `${words.toLocaleString()} word${words === 1 ? "" : "s"}.`;
}

readingText.addEventListener("input", updateReadingTime);

function formatTimer(seconds) {
  const clamped = Math.max(0, Math.floor(seconds));
  const minutes = Math.floor(clamped / 60);
  const remainingSeconds = clamped % 60;
  return `${String(minutes)}:${String(remainingSeconds).padStart(2, "0")}`;
}

function parseTimerInput(raw) {
  const cleaned = String(raw).trim();
  if (!cleaned) return 0;

  if (cleaned.includes(":")) {
    const [minutesText, secondsText = "0"] = cleaned.split(":");
    const minutes = parseNumberLike(minutesText);
    const seconds = parseNumberLike(secondsText);
    return Math.max(0, minutes * 60 + seconds);
  }

  const minutes = parseNumberLike(cleaned);
  return Math.max(0, minutes * 60);
}

let timerTotalSeconds = 10 * 60;
let timerRemainingSeconds = timerTotalSeconds;
let timerIntervalId = null;

function renderTimer() {
  if (!timerRemaining) return;
  timerRemaining.textContent = formatTimer(timerRemainingSeconds);
  if (timerStartButton) timerStartButton.disabled = timerIntervalId !== null || timerRemainingSeconds === 0;
  if (timerPauseButton) timerPauseButton.disabled = timerIntervalId === null;
}

function setTimerToInput() {
  if (!timerMinutes) return;
  const nextTotal = parseTimerInput(timerMinutes.value);
  timerTotalSeconds = nextTotal;
  timerRemainingSeconds = nextTotal;
  localStorage.setItem("countdownTimerMinutes", timerMinutes.value);
  if (timerStatus) timerStatus.textContent = "";
  renderTimer();
}

function stopTimerInterval() {
  if (timerIntervalId === null) return;
  window.clearInterval(timerIntervalId);
  timerIntervalId = null;
}

function startTimer() {
  if (!timerMinutes) return;
  if (timerIntervalId !== null) return;

  if (timerRemainingSeconds <= 0) {
    setTimerToInput();
  }

  if (timerRemainingSeconds <= 0) {
    if (timerStatus) timerStatus.textContent = "Enter minutes first.";
    return;
  }

  const startedAt = Date.now();
  let elapsedSeconds = 0;

  if (timerStatus) timerStatus.textContent = "Running…";
  timerIntervalId = window.setInterval(() => {
    const now = Date.now();
    const nextElapsedSeconds = Math.floor((now - startedAt) / 1000);
    if (nextElapsedSeconds === elapsedSeconds) return;
    const delta = nextElapsedSeconds - elapsedSeconds;
    elapsedSeconds = nextElapsedSeconds;
    timerRemainingSeconds = Math.max(0, timerRemainingSeconds - delta);
    renderTimer();

    if (timerRemainingSeconds === 0) {
      stopTimerInterval();
      if (timerStatus) timerStatus.textContent = "Done.";
      renderTimer();
    }
  }, 200);

  renderTimer();
}

function pauseTimer() {
  stopTimerInterval();
  if (timerStatus) timerStatus.textContent = timerRemainingSeconds === 0 ? "Done." : "Paused.";
  renderTimer();
}

function resetTimer() {
  stopTimerInterval();
  setTimerToInput();
  if (timerStatus) timerStatus.textContent = "Reset.";
  renderTimer();
}

function setTimerPreset(minutes) {
  if (!timerMinutes) return;
  timerMinutes.value = String(minutes);
  setTimerToInput();
}

function initTimer() {
  if (!timerMinutes || !timerRemaining || !timerStartButton) return;

  const saved = localStorage.getItem("countdownTimerMinutes");
  if (saved) {
    timerMinutes.value = saved;
  }

  setTimerToInput();
  timerMinutes.addEventListener("input", () => {
    pauseTimer();
    setTimerToInput();
  });
  timerStartButton.addEventListener("click", startTimer);
  if (timerPauseButton) timerPauseButton.addEventListener("click", pauseTimer);
  if (timerResetButton) timerResetButton.addEventListener("click", resetTimer);
  if (timerPreset5) timerPreset5.addEventListener("click", () => setTimerPreset(5));
  if (timerPreset10) timerPreset10.addEventListener("click", () => setTimerPreset(10));
  if (timerPreset25) timerPreset25.addEventListener("click", () => setTimerPreset(25));

  renderTimer();
}

function newId() {
  if (window.crypto && typeof window.crypto.randomUUID === "function") {
    return window.crypto.randomUUID();
  }
  return String(Date.now() + Math.random());
}

const defaultPackingItems = [
  { id: "phone", label: "Phone", checked: false },
  { id: "wallet", label: "Wallet", checked: false },
  { id: "keys", label: "Keys", checked: false },
  { id: "charger", label: "Charger", checked: false },
  { id: "water", label: "Water bottle", checked: false },
  { id: "meds", label: "Medication", checked: false },
];

function loadPackingItems() {
  try {
    const raw = localStorage.getItem("packingChecklist");
    if (!raw) return defaultPackingItems.slice();
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return defaultPackingItems.slice();
    return parsed
      .filter((item) => item && typeof item.label === "string")
      .map((item) => ({
        id: typeof item.id === "string" ? item.id : newId(),
        label: item.label.trim() || "Item",
        checked: Boolean(item.checked),
      }));
  } catch {
    return defaultPackingItems.slice();
  }
}

function savePackingItems(items) {
  localStorage.setItem("packingChecklist", JSON.stringify(items));
}

let checklistEls = null;

function setChecklistStatus(message) {
  if (!checklistEls?.status) return;
  checklistEls.status.textContent = message;
}

let packingItems = loadPackingItems();

function renderPackingChecklist() {
  if (!checklistEls?.list) return;
  checklistEls.list.innerHTML = "";

  packingItems.forEach((item) => {
    const li = document.createElement("li");
    li.className = "checklist-item";

    const label = document.createElement("label");
    label.className = "checklist-label";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.checked;
    checkbox.dataset.id = item.id;

    const text = document.createElement("span");
    text.textContent = item.label;

    label.append(checkbox, text);
    li.append(label);
    checklistEls.list.append(li);
  });
}

function addPackingItem(label) {
  const cleaned = String(label).trim().replace(/\s+/g, " ");
  if (!cleaned) {
    setChecklistStatus("Type an item name first.");
    return;
  }

  const nextItem = {
    id: newId(),
    label: cleaned,
    checked: false,
  };
  packingItems = [nextItem, ...packingItems];
  savePackingItems(packingItems);
  renderPackingChecklist();
  setChecklistStatus("Added.");
  if (checklistEls?.newItem) checklistEls.newItem.value = "";
}

function clearCheckedItems() {
  const before = packingItems.length;
  packingItems = packingItems.filter((item) => !item.checked);
  if (packingItems.length === before) {
    setChecklistStatus("No checked items to clear.");
    return;
  }
  savePackingItems(packingItems);
  renderPackingChecklist();
  setChecklistStatus("Cleared checked items.");
}

function resetPackingChecklist() {
  packingItems = defaultPackingItems.slice();
  savePackingItems(packingItems);
  renderPackingChecklist();
  setChecklistStatus("Reset to defaults.");
}

function initPackingChecklist() {
  const list = document.querySelector("#checklistList");
  if (!list) return;

  checklistEls = {
    list,
    newItem: document.querySelector("#checklistNewItem"),
    addButton: document.querySelector("#checklistAddButton"),
    clearCheckedButton: document.querySelector("#checklistClearCheckedButton"),
    resetButton: document.querySelector("#checklistResetButton"),
    status: document.querySelector("#checklistStatus"),
  };

  renderPackingChecklist();

  list.addEventListener("change", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) return;
    if (target.type !== "checkbox") return;
    const id = target.dataset.id;
    if (!id) return;
    packingItems = packingItems.map((item) => (item.id === id ? { ...item, checked: target.checked } : item));
    savePackingItems(packingItems);
    setChecklistStatus("Saved in this browser.");
  });

  if (checklistEls.addButton && checklistEls.newItem) {
    checklistEls.addButton.addEventListener("click", () => addPackingItem(checklistEls.newItem.value));
    checklistEls.newItem.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      addPackingItem(checklistEls.newItem.value);
    });
  }

  if (checklistEls.clearCheckedButton) checklistEls.clearCheckedButton.addEventListener("click", clearCheckedItems);
  if (checklistEls.resetButton) checklistEls.resetButton.addEventListener("click", resetPackingChecklist);
}

function formatNumber(value, maximumFractionDigits = 2) {
  if (!Number.isFinite(value)) return "—";
  return value.toLocaleString("en-US", {
    maximumFractionDigits,
  });
}

function updateUnitConverter() {
  const raw = unitValue.value.trim();
  if (!raw) {
    unitResult.textContent = "0";
    unitStatus.textContent = "";
    return;
  }

  const input = parseNumberLike(raw);
  const mode = unitMode.value;
  let output = 0;
  let unitLabel = "";
  let digits = 2;

  switch (mode) {
    case "mi_km":
      output = input * 1.609344;
      unitLabel = "km";
      break;
    case "km_mi":
      output = input / 1.609344;
      unitLabel = "mi";
      break;
    case "lb_kg":
      output = input * 0.45359237;
      unitLabel = "kg";
      break;
    case "kg_lb":
      output = input / 0.45359237;
      unitLabel = "lb";
      break;
    case "f_c":
      output = (input - 32) * (5 / 9);
      unitLabel = "°C";
      digits = 1;
      break;
    case "c_f":
      output = input * (9 / 5) + 32;
      unitLabel = "°F";
      digits = 1;
      break;
    default:
      unitLabel = "";
  }

  const formatted = formatNumber(output, digits);
  unitResult.textContent = unitLabel ? `${formatted} ${unitLabel}` : formatted;
}

unitMode.addEventListener("change", updateUnitConverter);
unitValue.addEventListener("input", updateUnitConverter);

copyUnitButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(unitResult.textContent);
    unitStatus.textContent = "Copied.";
  } catch {
    unitStatus.textContent = "Copy did not work in this browser.";
  }
});

saveFocusButton.addEventListener("click", () => {
  const values = focusInputs.map((input) => input.value.trim());
  localStorage.setItem("dailyFocus", JSON.stringify(values));
  focusStatus.textContent = "Saved.";
});

clearFocusButton.addEventListener("click", () => {
  focusInputs.forEach((input) => {
    input.value = "";
  });
  localStorage.removeItem("dailyFocus");
  focusStatus.textContent = "Cleared.";
});

loadFocus();
calculateSplit();
updateReadingTime();
initTimer();
updateUnitConverter();
initPackingChecklist();

function parsePickerItems(raw) {
  return String(raw)
    .split(/\n+/)
    .flatMap((line) => line.split(","))
    .map((item) => item.trim())
    .filter(Boolean);
}

function getRandomIndex(max) {
  if (!Number.isFinite(max) || max <= 0) return -1;
  if (window.crypto && typeof window.crypto.getRandomValues === "function") {
    const maxUint = 2 ** 32;
    const limit = maxUint - (maxUint % max);
    const values = new Uint32Array(1);
    while (true) {
      window.crypto.getRandomValues(values);
      if (values[0] < limit) return values[0] % max;
    }
  }
  return Math.floor(Math.random() * max);
}

function setPickerStatus(message) {
  if (!pickerStatus) return;
  pickerStatus.textContent = message;
}

function runRandomPicker() {
  if (!pickerItems || !pickerResult) return;
  const items = parsePickerItems(pickerItems.value);
  if (items.length === 0) {
    pickerResult.textContent = "—";
    setPickerStatus("Add at least 1 option first.");
    return;
  }

  const index = getRandomIndex(items.length);
  const picked = items[Math.max(0, index)] || "";
  pickerResult.textContent = picked;
  setPickerStatus(`${items.length.toLocaleString()} option${items.length === 1 ? "" : "s"}.`);
}

async function copyPickerResult() {
  if (!pickerResult) return;
  const text = pickerResult.textContent.trim();
  if (!text || text === "—") {
    setPickerStatus("Pick something first.");
    return;
  }
  try {
    await navigator.clipboard.writeText(text);
    setPickerStatus("Copied.");
  } catch {
    setPickerStatus("Copy did not work in this browser.");
  }
}

if (pickerButton) pickerButton.addEventListener("click", runRandomPicker);
if (pickerCopyButton) pickerCopyButton.addEventListener("click", copyPickerResult);
if (pickerItems) pickerItems.addEventListener("input", () => setPickerStatus(""));
