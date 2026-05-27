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
const quickNotesText = document.querySelector("#quickNotesText");
const quickNotesDownloadButton = document.querySelector("#quickNotesDownloadButton");
const quickNotesClearButton = document.querySelector("#quickNotesClearButton");
const quickNotesStatus = document.querySelector("#quickNotesStatus");
const passphraseWordCount = document.querySelector("#passphraseWordCount");
const passphraseSeparator = document.querySelector("#passphraseSeparator");
const passphraseIncludeNumber = document.querySelector("#passphraseIncludeNumber");
const passphraseResult = document.querySelector("#passphraseResult");
const passphraseGenerateButton = document.querySelector("#passphraseGenerateButton");
const passphraseCopyButton = document.querySelector("#passphraseCopyButton");
const passphraseStatus = document.querySelector("#passphraseStatus");
const habitName = document.querySelector("#habitName");
const habitWeekGrid = document.querySelector("#habitWeekGrid");
const habitCount = document.querySelector("#habitCount");
const habitResetButton = document.querySelector("#habitResetButton");
const habitClearButton = document.querySelector("#habitClearButton");
const habitStatus = document.querySelector("#habitStatus");

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
initQuickNotes();
initPassphrase();
initHabitTracker();

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

const quickNotesStorageKey = "quickNotesText";

function setQuickNotesStatus(message) {
  if (!quickNotesStatus) return;
  quickNotesStatus.textContent = message;
}

function downloadTextFile(text, filename) {
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 0);
}

function initQuickNotes() {
  if (!quickNotesText) return;

  const saved = localStorage.getItem(quickNotesStorageKey);
  if (saved) {
    quickNotesText.value = saved;
    setQuickNotesStatus("Saved in this browser.");
  }

  let saveTimeout = null;
  quickNotesText.addEventListener("input", () => {
    if (saveTimeout !== null) window.clearTimeout(saveTimeout);
    saveTimeout = window.setTimeout(() => {
      localStorage.setItem(quickNotesStorageKey, quickNotesText.value);
      setQuickNotesStatus("Saved in this browser.");
      saveTimeout = null;
    }, 250);
  });

  if (quickNotesClearButton) {
    quickNotesClearButton.addEventListener("click", () => {
      quickNotesText.value = "";
      localStorage.removeItem(quickNotesStorageKey);
      setQuickNotesStatus("Cleared.");
      quickNotesText.focus();
    });
  }

  if (quickNotesDownloadButton) {
    quickNotesDownloadButton.addEventListener("click", () => {
      const text = quickNotesText.value.trim();
      if (!text) {
        setQuickNotesStatus("Add some notes first.");
        return;
      }
      const today = new Date().toISOString().slice(0, 10);
      downloadTextFile(text + "\n", `everyday-notes-${today}.txt`);
      setQuickNotesStatus("Downloaded.");
    });
  }
}

const passphraseWordList = [
  "amber",
  "apple",
  "atlas",
  "beacon",
  "breeze",
  "cedar",
  "cloud",
  "cobalt",
  "comet",
  "coral",
  "crisp",
  "delta",
  "dune",
  "ember",
  "fable",
  "fjord",
  "garden",
  "harbor",
  "honey",
  "jasmine",
  "lilac",
  "lumen",
  "maple",
  "meadow",
  "mint",
  "moss",
  "nova",
  "oasis",
  "orbit",
  "pebble",
  "pepper",
  "pine",
  "river",
  "saffron",
  "silver",
  "spark",
  "stone",
  "sunset",
  "tiger",
  "velvet",
  "willow",
  "zephyr",
];

function setPassphraseStatus(message) {
  if (!passphraseStatus) return;
  passphraseStatus.textContent = message;
}

function pickFromList(items) {
  const index = getRandomIndex(items.length);
  return items[Math.max(0, index)] || "";
}

function generatePassphrase(wordCount, separator, includeNumber) {
  const count = Math.min(12, Math.max(2, Number(wordCount) || 4));
  const sep = typeof separator === "string" ? separator : "-";
  const words = Array.from({ length: count }, () => pickFromList(passphraseWordList));
  let phrase = words.join(sep);

  if (includeNumber) {
    const number = Math.max(0, getRandomIndex(100));
    phrase += `${sep}${String(number).padStart(2, "0")}`;
  }

  return phrase;
}

function runPassphraseGenerator() {
  if (!passphraseResult || !passphraseWordCount || !passphraseSeparator || !passphraseIncludeNumber) return;
  const phrase = generatePassphrase(passphraseWordCount.value, passphraseSeparator.value, passphraseIncludeNumber.checked);
  passphraseResult.textContent = phrase || "—";
  setPassphraseStatus("Generated.");
}

async function copyPassphrase() {
  if (!passphraseResult) return;
  const text = passphraseResult.textContent.trim();
  if (!text || text === "—") {
    setPassphraseStatus("Generate one first.");
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
    setPassphraseStatus("Copied.");
  } catch {
    setPassphraseStatus("Copy did not work in this browser.");
  }
}

function initPassphrase() {
  if (!passphraseGenerateButton) return;
  passphraseGenerateButton.addEventListener("click", runPassphraseGenerator);
  if (passphraseCopyButton) passphraseCopyButton.addEventListener("click", copyPassphrase);
  if (passphraseWordCount) passphraseWordCount.addEventListener("change", () => setPassphraseStatus(""));
  if (passphraseSeparator) passphraseSeparator.addEventListener("change", () => setPassphraseStatus(""));
  if (passphraseIncludeNumber) passphraseIncludeNumber.addEventListener("change", () => setPassphraseStatus(""));
}

const habitStorageKey = "habitTrackerWeekly";

function setHabitStatus(message) {
  if (!habitStatus) return;
  habitStatus.textContent = message;
}

function getWeekStartIso(date) {
  const copy = new Date(date);
  copy.setHours(0, 0, 0, 0);
  const day = copy.getDay(); // 0 Sun ... 6 Sat
  const daysSinceMonday = (day + 6) % 7;
  copy.setDate(copy.getDate() - daysSinceMonday);
  return copy.toISOString().slice(0, 10);
}

function getWeekdayLabels() {
  return [
    { short: "Mon", long: "Monday" },
    { short: "Tue", long: "Tuesday" },
    { short: "Wed", long: "Wednesday" },
    { short: "Thu", long: "Thursday" },
    { short: "Fri", long: "Friday" },
    { short: "Sat", long: "Saturday" },
    { short: "Sun", long: "Sunday" },
  ];
}

function loadHabitState(currentWeekStart) {
  try {
    const raw = localStorage.getItem(habitStorageKey);
    if (!raw) {
      return { name: "", weekStart: currentWeekStart, days: Array(7).fill(false) };
    }
    const parsed = JSON.parse(raw);
    const days = Array.isArray(parsed?.days) ? parsed.days.map(Boolean).slice(0, 7) : Array(7).fill(false);
    while (days.length < 7) days.push(false);
    const name = typeof parsed?.name === "string" ? parsed.name : "";
    const weekStart = typeof parsed?.weekStart === "string" ? parsed.weekStart : currentWeekStart;
    if (weekStart !== currentWeekStart) {
      return { name, weekStart: currentWeekStart, days: Array(7).fill(false) };
    }
    return { name, weekStart, days };
  } catch {
    return { name: "", weekStart: currentWeekStart, days: Array(7).fill(false) };
  }
}

function saveHabitState(state) {
  localStorage.setItem(habitStorageKey, JSON.stringify(state));
}

function renderHabitCount(state) {
  if (!habitCount) return;
  const count = state.days.filter(Boolean).length;
  habitCount.textContent = count.toLocaleString();
}

function renderHabitGrid(state) {
  if (!habitWeekGrid) return;
  habitWeekGrid.innerHTML = "";

  const labels = getWeekdayLabels();
  labels.forEach((label, index) => {
    const wrapper = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = Boolean(state.days[index]);
    checkbox.dataset.index = String(index);
    checkbox.setAttribute("aria-label", label.long);

    const text = document.createElement("span");
    text.textContent = label.short;

    wrapper.append(checkbox, text);
    habitWeekGrid.append(wrapper);
  });
}

function initHabitTracker() {
  if (!habitName || !habitWeekGrid) return;

  const currentWeekStart = getWeekStartIso(new Date());
  let state = loadHabitState(currentWeekStart);

  habitName.value = state.name;
  renderHabitGrid(state);
  renderHabitCount(state);

  let nameSaveTimeout = null;
  habitName.addEventListener("input", () => {
    if (nameSaveTimeout !== null) window.clearTimeout(nameSaveTimeout);
    nameSaveTimeout = window.setTimeout(() => {
      state = { ...state, name: habitName.value.trim() };
      saveHabitState(state);
      setHabitStatus("Saved in this browser.");
      nameSaveTimeout = null;
    }, 250);
  });

  habitWeekGrid.addEventListener("change", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) return;
    if (target.type !== "checkbox") return;
    const index = Number(target.dataset.index);
    if (!Number.isInteger(index) || index < 0 || index > 6) return;
    const nextDays = state.days.slice();
    nextDays[index] = target.checked;
    state = { ...state, days: nextDays };
    saveHabitState(state);
    renderHabitCount(state);
    setHabitStatus("Saved in this browser.");
  });

  if (habitResetButton) {
    habitResetButton.addEventListener("click", () => {
      const refreshedWeekStart = getWeekStartIso(new Date());
      state = { ...state, weekStart: refreshedWeekStart, days: Array(7).fill(false) };
      saveHabitState(state);
      renderHabitGrid(state);
      renderHabitCount(state);
      setHabitStatus("Reset.");
    });
  }

  if (habitClearButton) {
    habitClearButton.addEventListener("click", () => {
      habitName.value = "";
      localStorage.removeItem(habitStorageKey);
      state = { name: "", weekStart: getWeekStartIso(new Date()), days: Array(7).fill(false) };
      renderHabitGrid(state);
      renderHabitCount(state);
      setHabitStatus("Cleared.");
      habitName.focus();
    });
  }
}
