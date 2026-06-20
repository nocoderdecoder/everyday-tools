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
const sampleTextButton = document.querySelector("#sampleTextButton");
const cleanTextButton = document.querySelector("#cleanTextButton");
const copyTextButton = document.querySelector("#copyTextButton");
const copyStatus = document.querySelector("#copyStatus");
const focusInputs = Array.from(document.querySelectorAll(".focus-input"));
const saveFocusButton = document.querySelector("#saveFocusButton");
const clearFocusButton = document.querySelector("#clearFocusButton");
const focusStatus = document.querySelector("#focusStatus");
const nextStepTime = document.querySelector("#nextStepTime");
const nextStepEnergy = document.querySelector("#nextStepEnergy");
const nextStepContext = document.querySelector("#nextStepContext");
const nextStepResult = document.querySelector("#nextStepResult");
const nextStepButton = document.querySelector("#nextStepButton");
const nextStepCopyButton = document.querySelector("#nextStepCopyButton");
const nextStepStatus = document.querySelector("#nextStepStatus");
const readingText = document.querySelector("#readingText");
const readingTimeResult = document.querySelector("#readingTimeResult");
const readingWordCount = document.querySelector("#readingWordCount");
const sleepWakeTime = document.querySelector("#sleepWakeTime");
const sleepLatency = document.querySelector("#sleepLatency");
const sleepBestTime = document.querySelector("#sleepBestTime");
const sleepTimeList = document.querySelector("#sleepTimeList");
const sleepCopyButton = document.querySelector("#sleepCopyButton");
const sleepStatus = document.querySelector("#sleepStatus");
const dateSpanStart = document.querySelector("#dateSpanStart");
const dateSpanEnd = document.querySelector("#dateSpanEnd");
const dateSpanIncludeEnd = document.querySelector("#dateSpanIncludeEnd");
const dateSpanDays = document.querySelector("#dateSpanDays");
const dateSpanWeekdays = document.querySelector("#dateSpanWeekdays");
const dateSpanBreakdown = document.querySelector("#dateSpanBreakdown");
const dateSpanSwapButton = document.querySelector("#dateSpanSwapButton");
const dateSpanCopyButton = document.querySelector("#dateSpanCopyButton");
const dateSpanStatus = document.querySelector("#dateSpanStatus");
const eventCountdownName = document.querySelector("#eventCountdownName");
const eventCountdownDate = document.querySelector("#eventCountdownDate");
const eventCountdownDays = document.querySelector("#eventCountdownDays");
const eventCountdownBreakdown = document.querySelector("#eventCountdownBreakdown");
const eventCountdownTarget = document.querySelector("#eventCountdownTarget");
const eventCountdownCopyButton = document.querySelector("#eventCountdownCopyButton");
const eventCountdownResetButton = document.querySelector("#eventCountdownResetButton");
const eventCountdownStatus = document.querySelector("#eventCountdownStatus");
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
const percentBaseAmount = document.querySelector("#percentBaseAmount");
const percentRate = document.querySelector("#percentRate");
const percentAmountResult = document.querySelector("#percentAmountResult");
const percentIncreaseResult = document.querySelector("#percentIncreaseResult");
const percentDecreaseResult = document.querySelector("#percentDecreaseResult");
const percentCopyButton = document.querySelector("#percentCopyButton");
const percentStatus = document.querySelector("#percentStatus");
const budgetTotal = document.querySelector("#budgetTotal");
const budgetDays = document.querySelector("#budgetDays");
const budgetBuffer = document.querySelector("#budgetBuffer");
const budgetSpendableResult = document.querySelector("#budgetSpendableResult");
const budgetDailyResult = document.querySelector("#budgetDailyResult");
const budgetWeeklyResult = document.querySelector("#budgetWeeklyResult");
const budgetCopyButton = document.querySelector("#budgetCopyButton");
const budgetStatus = document.querySelector("#budgetStatus");
const themeToggle = document.querySelector("#themeToggle");
const toolSearch = document.querySelector("#toolSearch");
const toolSearchStatus = document.querySelector("#toolSearchStatus");
const toolSearchClearButton = document.querySelector("#toolSearchClearButton");
const toolSearchSummary = document.querySelector("#toolSearchSummary");
const toolSearchEmptyState = document.querySelector("#toolSearchEmptyState");
const toolJumpSelect = document.querySelector("#toolJumpSelect");
const toolJumpStatus = document.querySelector("#toolJumpStatus");
const backToTopButton = document.querySelector("#backToTopButton");
const pickerItems = document.querySelector("#pickerItems");
const pickerResult = document.querySelector("#pickerResult");
const pickerButton = document.querySelector("#pickerButton");
const pickerCopyButton = document.querySelector("#pickerCopyButton");
const pickerStatus = document.querySelector("#pickerStatus");
const groceryNewItem = document.querySelector("#groceryNewItem");
const groceryAddButton = document.querySelector("#groceryAddButton");
const groceryClearCheckedButton = document.querySelector("#groceryClearCheckedButton");
const groceryClearAllButton = document.querySelector("#groceryClearAllButton");
const groceryList = document.querySelector("#groceryList");
const groceryStatus = document.querySelector("#groceryStatus");
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
const backupDownloadButton = document.querySelector("#backupDownloadButton");
const backupFileInput = document.querySelector("#backupFileInput");
const backupRestoreButton = document.querySelector("#backupRestoreButton");
const backupClearButton = document.querySelector("#backupClearButton");
const backupStatus = document.querySelector("#backupStatus");
const backupFileStatus = document.querySelector("#backupFileStatus");
const meetingNotesText = document.querySelector("#meetingNotesText");
const meetingNotesRemoveTimestamps = document.querySelector("#meetingNotesRemoveTimestamps");
const meetingNotesRemoveSpeakers = document.querySelector("#meetingNotesRemoveSpeakers");
const meetingNotesFixBullets = document.querySelector("#meetingNotesFixBullets");
const meetingNotesSampleButton = document.querySelector("#meetingNotesSampleButton");
const meetingNotesCleanButton = document.querySelector("#meetingNotesCleanButton");
const meetingNotesCopyButton = document.querySelector("#meetingNotesCopyButton");
const meetingNotesClearButton = document.querySelector("#meetingNotesClearButton");
const meetingNotesStatus = document.querySelector("#meetingNotesStatus");

const textCleanerSample = `Agenda   for   today:

-   Confirm   timeline
-  Share    updated copy

Next   step:  send follow-up   notes`;

const meetingNotesSample = `[09:00] Alex: quick recap from the call
• launch timing is still on track
• marketing needs final screenshots

09:14 Priya: follow up with design by Thursday
09:20 Sam: check analytics before the Friday review`;

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
  if (!messyText.value.trim()) {
    copyStatus.textContent = "Paste text first.";
    return;
  }
  messyText.value = messyText.value
    .split("\n")
    .map((line) => line.replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .join("\n");
  copyStatus.textContent = "Text cleaned.";
});

if (sampleTextButton) {
  sampleTextButton.addEventListener("click", () => {
    messyText.value = textCleanerSample;
    copyStatus.textContent = "Example added.";
    messyText.focus();
  });
}

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

const sleepStorageKey = "sleepPlannerSettings";

function setSleepStatus(message) {
  if (!sleepStatus) return;
  sleepStatus.textContent = message;
}

function parseTimeInput(value) {
  const match = /^(\d{1,2}):(\d{2})$/.exec(String(value).trim());
  if (!match) return null;
  const hours = Number(match[1]);
  const minutes = Number(match[2]);
  if (!Number.isInteger(hours) || !Number.isInteger(minutes)) return null;
  if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) return null;
  return { hours, minutes };
}

function formatClockMinutes(totalMinutes) {
  const minutesInDay = 24 * 60;
  const normalized = ((totalMinutes % minutesInDay) + minutesInDay) % minutesInDay;
  const hours = Math.floor(normalized / 60);
  const minutes = normalized % 60;
  const period = hours >= 12 ? "PM" : "AM";
  const displayHours = hours % 12 || 12;
  return `${displayHours}:${String(minutes).padStart(2, "0")} ${period}`;
}

function buildSleepTimes(wakeTimeValue, latencyValue) {
  const parsedTime = parseTimeInput(wakeTimeValue);
  const latencyMinutes = Math.max(0, Number(latencyValue) || 0);
  if (!parsedTime) return [];

  const wakeMinutes = parsedTime.hours * 60 + parsedTime.minutes;
  return [6, 5, 4].map((cycles) => {
    const bedtimeMinutes = wakeMinutes - cycles * 90 - latencyMinutes;
    return {
      cycles,
      bedtime: formatClockMinutes(bedtimeMinutes),
    };
  });
}

function saveSleepSettings() {
  if (!sleepWakeTime || !sleepLatency) return;
  const payload = {
    wakeTime: sleepWakeTime.value,
    latency: sleepLatency.value,
  };
  localStorage.setItem(sleepStorageKey, JSON.stringify(payload));
}

function renderSleepPlanner() {
  if (!sleepWakeTime || !sleepLatency || !sleepBestTime || !sleepTimeList) return;
  const items = buildSleepTimes(sleepWakeTime.value, sleepLatency.value);
  if (items.length === 0) {
    sleepBestTime.textContent = "—";
    sleepTimeList.innerHTML = "";
    setSleepStatus("Enter a wake-up time first.");
    return;
  }

  sleepBestTime.textContent = items[0].bedtime;
  sleepTimeList.innerHTML = "";
  items.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = "sleep-time-item";

    const label = document.createElement("span");
    label.textContent = index === 0 ? "Best rest" : "Also works";

    const value = document.createElement("strong");
    value.textContent = `${item.bedtime} (${item.cycles} cycles)`;

    li.append(label, value);
    sleepTimeList.append(li);
  });

  saveSleepSettings();
  setSleepStatus("Based on 90-minute sleep cycles.");
}

async function copySleepTimes() {
  if (!sleepTimeList || !sleepWakeTime) return;
  const items = buildSleepTimes(sleepWakeTime.value, sleepLatency?.value);
  if (items.length === 0) {
    setSleepStatus("Enter a wake-up time first.");
    return;
  }

  const lines = items.map((item, index) => `${index === 0 ? "Best rest" : "Also works"}: ${item.bedtime} (${item.cycles} cycles)`);
  const text = `Wake-up time: ${formatClockMinutes((parseTimeInput(sleepWakeTime.value)?.hours || 0) * 60 + (parseTimeInput(sleepWakeTime.value)?.minutes || 0))}\n${lines.join("\n")}`;

  try {
    await navigator.clipboard.writeText(text);
    setSleepStatus("Copied.");
  } catch {
    setSleepStatus("Copy did not work in this browser.");
  }
}

function initSleepPlanner() {
  if (!sleepWakeTime || !sleepLatency || !sleepBestTime || !sleepTimeList) return;

  try {
    const stored = JSON.parse(localStorage.getItem(sleepStorageKey) || "null");
    if (stored && typeof stored === "object") {
      if (typeof stored.wakeTime === "string") sleepWakeTime.value = stored.wakeTime;
      if (typeof stored.latency === "string") sleepLatency.value = stored.latency;
    }
  } catch {
    // Ignore bad stored data and keep defaults.
  }

  [sleepWakeTime, sleepLatency].forEach((control) => {
    control.addEventListener("input", renderSleepPlanner);
    control.addEventListener("change", renderSleepPlanner);
  });

  if (sleepCopyButton) sleepCopyButton.addEventListener("click", copySleepTimes);
  renderSleepPlanner();
}

function setDateSpanStatus(message) {
  if (!dateSpanStatus) return;
  dateSpanStatus.textContent = message;
}

function formatIsoDate(date) {
  return date.toISOString().slice(0, 10);
}

function addDays(date, days) {
  const copy = new Date(date);
  copy.setDate(copy.getDate() + days);
  return copy;
}

function parseDateOnlyInput(value) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(value).trim());
  if (!match) return null;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  if (!Number.isInteger(year) || !Number.isInteger(month) || !Number.isInteger(day)) return null;
  const date = new Date(Date.UTC(year, month - 1, day));
  if (date.getUTCFullYear() !== year || date.getUTCMonth() !== month - 1 || date.getUTCDate() !== day) return null;
  return date;
}

function formatDayLabel(count) {
  const abs = Math.abs(count);
  return `${count.toLocaleString()} day${abs === 1 ? "" : "s"}`;
}

function formatWeekBreakdown(totalDays) {
  const abs = Math.abs(totalDays);
  const weeks = Math.floor(abs / 7);
  const days = abs % 7;
  const parts = [];
  if (weeks > 0) parts.push(`${weeks} week${weeks === 1 ? "" : "s"}`);
  if (days > 0 || parts.length === 0) parts.push(`${days} day${days === 1 ? "" : "s"}`);
  const body = parts.join(", ");
  return totalDays < 0 ? `-${body}` : body;
}

function countWeekdaysBetween(startDate, endDateInclusive) {
  const step = startDate <= endDateInclusive ? 1 : -1;
  let count = 0;
  const cursor = new Date(startDate);
  while ((step > 0 && cursor <= endDateInclusive) || (step < 0 && cursor >= endDateInclusive)) {
    const day = cursor.getUTCDay();
    if (day !== 0 && day !== 6) count += step;
    cursor.setUTCDate(cursor.getUTCDate() + step);
  }
  return count;
}

function getDateSpanSummary() {
  const startDate = parseDateOnlyInput(dateSpanStart?.value);
  const endDate = parseDateOnlyInput(dateSpanEnd?.value);
  const includeEnd = Boolean(dateSpanIncludeEnd?.checked);
  if (!startDate || !endDate) return null;

  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const rawDays = Math.round((endDate.getTime() - startDate.getTime()) / millisecondsPerDay);
  const signedDays = includeEnd
    ? rawDays >= 0
      ? rawDays + 1
      : rawDays - 1
    : rawDays;
  const weekdayEnd = includeEnd
    ? endDate
    : addDays(endDate, rawDays >= 0 ? -1 : 1);
  const weekdayCount = rawDays === 0 && !includeEnd ? 0 : countWeekdaysBetween(startDate, weekdayEnd);

  return {
    startDate,
    endDate,
    includeEnd,
    totalDays: signedDays,
    weekdays: weekdayCount,
    breakdown: formatWeekBreakdown(signedDays),
  };
}

function updateDateSpan() {
  if (!dateSpanDays || !dateSpanWeekdays || !dateSpanBreakdown) return;
  const summary = getDateSpanSummary();
  if (!summary) {
    dateSpanDays.textContent = "—";
    dateSpanWeekdays.textContent = "—";
    dateSpanBreakdown.textContent = "—";
    setDateSpanStatus("Choose both dates first.");
    return;
  }

  dateSpanDays.textContent = formatDayLabel(summary.totalDays);
  dateSpanWeekdays.textContent = summary.weekdays.toLocaleString();
  dateSpanBreakdown.textContent = summary.breakdown;
  setDateSpanStatus(summary.includeEnd ? "Including the end date." : "Days between the two dates.");
}

async function copyDateSpanResult() {
  const summary = getDateSpanSummary();
  if (!summary) {
    setDateSpanStatus("Choose both dates first.");
    return;
  }

  const text =
    `From ${formatIsoDate(summary.startDate)} to ${formatIsoDate(summary.endDate)}: ` +
    `${formatDayLabel(summary.totalDays)}, ${summary.weekdays} weekday${Math.abs(summary.weekdays) === 1 ? "" : "s"}, ` +
    `${summary.breakdown}.`;

  try {
    await navigator.clipboard.writeText(text);
    setDateSpanStatus("Copied.");
  } catch {
    setDateSpanStatus("Copy did not work in this browser.");
  }
}

function swapDateSpanDates() {
  if (!dateSpanStart || !dateSpanEnd) return;
  const nextStart = dateSpanEnd.value;
  dateSpanEnd.value = dateSpanStart.value;
  dateSpanStart.value = nextStart;
  updateDateSpan();
  setDateSpanStatus("Dates swapped.");
}

function initDateSpanTool() {
  if (!dateSpanStart || !dateSpanEnd) return;

  const today = new Date();
  if (!dateSpanStart.value) dateSpanStart.value = formatIsoDate(today);
  if (!dateSpanEnd.value) dateSpanEnd.value = formatIsoDate(addDays(today, 7));

  [dateSpanStart, dateSpanEnd, dateSpanIncludeEnd].forEach((control) => {
    control.addEventListener("input", updateDateSpan);
    control.addEventListener("change", updateDateSpan);
  });

  if (dateSpanSwapButton) dateSpanSwapButton.addEventListener("click", swapDateSpanDates);
  if (dateSpanCopyButton) dateSpanCopyButton.addEventListener("click", copyDateSpanResult);
  updateDateSpan();
}

const eventCountdownStorageKey = "eventCountdownSettings";

function setEventCountdownStatus(message) {
  if (!eventCountdownStatus) return;
  eventCountdownStatus.textContent = message;
}

function getTodayDateOnly() {
  const now = new Date();
  return new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
}

function formatLongDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

function getEventCountdownSummary() {
  const eventDate = parseDateOnlyInput(eventCountdownDate?.value);
  if (!eventDate) return null;

  const today = getTodayDateOnly();
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const days = Math.round((eventDate.getTime() - today.getTime()) / millisecondsPerDay);
  const name = eventCountdownName?.value.trim().replace(/\s+/g, " ") || "Event";

  return {
    name,
    date: eventDate,
    days,
    breakdown: formatWeekBreakdown(Math.abs(days)),
    target: formatLongDate(eventDate),
  };
}

function saveEventCountdownSettings() {
  if (!eventCountdownName || !eventCountdownDate) return;
  const payload = {
    name: eventCountdownName.value,
    date: eventCountdownDate.value,
  };
  localStorage.setItem(eventCountdownStorageKey, JSON.stringify(payload));
}

function renderEventCountdown() {
  if (!eventCountdownDays || !eventCountdownBreakdown || !eventCountdownTarget) return;
  const summary = getEventCountdownSummary();
  if (!summary) {
    eventCountdownDays.textContent = "—";
    eventCountdownBreakdown.textContent = "—";
    eventCountdownTarget.textContent = "—";
    setEventCountdownStatus("Choose a date first.");
    return;
  }

  if (summary.days === 0) {
    eventCountdownDays.textContent = "Today";
    setEventCountdownStatus(`${summary.name} is today.`);
  } else if (summary.days > 0) {
    eventCountdownDays.textContent = formatDayLabel(summary.days);
    setEventCountdownStatus("Saved in this browser.");
  } else {
    eventCountdownDays.textContent = `${formatDayLabel(Math.abs(summary.days))} ago`;
    setEventCountdownStatus(`${summary.name} has already passed.`);
  }

  eventCountdownBreakdown.textContent = summary.breakdown;
  eventCountdownTarget.textContent = summary.target;
  saveEventCountdownSettings();
}

async function copyEventCountdown() {
  const summary = getEventCountdownSummary();
  if (!summary) {
    setEventCountdownStatus("Choose a date first.");
    return;
  }

  const timing =
    summary.days === 0
      ? "is today"
      : summary.days > 0
        ? `is in ${formatDayLabel(summary.days)} (${summary.breakdown})`
        : `was ${formatDayLabel(Math.abs(summary.days))} ago`;
  const text = `${summary.name} ${timing}: ${summary.target}.`;

  try {
    await navigator.clipboard.writeText(text);
    setEventCountdownStatus("Copied.");
  } catch {
    setEventCountdownStatus("Copy did not work in this browser.");
  }
}

function resetEventCountdown() {
  if (!eventCountdownName || !eventCountdownDate) return;
  eventCountdownName.value = "Vacation";
  eventCountdownDate.value = formatIsoDate(addDays(getTodayDateOnly(), 30));
  localStorage.removeItem(eventCountdownStorageKey);
  renderEventCountdown();
  setEventCountdownStatus("Reset.");
}

function initEventCountdown() {
  if (!eventCountdownName || !eventCountdownDate) return;

  try {
    const stored = JSON.parse(localStorage.getItem(eventCountdownStorageKey) || "null");
    if (stored && typeof stored === "object") {
      if (typeof stored.name === "string") eventCountdownName.value = stored.name;
      if (typeof stored.date === "string") eventCountdownDate.value = stored.date;
    }
  } catch {
    // Ignore bad stored data and keep defaults.
  }

  if (!eventCountdownDate.value) {
    eventCountdownDate.value = formatIsoDate(addDays(getTodayDateOnly(), 30));
  }

  [eventCountdownName, eventCountdownDate].forEach((control) => {
    control.addEventListener("input", renderEventCountdown);
    control.addEventListener("change", renderEventCountdown);
  });
  if (eventCountdownCopyButton) eventCountdownCopyButton.addEventListener("click", copyEventCountdown);
  if (eventCountdownResetButton) eventCountdownResetButton.addEventListener("click", resetEventCountdown);
  renderEventCountdown();
}

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

function setPercentageStatus(message) {
  if (!percentStatus) return;
  percentStatus.textContent = message;
}

function updatePercentageHelper() {
  if (!percentBaseAmount || !percentRate || !percentAmountResult || !percentIncreaseResult || !percentDecreaseResult) return;

  const amount = Math.max(0, parseNumberLike(percentBaseAmount.value));
  const percent = parseNumberLike(percentRate.value);
  const percentAmount = amount * (percent / 100);
  const increasedTotal = amount + percentAmount;
  const decreasedTotal = Math.max(0, amount - percentAmount);

  percentAmountResult.textContent = currency.format(percentAmount);
  percentIncreaseResult.textContent = currency.format(increasedTotal);
  percentDecreaseResult.textContent = currency.format(decreasedTotal);
  setPercentageStatus("Useful for sales tax, tips, and sale prices.");
}

async function copyPercentageResult() {
  if (!percentBaseAmount || !percentRate) return;

  const amount = Math.max(0, parseNumberLike(percentBaseAmount.value));
  const percent = parseNumberLike(percentRate.value);
  const percentAmount = amount * (percent / 100);
  const increasedTotal = amount + percentAmount;
  const decreasedTotal = Math.max(0, amount - percentAmount);
  const text =
    `${percent}% of ${currency.format(amount)} is ${currency.format(percentAmount)}. ` +
    `After adding: ${currency.format(increasedTotal)}. ` +
    `After discount: ${currency.format(decreasedTotal)}.`;

  try {
    await navigator.clipboard.writeText(text);
    setPercentageStatus("Copied.");
  } catch {
    setPercentageStatus("Copy did not work in this browser.");
  }
}

function initPercentageHelper() {
  if (!percentBaseAmount || !percentRate) return;
  [percentBaseAmount, percentRate].forEach((control) => {
    control.addEventListener("input", updatePercentageHelper);
  });
  if (percentCopyButton) percentCopyButton.addEventListener("click", copyPercentageResult);
  updatePercentageHelper();
}

function setBudgetStatus(message) {
  if (!budgetStatus) return;
  budgetStatus.textContent = message;
}

function updateBudgetSplitter() {
  if (!budgetTotal || !budgetDays || !budgetBuffer || !budgetSpendableResult || !budgetDailyResult || !budgetWeeklyResult) return;

  const total = Math.max(0, parseNumberLike(budgetTotal.value));
  const days = Math.max(1, Math.floor(parseNumberLike(budgetDays.value) || 1));
  const bufferPercent = Math.min(100, Math.max(0, parseNumberLike(budgetBuffer.value)));
  const spendable = total * (1 - bufferPercent / 100);
  const perDay = spendable / days;
  const perWeek = perDay * 7;

  budgetSpendableResult.textContent = currency.format(spendable);
  budgetDailyResult.textContent = currency.format(perDay);
  budgetWeeklyResult.textContent = currency.format(perWeek);
  setBudgetStatus("Useful for trips, events, and pay-period planning.");
}

async function copyBudgetResult() {
  if (!budgetTotal || !budgetDays || !budgetBuffer) return;

  const total = Math.max(0, parseNumberLike(budgetTotal.value));
  const days = Math.max(1, Math.floor(parseNumberLike(budgetDays.value) || 1));
  const bufferPercent = Math.min(100, Math.max(0, parseNumberLike(budgetBuffer.value)));
  const spendable = total * (1 - bufferPercent / 100);
  const perDay = spendable / days;
  const perWeek = perDay * 7;
  const text =
    `${currency.format(total)} over ${days} day${days === 1 ? "" : "s"} with ${bufferPercent}% set aside. ` +
    `Safe to spend: ${currency.format(spendable)}. ` +
    `Per day: ${currency.format(perDay)}. ` +
    `Per week: ${currency.format(perWeek)}.`;

  try {
    await navigator.clipboard.writeText(text);
    setBudgetStatus("Copied.");
  } catch {
    setBudgetStatus("Copy did not work in this browser.");
  }
}

function initBudgetSplitter() {
  if (!budgetTotal || !budgetDays || !budgetBuffer) return;
  [budgetTotal, budgetDays, budgetBuffer].forEach((control) => {
    control.addEventListener("input", updateBudgetSplitter);
  });
  if (budgetCopyButton) budgetCopyButton.addEventListener("click", copyBudgetResult);
  updateBudgetSplitter();
}

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

function setNextStepStatus(message) {
  if (!nextStepStatus) return;
  nextStepStatus.textContent = message;
}

function getTimeBucket(minutes) {
  const value = Number(minutes) || 0;
  if (value <= 5) return "5";
  if (value <= 15) return "15";
  if (value <= 30) return "30";
  return "60";
}

function getNextStepSuggestions() {
  return {
    desk: {
      low: {
        "5": ["Reply to one easy message.", "Clean up one tab or window.", "Write a 2-sentence plan for the next hour."],
        "15": ["Tidy your desktop or downloads.", "Sort one small list: inbox, notes, or tasks.", "Draft a quick message you’ve been avoiding."],
        "30": ["Outline the next small deliverable in 5 bullets.", "Clean up a document or note that’s getting messy.", "Do a quick review: top 3 tasks, pick 1."],
        "60": ["Finish one small but complete task.", "Batch-handle simple admin tasks for 45 minutes.", "Turn notes into a short checklist."],
      },
      medium: {
        "5": ["Pick one task and write the next tiny step.", "Send one helpful follow-up.", "Start a 5-minute timer and begin."],
        "15": ["Do one focused sprint on your top task.", "Clear quick items: 10 minutes of email, then stop.", "Turn a big task into 3 smaller ones."],
        "30": ["Work on the top task with a timer and no switching.", "Prepare what you need for the next meeting.", "Write a short update for someone who’s waiting."],
        "60": ["Deep work: one task, one hour.", "Finish a meaningful chunk and ship it.", "Do a longer focused session, then take a break."],
      },
      high: {
        "5": ["Start the hardest thing for 5 minutes.", "Write the first sentence of the scary draft.", "Open the file and make one change."],
        "15": ["Do a fast 15-minute sprint on the hardest task.", "Knock out a small blocker for someone else.", "Make a decision and write it down."],
        "30": ["Push a project forward with a focused 30-minute block.", "Do a quick “first draft” pass without perfection.", "Handle something important that takes courage."],
        "60": ["Tackle the hardest task while your energy is high.", "Do a full hour sprint and ship a version.", "Finish the thing that will unlock the rest."],
      },
    },
    home: {
      low: {
        "5": ["Drink water and reset your posture.", "Put away 5 items.", "Wipe one counter or surface."],
        "15": ["Load/unload the dishwasher or do a quick sink reset.", "Fold a small pile or clear one corner.", "Start a load of laundry."],
        "30": ["Quick clean one room: surfaces + floor.", "Prep something simple for later (snack, tea, lunch).", "Do a small declutter: one drawer or shelf."],
        "60": ["Clean one room properly (timer on).", "Meal prep one easy base for the week.", "Do a tidy + reset for tomorrow."],
      },
      medium: {
        "5": ["Set a timer and start a tiny clean-up.", "Pick one small task you’ll finish.", "Open a window and do a quick reset."],
        "15": ["Do a 15-minute tidy sprint.", "Start a simple meal or snack.", "Handle one errand online (bill, appointment, order)."],
        "30": ["Cook something simple and healthy.", "Reset the kitchen and take out trash/recycling.", "Organize one small area you see every day."],
        "60": ["Do a home project for one hour, then stop.", "Meal prep enough for 2 meals.", "Deep clean one annoying spot (bathroom sink, fridge shelf)."],
      },
      high: {
        "5": ["Pick a quick win that makes the whole space feel better.", "Start the task you’ve been putting off.", "Do a fast reset sprint."],
        "15": ["Knock out a nagging chore with a timer.", "Plan the next day: 3 tasks + time blocks.", "Do a quick workout warm-up."],
        "30": ["Do a workout or long walk.", "Cook and tidy as you go.", "Finish a real home task end-to-end."],
        "60": ["Finish a meaningful home project in one session.", "Workout + shower + reset.", "Do a big reset: floors, surfaces, laundry."],
      },
    },
    move: {
      low: {
        "5": ["Stand up, stretch, and take 10 deep breaths.", "Take a short walk and look far away.", "Write one quick note about what matters next."],
        "15": ["Walk for 10–15 minutes.", "Listen to one calming song/podcast segment.", "Do one small errand that’s nearby."],
        "30": ["Go for a longer walk and clear your head.", "Run one useful errand while you’re out.", "Call a friend or family member for a quick check-in."],
        "60": ["Take a long walk in a new place.", "Combine a walk with a useful errand.", "Spend an hour outside and reset."],
      },
      medium: {
        "5": ["Decide the next task you’ll do when you sit down.", "Text someone you’ve been meaning to reply to.", "Do a 5-minute walk to reset."],
        "15": ["Walk and plan: next 3 steps for today.", "Handle one small errand.", "Do a short “reset” routine: water + movement."],
        "30": ["Walk and do a light workout: stairs, brisk pace, mobility.", "Combine movement with planning your afternoon.", "Get a coffee/tea and return with a plan."],
        "60": ["Go for a longer walk or workout.", "Do a meaningful errand run and be done.", "Take a full reset break, then return to work."],
      },
      high: {
        "5": ["Choose a hard task and commit to starting when you’re back.", "Send the bold message.", "Walk fast for 5 minutes."],
        "15": ["Do a brisk walk and come back ready to work.", "Make a decisive phone call.", "Handle something you’ve been avoiding."],
        "30": ["Do a real workout or run.", "Use the momentum to solve a sticky problem while walking.", "Do a focused errand sprint."],
        "60": ["Workout hard, then return and ship something.", "Do a full reset: movement + food + plan.", "Use the hour to tackle the biggest blocker in your head."],
      },
    },
  };
}

function runNextStepSuggestion() {
  if (!nextStepResult || !nextStepTime || !nextStepEnergy || !nextStepContext) return;
  const context = nextStepContext.value;
  const energy = nextStepEnergy.value;
  const bucket = getTimeBucket(nextStepTime.value);

  const suggestions = getNextStepSuggestions();
  const list = suggestions?.[context]?.[energy]?.[bucket] || [];
  const picked = list.length > 0 ? pickFromList(list) : "";

  nextStepResult.textContent = picked || "—";
  setNextStepStatus(picked ? "Suggested." : "No suggestion found.");
}

async function copyNextStepSuggestion() {
  if (!nextStepResult) return;
  const text = nextStepResult.textContent.trim();
  if (!text || text === "—") {
    setNextStepStatus("Get a suggestion first.");
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
    setNextStepStatus("Copied.");
  } catch {
    setNextStepStatus("Copy did not work in this browser.");
  }
}

function initNextStepTool() {
  if (!nextStepButton || !nextStepTime || !nextStepEnergy || !nextStepContext) return;
  nextStepButton.addEventListener("click", runNextStepSuggestion);
  if (nextStepCopyButton) nextStepCopyButton.addEventListener("click", copyNextStepSuggestion);
  [nextStepTime, nextStepEnergy, nextStepContext].forEach((control) => {
    control.addEventListener("change", () => setNextStepStatus(""));
  });
}

// Initialization runs at the end of the file so all constants/functions are defined.

const groceryStorageKey = "groceryListItems";

function setGroceryStatus(message) {
  if (!groceryStatus) return;
  groceryStatus.textContent = message;
}

function loadGroceryItems() {
  try {
    const raw = localStorage.getItem(groceryStorageKey);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter((item) => item && typeof item.label === "string")
      .map((item) => ({
        id: typeof item.id === "string" ? item.id : newId(),
        label: item.label.trim() || "Item",
        checked: Boolean(item.checked),
      }));
  } catch {
    return [];
  }
}

function saveGroceryItems(items) {
  localStorage.setItem(groceryStorageKey, JSON.stringify(items));
}

let groceryItems = loadGroceryItems();

function renderGroceryList() {
  if (!groceryList) return;
  groceryList.innerHTML = "";

  groceryItems.forEach((item) => {
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
    groceryList.append(li);
  });
}

function addGroceryItem(label) {
  const cleaned = String(label).trim().replace(/\s+/g, " ");
  if (!cleaned) {
    setGroceryStatus("Type an item name first.");
    return;
  }

  const nextItem = { id: newId(), label: cleaned, checked: false };
  groceryItems = [nextItem, ...groceryItems];
  saveGroceryItems(groceryItems);
  renderGroceryList();
  setGroceryStatus("Added.");
  if (groceryNewItem) groceryNewItem.value = "";
}

function clearCheckedGroceryItems() {
  const before = groceryItems.length;
  groceryItems = groceryItems.filter((item) => !item.checked);
  if (groceryItems.length === before) {
    setGroceryStatus("No checked items to clear.");
    return;
  }
  saveGroceryItems(groceryItems);
  renderGroceryList();
  setGroceryStatus("Cleared checked items.");
}

function clearAllGroceryItems() {
  if (groceryItems.length === 0) {
    setGroceryStatus("Nothing to clear.");
    return;
  }
  groceryItems = [];
  localStorage.removeItem(groceryStorageKey);
  renderGroceryList();
  setGroceryStatus("Cleared.");
}

function initGroceryList() {
  if (!groceryList || !groceryNewItem || !groceryAddButton) return;

  renderGroceryList();
  if (groceryItems.length > 0) setGroceryStatus("Saved in this browser.");

  groceryList.addEventListener("change", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) return;
    if (target.type !== "checkbox") return;
    const id = target.dataset.id;
    if (!id) return;
    groceryItems = groceryItems.map((item) => (item.id === id ? { ...item, checked: target.checked } : item));
    saveGroceryItems(groceryItems);
    setGroceryStatus("Saved in this browser.");
  });

  groceryAddButton.addEventListener("click", () => addGroceryItem(groceryNewItem.value));
  groceryNewItem.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    addGroceryItem(groceryNewItem.value);
  });

  if (groceryClearCheckedButton) groceryClearCheckedButton.addEventListener("click", clearCheckedGroceryItems);
  if (groceryClearAllButton) groceryClearAllButton.addEventListener("click", clearAllGroceryItems);
}

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

function downloadJsonFile(payload, filename) {
  const text = JSON.stringify(payload, null, 2) + "\n";
  const blob = new Blob([text], { type: "application/json;charset=utf-8" });
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

function normalizeSearchText(value) {
  return String(value).trim().toLowerCase();
}

function prefersReducedMotion() {
  return Boolean(window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches);
}

function getScrollBehavior() {
  return prefersReducedMotion() ? "auto" : "smooth";
}

function slugifyToolName(value) {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "tool";
}

function setToolJumpStatus(message) {
  if (!toolJumpStatus) return;
  toolJumpStatus.textContent = message;
}

function initToolSearch() {
  if (!toolSearch) return;
  const toolCards = Array.from(document.querySelectorAll(".tool-card"));
  if (toolCards.length === 0) return;

  toolCards.forEach((card, index) => {
    const title = card.querySelector("h3")?.textContent || `Tool ${index + 1}`;
    if (!card.id) card.id = `tool-${slugifyToolName(title)}`;
    card.tabIndex = -1;
  });

  function buildJumpOptions(cards) {
    return cards
      .map((card) => ({
        id: card.id,
        title: card.querySelector("h3")?.textContent || "Tool",
      }))
      .sort((a, b) => a.title.localeCompare(b.title));
  }

  function renderJumpOptions(cards) {
    if (!toolJumpSelect) return;
    const options = buildJumpOptions(cards);
    const previousValue = toolJumpSelect.value;
    toolJumpSelect.innerHTML = '<option value="">Choose a tool…</option>';
    options.forEach((option) => {
      const el = document.createElement("option");
      el.value = option.id;
      el.textContent = option.title;
      toolJumpSelect.append(el);
    });
    toolJumpSelect.disabled = options.length === 0;
    if (options.some((option) => option.id === previousValue)) {
      toolJumpSelect.value = previousValue;
    }
  }

  if (toolJumpSelect) {
    renderJumpOptions(toolCards);

    toolJumpSelect.addEventListener("change", () => {
      const targetId = toolJumpSelect.value;
      if (!targetId) {
        setToolJumpStatus("");
        return;
      }

      const targetCard = document.getElementById(targetId);
      if (!targetCard) {
        setToolJumpStatus("That tool was not available.");
        return;
      }

      targetCard.scrollIntoView({ behavior: getScrollBehavior(), block: "start" });
      window.setTimeout(() => targetCard.focus({ preventScroll: true }), 120);
      const heading = targetCard.querySelector("h3")?.textContent || "Tool";
      setToolJumpStatus(`Jumped to ${heading}.`);
    });
  }

  function updateSearch() {
    const query = normalizeSearchText(toolSearch.value);
    if (toolSearchClearButton) toolSearchClearButton.hidden = !query;
    let visibleCount = 0;
    toolCards.forEach((card) => {
      const title = card.querySelector("h3")?.textContent || "";
      const description = card.querySelector(".tool-heading p")?.textContent || "";
      const keywords = card.dataset.keywords || "";
      const match = normalizeSearchText(`${title} ${description} ${keywords}`).includes(query);
      card.hidden = !match;
      if (match) visibleCount += 1;
    });
    renderJumpOptions(toolCards.filter((card) => !card.hidden));

    if (toolSearchSummary) {
      toolSearchSummary.textContent = query
        ? `${visibleCount.toLocaleString()} of ${toolCards.length.toLocaleString()} tools shown`
        : `${toolCards.length.toLocaleString()} tools ready`;
    }

    if (toolSearchEmptyState) {
      toolSearchEmptyState.hidden = visibleCount !== 0;
    }

    if (!toolSearchStatus) return;
    if (!query) {
      toolSearchStatus.textContent = `${toolCards.length.toLocaleString()} tools.`;
      return;
    }
    toolSearchStatus.textContent =
      visibleCount === 0
        ? "No tools match."
        : `${visibleCount.toLocaleString()} tool${visibleCount === 1 ? "" : "s"} shown.`;
  }

  updateSearch();
  toolSearch.addEventListener("input", updateSearch);
  toolSearch.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (!toolSearch.value) return;
    toolSearch.value = "";
    updateSearch();
  });

  if (toolSearchClearButton) {
    toolSearchClearButton.addEventListener("click", () => {
      toolSearch.value = "";
      updateSearch();
      toolSearch.focus();
    });
  }

  document.addEventListener("keydown", (event) => {
    const usesCommandShortcut = event.key.toLowerCase() === "k" && (event.metaKey || event.ctrlKey);
    const usesSearchShortcut = event.key === "/" || usesCommandShortcut;
    if (!usesSearchShortcut) return;
    if (event.altKey) return;

    const active = document.activeElement;
    const isTypingTarget =
      active instanceof HTMLInputElement ||
      active instanceof HTMLTextAreaElement ||
      active instanceof HTMLSelectElement ||
      Boolean(active?.getAttribute?.("contenteditable"));
    if (isTypingTarget && !usesCommandShortcut) return;

    event.preventDefault();
    toolSearch.focus();
    toolSearch.select();
  });
}

function initBackToTopButton() {
  if (!backToTopButton) return;

  function updateBackToTopVisibility() {
    backToTopButton.hidden = window.scrollY < 480;
  }

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: getScrollBehavior() });
  });

  window.addEventListener("scroll", updateBackToTopVisibility, { passive: true });
  updateBackToTopVisibility();
}

function setBackupStatus(message) {
  if (!backupStatus) return;
  backupStatus.textContent = message;
}

function setBackupFileStatus(message) {
  if (!backupFileStatus) return;
  backupFileStatus.textContent = message;
}

function formatBytes(bytes) {
  const value = Number(bytes);
  if (!Number.isFinite(value) || value <= 0) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  const idx = Math.min(units.length - 1, Math.floor(Math.log10(value) / 3));
  const scaled = value / 1000 ** idx;
  const digits = idx === 0 ? 0 : scaled < 10 ? 1 : 0;
  return `${scaled.toFixed(digits)} ${units[idx]}`;
}

function setMeetingNotesStatus(message) {
  if (!meetingNotesStatus) return;
  meetingNotesStatus.textContent = message;
}

function cleanMeetingNotes(raw, { removeTimestamps, removeSpeakers, fixBullets }) {
  const timestampPattern = /^\s*(?:\[\s*)?\d{1,2}:\d{2}(?::\d{2})?(?:\s*\])?\s*/;
  const speakerPattern = /^\s*[A-Z][A-Za-z0-9 ._-]{0,28}:\s+/;
  const bulletPattern = /^\s*(?:[•●▪◦\-*]+)\s+/;

  const lines = String(raw || "")
    .replace(/\r\n?/g, "\n")
    .split("\n");

  const output = [];
  lines.forEach((line) => {
    let text = String(line).trim();
    if (!text) {
      output.push("");
      return;
    }

    if (removeTimestamps) text = text.replace(timestampPattern, "").trim();
    if (removeSpeakers) text = text.replace(speakerPattern, "").trim();

    if (fixBullets) {
      if (bulletPattern.test(text)) {
        text = text.replace(bulletPattern, "- ");
      }
    }

    text = text.replace(/\s+/g, " ").trim();
    output.push(text);
  });

  const collapsed = [];
  output.forEach((line) => {
    if (!line) {
      if (collapsed.length === 0) return;
      if (!collapsed[collapsed.length - 1]) return;
      collapsed.push("");
      return;
    }
    collapsed.push(line);
  });

  while (collapsed.length > 0 && !collapsed[collapsed.length - 1]) collapsed.pop();
  return collapsed.join("\n");
}

function initMeetingNotesCleaner() {
  if (!meetingNotesText || !meetingNotesCleanButton) return;

  function runClean() {
    if (!meetingNotesText.value.trim()) {
      setMeetingNotesStatus("Paste notes first.");
      return;
    }
    const next = cleanMeetingNotes(meetingNotesText.value, {
      removeTimestamps: Boolean(meetingNotesRemoveTimestamps?.checked),
      removeSpeakers: Boolean(meetingNotesRemoveSpeakers?.checked),
      fixBullets: Boolean(meetingNotesFixBullets?.checked),
    });
    meetingNotesText.value = next;
    setMeetingNotesStatus(next.trim() ? "Cleaned." : "All content was cleaned away.");
  }

  if (meetingNotesSampleButton) {
    meetingNotesSampleButton.addEventListener("click", () => {
      meetingNotesText.value = meetingNotesSample;
      setMeetingNotesStatus("Example added.");
      meetingNotesText.focus();
    });
  }

  meetingNotesCleanButton.addEventListener("click", runClean);

  if (meetingNotesCopyButton) {
    meetingNotesCopyButton.addEventListener("click", async () => {
      const text = meetingNotesText.value.trim();
      if (!text) {
        setMeetingNotesStatus("Nothing to copy yet.");
        return;
      }
      try {
        await navigator.clipboard.writeText(text);
        setMeetingNotesStatus("Copied.");
      } catch {
        setMeetingNotesStatus("Copy did not work in this browser.");
      }
    });
  }

  if (meetingNotesClearButton) {
    meetingNotesClearButton.addEventListener("click", () => {
      meetingNotesText.value = "";
      setMeetingNotesStatus("Cleared.");
      meetingNotesText.focus();
    });
  }

  meetingNotesText.addEventListener("input", () => setMeetingNotesStatus(""));
}

function getBackupStorageKeys() {
  return [
    "dailyFocus",
    "countdownTimerMinutes",
    "sleepPlannerSettings",
    "eventCountdownSettings",
    "packingChecklist",
    "groceryListItems",
    "quickNotesText",
    "habitTrackerWeekly",
    "themePreference",
  ];
}

function buildBackupPayload() {
  const keys = getBackupStorageKeys();
  const data = {};
  keys.forEach((key) => {
    const value = localStorage.getItem(key);
    if (value !== null) data[key] = value;
  });
  return {
    schema: 1,
    exportedAt: new Date().toISOString(),
    data,
  };
}

function downloadBackup() {
  const payload = buildBackupPayload();
  const today = new Date().toISOString().slice(0, 10);
  downloadJsonFile(payload, `everyday-tools-backup-${today}.json`);
  const keys = Object.keys(payload.data || {});
  setBackupStatus(`Backup downloaded (${keys.length.toLocaleString()} item${keys.length === 1 ? "" : "s"}).`);
}

async function restoreBackup() {
  if (!backupFileInput?.files || backupFileInput.files.length === 0) {
    setBackupStatus("Choose a backup file first.");
    return;
  }

  const file = backupFileInput.files[0];
  if (!file) {
    setBackupStatus("Choose a backup file first.");
    return;
  }

  let payload = null;
  try {
    payload = JSON.parse(await file.text());
  } catch {
    setBackupStatus("That file did not look like a valid JSON backup.");
    return;
  }

  if (typeof payload?.schema === "number" && payload.schema !== 1) {
    setBackupStatus("That backup file format is not supported yet.");
    return;
  }

  const data = payload?.data;
  if (!data || typeof data !== "object") {
    setBackupStatus("That backup file is missing data.");
    return;
  }

  const keys = getBackupStorageKeys();
  keys.forEach((key) => {
    if (!Object.prototype.hasOwnProperty.call(data, key)) return;
    const value = data[key];
    if (value === null) {
      localStorage.removeItem(key);
      return;
    }
    if (typeof value === "string") {
      localStorage.setItem(key, value);
    }
  });

  setBackupStatus("Restored. Reloading…");
  window.setTimeout(() => window.location.reload(), 350);
}

function clearSavedData() {
  if (!window.confirm("Clear saved data for Everyday Tools in this browser?")) return;
  const keys = getBackupStorageKeys();
  keys.forEach((key) => localStorage.removeItem(key));
  setBackupStatus("Cleared. Reloading…");
  window.setTimeout(() => window.location.reload(), 350);
}

function initBackupRestore() {
  if (!backupDownloadButton && !backupRestoreButton && !backupClearButton) return;

  if (backupDownloadButton) backupDownloadButton.addEventListener("click", downloadBackup);

  function refreshRestoreEnabled() {
    if (!backupRestoreButton) return;
    const file = backupFileInput?.files?.[0] || null;
    const hasFile = Boolean(file);
    backupRestoreButton.disabled = !hasFile;
    if (!file) {
      setBackupFileStatus("");
      return;
    }
    setBackupFileStatus(`${file.name} (${formatBytes(file.size)})`);
  }

  if (backupFileInput) backupFileInput.addEventListener("change", refreshRestoreEnabled);
  refreshRestoreEnabled();

  if (backupRestoreButton) backupRestoreButton.addEventListener("click", restoreBackup);
  if (backupClearButton) backupClearButton.addEventListener("click", clearSavedData);
}

loadFocus();
calculateSplit();
updateReadingTime();
initNextStepTool();
initSleepPlanner();
initDateSpanTool();
initEventCountdown();
initTimer();
updateUnitConverter();
initPercentageHelper();
initBudgetSplitter();
initPackingChecklist();
initGroceryList();
initToolSearch();
initBackToTopButton();
initQuickNotes();
initPassphrase();
initHabitTracker();
initBackupRestore();
initMeetingNotesCleaner();
