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
const tipCopyButton = document.querySelector("#tipCopyButton");
const tipStatus = document.querySelector("#tipStatus");
const messyText = document.querySelector("#messyText");
const sampleTextButton = document.querySelector("#sampleTextButton");
const cleanTextButton = document.querySelector("#cleanTextButton");
const copyTextButton = document.querySelector("#copyTextButton");
const copyStatus = document.querySelector("#copyStatus");
const focusInputs = Array.from(document.querySelectorAll(".focus-input"));
const saveFocusButton = document.querySelector("#saveFocusButton");
const copyFocusButton = document.querySelector("#copyFocusButton");
const downloadFocusButton = document.querySelector("#downloadFocusButton");
const clearFocusButton = document.querySelector("#clearFocusButton");
const focusStatus = document.querySelector("#focusStatus");
const nextStepTime = document.querySelector("#nextStepTime");
const nextStepEnergy = document.querySelector("#nextStepEnergy");
const nextStepContext = document.querySelector("#nextStepContext");
const nextStepResult = document.querySelector("#nextStepResult");
const nextStepSampleButton = document.querySelector("#nextStepSampleButton");
const nextStepButton = document.querySelector("#nextStepButton");
const nextStepCopyButton = document.querySelector("#nextStepCopyButton");
const nextStepClearButton = document.querySelector("#nextStepClearButton");
const nextStepStatus = document.querySelector("#nextStepStatus");
const readingText = document.querySelector("#readingText");
const readingSampleButton = document.querySelector("#readingSampleButton");
const readingClearButton = document.querySelector("#readingClearButton");
const readingTimeResult = document.querySelector("#readingTimeResult");
const readingWordCount = document.querySelector("#readingWordCount");
const readingCopyButton = document.querySelector("#readingCopyButton");
const readingStatus = document.querySelector("#readingStatus");
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
const laundryLoads = document.querySelector("#laundryLoads");
const laundryWashMinutes = document.querySelector("#laundryWashMinutes");
const laundryDryMinutes = document.querySelector("#laundryDryMinutes");
const laundryStartTime = document.querySelector("#laundryStartTime");
const laundryDoneResult = document.querySelector("#laundryDoneResult");
const laundryTotalResult = document.querySelector("#laundryTotalResult");
const laundryPlanResult = document.querySelector("#laundryPlanResult");
const laundryCopyButton = document.querySelector("#laundryCopyButton");
const laundryStatus = document.querySelector("#laundryStatus");
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
const discountOriginalPrice = document.querySelector("#discountOriginalPrice");
const discountPercent = document.querySelector("#discountPercent");
const discountTaxPercent = document.querySelector("#discountTaxPercent");
const discountFinalResult = document.querySelector("#discountFinalResult");
const discountSavingsResult = document.querySelector("#discountSavingsResult");
const discountTaxResult = document.querySelector("#discountTaxResult");
const discountCopyButton = document.querySelector("#discountCopyButton");
const discountStatus = document.querySelector("#discountStatus");
const budgetTotal = document.querySelector("#budgetTotal");
const budgetDays = document.querySelector("#budgetDays");
const budgetBuffer = document.querySelector("#budgetBuffer");
const budgetSpendableResult = document.querySelector("#budgetSpendableResult");
const budgetDailyResult = document.querySelector("#budgetDailyResult");
const budgetWeeklyResult = document.querySelector("#budgetWeeklyResult");
const budgetCopyButton = document.querySelector("#budgetCopyButton");
const budgetStatus = document.querySelector("#budgetStatus");
const paycheckAmount = document.querySelector("#paycheckAmount");
const paycheckBillsPercent = document.querySelector("#paycheckBillsPercent");
const paycheckSavingsPercent = document.querySelector("#paycheckSavingsPercent");
const paycheckDays = document.querySelector("#paycheckDays");
const paycheckSpendableResult = document.querySelector("#paycheckSpendableResult");
const paycheckDailyResult = document.querySelector("#paycheckDailyResult");
const paycheckSetAsideResult = document.querySelector("#paycheckSetAsideResult");
const paycheckCopyButton = document.querySelector("#paycheckCopyButton");
const paycheckStatus = document.querySelector("#paycheckStatus");
const billReminderName = document.querySelector("#billReminderName");
const billReminderAmount = document.querySelector("#billReminderAmount");
const billReminderDate = document.querySelector("#billReminderDate");
const billReminderDays = document.querySelector("#billReminderDays");
const billReminderWeekly = document.querySelector("#billReminderWeekly");
const billReminderTarget = document.querySelector("#billReminderTarget");
const billReminderCopyButton = document.querySelector("#billReminderCopyButton");
const billReminderStatus = document.querySelector("#billReminderStatus");
const savingsGoalName = document.querySelector("#savingsGoalName");
const savingsTargetAmount = document.querySelector("#savingsTargetAmount");
const savingsAlreadySaved = document.querySelector("#savingsAlreadySaved");
const savingsTargetDate = document.querySelector("#savingsTargetDate");
const savingsRemainingResult = document.querySelector("#savingsRemainingResult");
const savingsWeeklyResult = document.querySelector("#savingsWeeklyResult");
const savingsMonthlyResult = document.querySelector("#savingsMonthlyResult");
const savingsGoalCopyButton = document.querySelector("#savingsGoalCopyButton");
const savingsGoalStatus = document.querySelector("#savingsGoalStatus");
const unitPriceUnit = document.querySelector("#unitPriceUnit");
const unitPriceAPrice = document.querySelector("#unitPriceAPrice");
const unitPriceAAmount = document.querySelector("#unitPriceAAmount");
const unitPriceBPrice = document.querySelector("#unitPriceBPrice");
const unitPriceBAmount = document.querySelector("#unitPriceBAmount");
const unitPriceBetterResult = document.querySelector("#unitPriceBetterResult");
const unitPriceAResult = document.querySelector("#unitPriceAResult");
const unitPriceBResult = document.querySelector("#unitPriceBResult");
const unitPriceCopyButton = document.querySelector("#unitPriceCopyButton");
const unitPriceStatus = document.querySelector("#unitPriceStatus");
const feeSalePrice = document.querySelector("#feeSalePrice");
const feePercent = document.querySelector("#feePercent");
const feeFixedAmount = document.querySelector("#feeFixedAmount");
const feeCosts = document.querySelector("#feeCosts");
const feeNetResult = document.querySelector("#feeNetResult");
const feeTotalCostsResult = document.querySelector("#feeTotalCostsResult");
const feeKeepRateResult = document.querySelector("#feeKeepRateResult");
const feeCopyButton = document.querySelector("#feeCopyButton");
const feeStatus = document.querySelector("#feeStatus");
const fuelMiles = document.querySelector("#fuelMiles");
const fuelMpg = document.querySelector("#fuelMpg");
const fuelPrice = document.querySelector("#fuelPrice");
const fuelCostResult = document.querySelector("#fuelCostResult");
const fuelGallonsResult = document.querySelector("#fuelGallonsResult");
const fuelCopyButton = document.querySelector("#fuelCopyButton");
const fuelStatus = document.querySelector("#fuelStatus");
const recipeOriginalServings = document.querySelector("#recipeOriginalServings");
const recipeNeededServings = document.querySelector("#recipeNeededServings");
const recipeIngredientAmount = document.querySelector("#recipeIngredientAmount");
const recipeIngredientUnit = document.querySelector("#recipeIngredientUnit");
const recipeScaledAmountResult = document.querySelector("#recipeScaledAmountResult");
const recipeMultiplierResult = document.querySelector("#recipeMultiplierResult");
const recipeHalveButton = document.querySelector("#recipeHalveButton");
const recipeDoubleButton = document.querySelector("#recipeDoubleButton");
const recipeCopyButton = document.querySelector("#recipeCopyButton");
const recipeStatus = document.querySelector("#recipeStatus");
const leftoverPortions = document.querySelector("#leftoverPortions");
const leftoverPeople = document.querySelector("#leftoverPeople");
const leftoverPortionsPerPerson = document.querySelector("#leftoverPortionsPerPerson");
const leftoverUseDays = document.querySelector("#leftoverUseDays");
const leftoverMealsResult = document.querySelector("#leftoverMealsResult");
const leftoverUseByResult = document.querySelector("#leftoverUseByResult");
const leftoverPlanResult = document.querySelector("#leftoverPlanResult");
const leftoverCopyButton = document.querySelector("#leftoverCopyButton");
const leftoverStatus = document.querySelector("#leftoverStatus");
const waterWeight = document.querySelector("#waterWeight");
const waterActivityMinutes = document.querySelector("#waterActivityMinutes");
const waterBottleSize = document.querySelector("#waterBottleSize");
const waterDailyResult = document.querySelector("#waterDailyResult");
const waterCupsResult = document.querySelector("#waterCupsResult");
const waterBottlesResult = document.querySelector("#waterBottlesResult");
const waterCopyButton = document.querySelector("#waterCopyButton");
const waterStatus = document.querySelector("#waterStatus");
const timeBuddyLocalTime = document.querySelector("#timeBuddyLocalTime");
const timeBuddyZone = document.querySelector("#timeBuddyZone");
const timeBuddyLocalResult = document.querySelector("#timeBuddyLocalResult");
const timeBuddyRemoteResult = document.querySelector("#timeBuddyRemoteResult");
const timeBuddyDateResult = document.querySelector("#timeBuddyDateResult");
const timeBuddyNowButton = document.querySelector("#timeBuddyNowButton");
const timeBuddyCopyButton = document.querySelector("#timeBuddyCopyButton");
const timeBuddyStatus = document.querySelector("#timeBuddyStatus");
const leaveArrivalTime = document.querySelector("#leaveArrivalTime");
const leaveTravelMinutes = document.querySelector("#leaveTravelMinutes");
const leavePrepMinutes = document.querySelector("#leavePrepMinutes");
const leaveBufferMinutes = document.querySelector("#leaveBufferMinutes");
const leaveByResult = document.querySelector("#leaveByResult");
const leaveStartPrepResult = document.querySelector("#leaveStartPrepResult");
const leaveTotalResult = document.querySelector("#leaveTotalResult");
const leaveNowButton = document.querySelector("#leaveNowButton");
const leaveCopyButton = document.querySelector("#leaveCopyButton");
const leaveStatus = document.querySelector("#leaveStatus");
const themeToggle = document.querySelector("#themeToggle");
const toolSearch = document.querySelector("#toolSearch");
const toolSearchStatus = document.querySelector("#toolSearchStatus");
const toolSearchClearButton = document.querySelector("#toolSearchClearButton");
const toolSearchSummary = document.querySelector("#toolSearchSummary");
const toolSearchEmptyState = document.querySelector("#toolSearchEmptyState");
const toolSearchQuickButtons = Array.from(document.querySelectorAll("[data-search-term]"));
const toolJumpSelect = document.querySelector("#toolJumpSelect");
const toolJumpStatus = document.querySelector("#toolJumpStatus");
const backToTopButton = document.querySelector("#backToTopButton");
const pickerItems = document.querySelector("#pickerItems");
const pickerResult = document.querySelector("#pickerResult");
const pickerSampleButton = document.querySelector("#pickerSampleButton");
const pickerButton = document.querySelector("#pickerButton");
const pickerCopyButton = document.querySelector("#pickerCopyButton");
const pickerClearButton = document.querySelector("#pickerClearButton");
const pickerStatus = document.querySelector("#pickerStatus");
const groceryNewItem = document.querySelector("#groceryNewItem");
const groceryAddButton = document.querySelector("#groceryAddButton");
const groceryCopyButton = document.querySelector("#groceryCopyButton");
const groceryDownloadButton = document.querySelector("#groceryDownloadButton");
const groceryClearCheckedButton = document.querySelector("#groceryClearCheckedButton");
const groceryClearAllButton = document.querySelector("#groceryClearAllButton");
const groceryList = document.querySelector("#groceryList");
const groceryStatus = document.querySelector("#groceryStatus");
const quickNotesText = document.querySelector("#quickNotesText");
const quickNotesCopyButton = document.querySelector("#quickNotesCopyButton");
const quickNotesDownloadButton = document.querySelector("#quickNotesDownloadButton");
const quickNotesClearButton = document.querySelector("#quickNotesClearButton");
const quickNotesStatus = document.querySelector("#quickNotesStatus");
const passphraseWordCount = document.querySelector("#passphraseWordCount");
const passphraseSeparator = document.querySelector("#passphraseSeparator");
const passphraseIncludeNumber = document.querySelector("#passphraseIncludeNumber");
const passphraseResult = document.querySelector("#passphraseResult");
const passphraseGenerateButton = document.querySelector("#passphraseGenerateButton");
const passphraseCopyButton = document.querySelector("#passphraseCopyButton");
const passphraseClearButton = document.querySelector("#passphraseClearButton");
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

const readingTimeSample = `A good daily tool should answer one small question quickly.

It should work without an account, avoid unnecessary choices, and make the result easy to copy or reuse later.`;

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

function setTipStatus(message) {
  if (!tipStatus) return;
  tipStatus.textContent = message;
}

async function copyTipSplit() {
  const bill = Math.max(0, parseNumberLike(billTotal?.value));
  const tip = Math.max(0, parseNumberLike(tipPercent?.value));
  const people = Math.max(1, Math.floor(parseNumberLike(peopleCount?.value) || 1));
  const tipAmount = bill * (tip / 100);
  const total = bill + tipAmount;
  const text =
    `${currency.format(bill)} bill with ${tip}% tip split ${people} way${people === 1 ? "" : "s"}. ` +
    `Each person pays ${currency.format(total / people)}. Tip: ${currency.format(tipAmount)}. Total: ${currency.format(total)}.`;

  try {
    await navigator.clipboard.writeText(text);
    setTipStatus("Copied.");
  } catch {
    setTipStatus("Copy did not work in this browser.");
  }
}

if (tipCopyButton) tipCopyButton.addEventListener("click", copyTipSplit);

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
  updateFocusActions();
}

function getFocusValues() {
  return focusInputs.map((input) => input.value.trim()).filter(Boolean);
}

function buildFocusText() {
  return getFocusValues()
    .map((value, index) => `${index + 1}. ${value}`)
    .join("\n");
}

function updateFocusActions() {
  const hasFocus = getFocusValues().length > 0;
  if (copyFocusButton) copyFocusButton.disabled = !hasFocus;
  if (downloadFocusButton) downloadFocusButton.disabled = !hasFocus;
  if (clearFocusButton) clearFocusButton.disabled = !hasFocus;
}

function countWords(text) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function updateReadingTime() {
  const words = countWords(readingText.value);
  const minutes = words === 0 ? 0 : Math.max(1, Math.ceil(words / 200));
  readingTimeResult.textContent = `${minutes} min`;
  readingWordCount.textContent = `${words.toLocaleString()} word${words === 1 ? "" : "s"}.`;
  if (readingCopyButton) readingCopyButton.disabled = words === 0;
  if (readingClearButton) readingClearButton.disabled = words === 0;
  if (readingStatus) readingStatus.textContent = "";
}

readingText.addEventListener("input", updateReadingTime);

function setReadingStatus(message) {
  if (!readingStatus) return;
  readingStatus.textContent = message;
}

async function copyReadingEstimate() {
  const words = countWords(readingText?.value || "");
  if (words === 0) {
    setReadingStatus("Paste text first.");
    return;
  }

  const minutes = Math.max(1, Math.ceil(words / 200));
  const text = `${words.toLocaleString()} word${words === 1 ? "" : "s"}: about ${minutes} minute${minutes === 1 ? "" : "s"} to read.`;

  try {
    await navigator.clipboard.writeText(text);
    setReadingStatus("Copied.");
  } catch {
    setReadingStatus("Copy did not work in this browser.");
  }
}

if (readingCopyButton) readingCopyButton.addEventListener("click", copyReadingEstimate);

if (readingSampleButton) {
  readingSampleButton.addEventListener("click", () => {
    readingText.value = readingTimeSample;
    updateReadingTime();
    setReadingStatus("Example added.");
    readingText.focus();
  });
}

if (readingClearButton) {
  readingClearButton.addEventListener("click", () => {
    readingText.value = "";
    updateReadingTime();
    setReadingStatus("Cleared.");
    readingText.focus();
  });
}

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

function setLaundryStatus(message) {
  if (!laundryStatus) return;
  laundryStatus.textContent = message;
}

function formatDuration(minutes) {
  const totalMinutes = Math.max(0, Math.round(minutes));
  const hours = Math.floor(totalMinutes / 60);
  const mins = totalMinutes % 60;

  if (hours === 0) return `${mins} min`;
  if (mins === 0) return `${hours} hr`;
  return `${hours} hr ${mins} min`;
}

function getLaundrySummary() {
  const loads = Math.max(1, Math.round(parseNumberLike(laundryLoads?.value) || 1));
  const washMinutes = Math.max(1, Math.round(parseNumberLike(laundryWashMinutes?.value) || 1));
  const dryMinutes = Math.max(0, Math.round(parseNumberLike(laundryDryMinutes?.value) || 0));
  const parsedStart = parseTimeInput(laundryStartTime?.value);
  const startMinutes = parsedStart ? parsedStart.hours * 60 + parsedStart.minutes : 18 * 60;
  const totalMinutes = washMinutes * loads + dryMinutes;
  const doneMinutes = startMinutes + totalMinutes;
  const loadLabel = loads === 1 ? "load" : "loads";
  const plan =
    loads === 1
      ? "Move it once the washer finishes"
      : `Move each load after ${formatDuration(washMinutes)}`;

  return {
    loads,
    washMinutes,
    dryMinutes,
    totalMinutes,
    doneTime: formatClockMinutes(doneMinutes),
    loadLabel,
    plan,
  };
}

function updateLaundryPlanner() {
  if (!laundryDoneResult || !laundryTotalResult || !laundryPlanResult) return;
  const summary = getLaundrySummary();

  laundryDoneResult.textContent = summary.doneTime;
  laundryTotalResult.textContent = formatDuration(summary.totalMinutes);
  laundryPlanResult.textContent = summary.plan;
  setLaundryStatus("Assumes you can start the next wash while the previous load dries.");
}

async function copyLaundryPlan() {
  const summary = getLaundrySummary();
  const text =
    `Laundry plan: ${summary.loads} ${summary.loadLabel}, done around ${summary.doneTime}. ` +
    `Total time: ${formatDuration(summary.totalMinutes)}. ${summary.plan}.`;

  try {
    await navigator.clipboard.writeText(text);
    setLaundryStatus("Copied.");
  } catch {
    setLaundryStatus("Copy did not work in this browser.");
  }
}

function initLaundryPlanner() {
  if (!laundryLoads || !laundryWashMinutes || !laundryDryMinutes || !laundryStartTime) return;
  [laundryLoads, laundryWashMinutes, laundryDryMinutes, laundryStartTime].forEach((control) => {
    control.addEventListener("input", updateLaundryPlanner);
    control.addEventListener("change", updateLaundryPlanner);
  });
  if (laundryCopyButton) laundryCopyButton.addEventListener("click", copyLaundryPlan);
  updateLaundryPlanner();
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

  if (packingItems.length === 0) {
    const empty = document.createElement("li");
    empty.className = "checklist-empty";
    empty.textContent = "No packing items yet. Add one above or reset to defaults.";
    checklistEls.list.append(empty);
  }

  packingItems.forEach((item) => {
    const li = document.createElement("li");
    li.className = "checklist-item";

    const label = document.createElement("label");
    label.className = "checklist-label";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "packingChecklistItem";
    checkbox.checked = item.checked;
    checkbox.dataset.id = item.id;

    const text = document.createElement("span");
    text.textContent = item.label;

    label.append(checkbox, text);
    li.append(label);
    checklistEls.list.append(li);
  });

  if (checklistEls.clearCheckedButton) {
    checklistEls.clearCheckedButton.disabled = !packingItems.some((item) => item.checked);
  }
  if (checklistEls.copyButton) checklistEls.copyButton.disabled = packingItems.length === 0;
  if (checklistEls.downloadButton) checklistEls.downloadButton.disabled = packingItems.length === 0;
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

function buildPackingListText() {
  return packingItems
    .map((item) => `${item.checked ? "[x]" : "[ ]"} ${item.label}`)
    .join("\n");
}

async function copyPackingList() {
  const text = buildPackingListText();
  if (!text) {
    setChecklistStatus("Add at least 1 item first.");
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
    setChecklistStatus("Copied.");
  } catch {
    setChecklistStatus("Copy did not work in this browser.");
  }
}

function downloadPackingList() {
  const text = buildPackingListText();
  if (!text) {
    setChecklistStatus("Add at least 1 item first.");
    return;
  }
  const today = new Date().toISOString().slice(0, 10);
  downloadTextFile(text + "\n", `everyday-packing-list-${today}.txt`);
  setChecklistStatus("Downloaded.");
}

function initPackingChecklist() {
  const list = document.querySelector("#checklistList");
  if (!list) return;

  checklistEls = {
    list,
    newItem: document.querySelector("#checklistNewItem"),
    addButton: document.querySelector("#checklistAddButton"),
    copyButton: document.querySelector("#checklistCopyButton"),
    downloadButton: document.querySelector("#checklistDownloadButton"),
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
    renderPackingChecklist();
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
  if (checklistEls.copyButton) checklistEls.copyButton.addEventListener("click", copyPackingList);
  if (checklistEls.downloadButton) checklistEls.downloadButton.addEventListener("click", downloadPackingList);
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

function setDiscountStatus(message) {
  if (!discountStatus) return;
  discountStatus.textContent = message;
}

function getDiscountSummary() {
  const originalPrice = Math.max(0, parseNumberLike(discountOriginalPrice?.value));
  const discountRate = Math.min(100, Math.max(0, parseNumberLike(discountPercent?.value)));
  const taxRate = Math.max(0, parseNumberLike(discountTaxPercent?.value));
  const savings = originalPrice * (discountRate / 100);
  const subtotal = Math.max(0, originalPrice - savings);
  const tax = subtotal * (taxRate / 100);
  const finalPrice = subtotal + tax;

  return {
    originalPrice,
    discountRate,
    taxRate,
    savings,
    subtotal,
    tax,
    finalPrice,
  };
}

function updatePriceAfterDiscount() {
  if (!discountFinalResult || !discountSavingsResult || !discountTaxResult) return;
  const summary = getDiscountSummary();

  discountFinalResult.textContent = currency.format(summary.finalPrice);
  discountSavingsResult.textContent = currency.format(summary.savings);
  discountTaxResult.textContent = currency.format(summary.tax);

  if (summary.originalPrice === 0) {
    setDiscountStatus("Enter an original price first.");
    return;
  }

  if (summary.discountRate === 100) {
    setDiscountStatus("The item is free before tax.");
    return;
  }

  setDiscountStatus("Useful for sale shelves, coupons, and checkout math.");
}

async function copyDiscountPrice() {
  const summary = getDiscountSummary();
  if (summary.originalPrice === 0) {
    setDiscountStatus("Enter an original price first.");
    return;
  }

  const text =
    `${currency.format(summary.originalPrice)} item with ${formatNumber(summary.discountRate, 1)}% off ` +
    `and ${formatNumber(summary.taxRate, 1)}% tax. ` +
    `Final price: ${currency.format(summary.finalPrice)}. ` +
    `Savings: ${currency.format(summary.savings)}. Tax: ${currency.format(summary.tax)}.`;

  try {
    await navigator.clipboard.writeText(text);
    setDiscountStatus("Copied.");
  } catch {
    setDiscountStatus("Copy did not work in this browser.");
  }
}

function initPriceAfterDiscount() {
  if (!discountOriginalPrice || !discountPercent || !discountTaxPercent) return;
  [discountOriginalPrice, discountPercent, discountTaxPercent].forEach((control) => {
    control.addEventListener("input", updatePriceAfterDiscount);
  });
  if (discountCopyButton) discountCopyButton.addEventListener("click", copyDiscountPrice);
  updatePriceAfterDiscount();
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

function setPaycheckStatus(message) {
  if (!paycheckStatus) return;
  paycheckStatus.textContent = message;
}

function getPaycheckSummary() {
  const amount = Math.max(0, parseNumberLike(paycheckAmount?.value));
  const billsPercent = Math.min(100, Math.max(0, parseNumberLike(paycheckBillsPercent?.value)));
  const savingsPercent = Math.min(100, Math.max(0, parseNumberLike(paycheckSavingsPercent?.value)));
  const days = Math.max(1, Math.floor(parseNumberLike(paycheckDays?.value) || 1));
  const rawSetAsidePercent = billsPercent + savingsPercent;
  const totalSetAsidePercent = Math.min(100, rawSetAsidePercent);
  const capScale = rawSetAsidePercent > 100 ? 100 / rawSetAsidePercent : 1;
  const billsAmount = amount * ((billsPercent * capScale) / 100);
  const savingsAmount = amount * ((savingsPercent * capScale) / 100);
  const setAsideAmount = amount * (totalSetAsidePercent / 100);
  const spendable = Math.max(0, amount - setAsideAmount);
  const daily = spendable / days;

  return {
    amount,
    billsPercent,
    savingsPercent,
    rawSetAsidePercent,
    totalSetAsidePercent,
    billsAmount,
    savingsAmount,
    setAsideAmount,
    spendable,
    daily,
    days,
  };
}

function updatePaycheckPlanner() {
  if (!paycheckSpendableResult || !paycheckDailyResult || !paycheckSetAsideResult) return;
  const summary = getPaycheckSummary();

  paycheckSpendableResult.textContent = currency.format(summary.spendable);
  paycheckDailyResult.textContent = currency.format(summary.daily);
  paycheckSetAsideResult.textContent = currency.format(summary.setAsideAmount);

  if (summary.rawSetAsidePercent > 100) {
    setPaycheckStatus("Bills and savings were capped at 100% of pay.");
    return;
  }

  setPaycheckStatus("Useful right after payday or before a transfer.");
}

async function copyPaycheckPlan() {
  const summary = getPaycheckSummary();
  const text =
    `${currency.format(summary.amount)} paycheck: set aside ${currency.format(summary.billsAmount)} for bills ` +
    `and ${currency.format(summary.savingsAmount)} for savings. ` +
    `Spendable: ${currency.format(summary.spendable)} over ${summary.days} day${summary.days === 1 ? "" : "s"} ` +
    `(${currency.format(summary.daily)} per day).`;

  try {
    await navigator.clipboard.writeText(text);
    setPaycheckStatus("Copied.");
  } catch {
    setPaycheckStatus("Copy did not work in this browser.");
  }
}

function initPaycheckPlanner() {
  if (!paycheckAmount || !paycheckBillsPercent || !paycheckSavingsPercent || !paycheckDays) return;
  [paycheckAmount, paycheckBillsPercent, paycheckSavingsPercent, paycheckDays].forEach((control) => {
    control.addEventListener("input", updatePaycheckPlanner);
  });
  if (paycheckCopyButton) paycheckCopyButton.addEventListener("click", copyPaycheckPlan);
  updatePaycheckPlanner();
}

function setBillReminderStatus(message) {
  if (!billReminderStatus) return;
  billReminderStatus.textContent = message;
}

function getBillReminderSummary() {
  const dueDate = parseDateOnlyInput(billReminderDate?.value);
  if (!dueDate) return null;

  const today = getTodayDateOnly();
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const daysUntilDue = Math.round((dueDate.getTime() - today.getTime()) / millisecondsPerDay);
  const amount = Math.max(0, parseNumberLike(billReminderAmount?.value));
  const name = billReminderName?.value.trim().replace(/\s+/g, " ") || "Bill";
  const weeksUntilDue = Math.max(1, daysUntilDue / 7);
  const weeklyAmount = daysUntilDue > 0 ? amount / weeksUntilDue : amount;

  return {
    name,
    amount,
    dueDate,
    daysUntilDue,
    weeklyAmount,
    target: formatLongDate(dueDate),
  };
}

function updateBillReminder() {
  if (!billReminderDays || !billReminderWeekly || !billReminderTarget) return;
  const summary = getBillReminderSummary();
  if (!summary) {
    billReminderDays.textContent = "—";
    billReminderWeekly.textContent = "—";
    billReminderTarget.textContent = "—";
    setBillReminderStatus("Choose a due date first.");
    return;
  }

  if (summary.daysUntilDue === 0) {
    billReminderDays.textContent = "Today";
    setBillReminderStatus(`${summary.name} is due today.`);
  } else if (summary.daysUntilDue > 0) {
    billReminderDays.textContent = formatDayLabel(summary.daysUntilDue);
    setBillReminderStatus("Useful for rent, utilities, subscriptions, and annual renewals.");
  } else {
    billReminderDays.textContent = `${formatDayLabel(Math.abs(summary.daysUntilDue))} ago`;
    setBillReminderStatus(`${summary.name} is past due.`);
  }

  billReminderWeekly.textContent = currency.format(summary.weeklyAmount);
  billReminderTarget.textContent = summary.target;
}

async function copyBillReminder() {
  const summary = getBillReminderSummary();
  if (!summary) {
    setBillReminderStatus("Choose a due date first.");
    return;
  }

  const dueText =
    summary.daysUntilDue === 0
      ? "due today"
      : summary.daysUntilDue > 0
        ? `due in ${formatDayLabel(summary.daysUntilDue)}`
        : `${formatDayLabel(Math.abs(summary.daysUntilDue))} past due`;
  const text =
    `${summary.name}: ${currency.format(summary.amount)} ${dueText} (${summary.target}). ` +
    `Set aside about ${currency.format(summary.weeklyAmount)} per week.`;

  try {
    await navigator.clipboard.writeText(text);
    setBillReminderStatus("Copied.");
  } catch {
    setBillReminderStatus("Copy did not work in this browser.");
  }
}

function initBillReminder() {
  if (!billReminderName || !billReminderAmount || !billReminderDate) return;
  if (!billReminderDate.value) {
    billReminderDate.value = formatIsoDate(addDays(getTodayDateOnly(), 14));
  }

  [billReminderName, billReminderAmount, billReminderDate].forEach((control) => {
    control.addEventListener("input", updateBillReminder);
    control.addEventListener("change", updateBillReminder);
  });
  if (billReminderCopyButton) billReminderCopyButton.addEventListener("click", copyBillReminder);
  updateBillReminder();
}

function setSavingsGoalStatus(message) {
  if (!savingsGoalStatus) return;
  savingsGoalStatus.textContent = message;
}

function getSavingsGoalSummary() {
  const targetAmount = Math.max(0, parseNumberLike(savingsTargetAmount?.value));
  const alreadySaved = Math.max(0, parseNumberLike(savingsAlreadySaved?.value));
  const remaining = Math.max(0, targetAmount - alreadySaved);
  const targetDate = parseDateOnlyInput(savingsTargetDate?.value);
  const today = getTodayDateOnly();
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const daysUntilTarget = targetDate ? Math.round((targetDate.getTime() - today.getTime()) / millisecondsPerDay) : 0;
  const weeksUntilTarget = Math.max(1, daysUntilTarget / 7);
  const monthsUntilTarget = Math.max(1, daysUntilTarget / 30.4375);
  const name = savingsGoalName?.value.trim().replace(/\s+/g, " ") || "Savings goal";

  return {
    name,
    targetAmount,
    alreadySaved,
    remaining,
    targetDate,
    daysUntilTarget,
    weeklyAmount: remaining / weeksUntilTarget,
    monthlyAmount: remaining / monthsUntilTarget,
  };
}

function updateSavingsGoal() {
  if (!savingsRemainingResult || !savingsWeeklyResult || !savingsMonthlyResult) return;
  const summary = getSavingsGoalSummary();

  savingsRemainingResult.textContent = currency.format(summary.remaining);
  savingsWeeklyResult.textContent = currency.format(summary.weeklyAmount);
  savingsMonthlyResult.textContent = currency.format(summary.monthlyAmount);

  if (!summary.targetDate) {
    setSavingsGoalStatus("Choose a target date first.");
    return;
  }

  if (summary.remaining === 0) {
    setSavingsGoalStatus(`${summary.name} is already fully funded.`);
    return;
  }

  if (summary.daysUntilTarget < 0) {
    setSavingsGoalStatus(`${summary.name} target date has passed.`);
    return;
  }

  if (summary.daysUntilTarget === 0) {
    setSavingsGoalStatus(`${summary.name} target date is today.`);
    return;
  }

  setSavingsGoalStatus(`Goal date is in ${formatDayLabel(summary.daysUntilTarget)}.`);
}

async function copySavingsGoal() {
  const summary = getSavingsGoalSummary();
  if (!summary.targetDate) {
    setSavingsGoalStatus("Choose a target date first.");
    return;
  }

  const dateText = formatLongDate(summary.targetDate);
  const text =
    `${summary.name}: save ${currency.format(summary.remaining)} more by ${dateText}. ` +
    `Target: ${currency.format(summary.targetAmount)}. Already saved: ${currency.format(summary.alreadySaved)}. ` +
    `Set aside about ${currency.format(summary.weeklyAmount)} per week or ${currency.format(summary.monthlyAmount)} per month.`;

  try {
    await navigator.clipboard.writeText(text);
    setSavingsGoalStatus("Copied.");
  } catch {
    setSavingsGoalStatus("Copy did not work in this browser.");
  }
}

function initSavingsGoal() {
  if (!savingsGoalName || !savingsTargetAmount || !savingsAlreadySaved || !savingsTargetDate) return;
  if (!savingsTargetDate.value) {
    savingsTargetDate.value = formatIsoDate(addDays(getTodayDateOnly(), 70));
  }

  [savingsGoalName, savingsTargetAmount, savingsAlreadySaved, savingsTargetDate].forEach((control) => {
    control.addEventListener("input", updateSavingsGoal);
    control.addEventListener("change", updateSavingsGoal);
  });
  if (savingsGoalCopyButton) savingsGoalCopyButton.addEventListener("click", copySavingsGoal);
  updateSavingsGoal();
}

function setUnitPriceStatus(message) {
  if (!unitPriceStatus) return;
  unitPriceStatus.textContent = message;
}

function getUnitPriceUnitLabel() {
  const value = unitPriceUnit?.value || "item";
  const labels = {
    item: "item",
    oz: "oz",
    lb: "lb",
    g: "g",
    ml: "ml",
  };
  return labels[value] || value;
}

function getUnitPriceSummary() {
  const aPrice = Math.max(0, parseNumberLike(unitPriceAPrice?.value));
  const aAmount = Math.max(0, parseNumberLike(unitPriceAAmount?.value));
  const bPrice = Math.max(0, parseNumberLike(unitPriceBPrice?.value));
  const bAmount = Math.max(0, parseNumberLike(unitPriceBAmount?.value));
  const aUnitPrice = aAmount > 0 ? aPrice / aAmount : null;
  const bUnitPrice = bAmount > 0 ? bPrice / bAmount : null;
  const unit = getUnitPriceUnitLabel();

  return {
    aPrice,
    aAmount,
    aUnitPrice,
    bPrice,
    bAmount,
    bUnitPrice,
    unit,
  };
}

function formatUnitPrice(value, unit) {
  if (!Number.isFinite(value)) return "—";
  return `${currency.format(value)}/${unit}`;
}

function getUnitPriceWinner(summary) {
  if (!Number.isFinite(summary.aUnitPrice) || !Number.isFinite(summary.bUnitPrice)) return "—";
  if (Math.abs(summary.aUnitPrice - summary.bUnitPrice) < 0.0001) return "Tie";
  return summary.aUnitPrice < summary.bUnitPrice ? "A" : "B";
}

function updateUnitPriceCompare() {
  if (!unitPriceBetterResult || !unitPriceAResult || !unitPriceBResult) return;
  const summary = getUnitPriceSummary();
  const winner = getUnitPriceWinner(summary);

  unitPriceAResult.textContent = formatUnitPrice(summary.aUnitPrice, summary.unit);
  unitPriceBResult.textContent = formatUnitPrice(summary.bUnitPrice, summary.unit);
  unitPriceBetterResult.textContent = winner;

  if (winner === "—") {
    setUnitPriceStatus("Enter both package amounts to compare.");
    return;
  }

  if (winner === "Tie") {
    setUnitPriceStatus("Same unit price.");
    return;
  }

  const cheaper = winner === "A" ? summary.aUnitPrice : summary.bUnitPrice;
  const pricier = winner === "A" ? summary.bUnitPrice : summary.aUnitPrice;
  const savingsPercent = pricier > 0 ? ((pricier - cheaper) / pricier) * 100 : 0;
  setUnitPriceStatus(`${winner} is cheaper by about ${formatNumber(savingsPercent, 0)}%.`);
}

async function copyUnitPriceResult() {
  const summary = getUnitPriceSummary();
  const winner = getUnitPriceWinner(summary);
  if (winner === "—") {
    setUnitPriceStatus("Enter both package amounts to compare.");
    return;
  }

  const text =
    `A: ${currency.format(summary.aPrice)} for ${formatNumber(summary.aAmount, 2)} ${summary.unit} ` +
    `(${formatUnitPrice(summary.aUnitPrice, summary.unit)}). ` +
    `B: ${currency.format(summary.bPrice)} for ${formatNumber(summary.bAmount, 2)} ${summary.unit} ` +
    `(${formatUnitPrice(summary.bUnitPrice, summary.unit)}). ` +
    `Better buy: ${winner}.`;

  try {
    await navigator.clipboard.writeText(text);
    setUnitPriceStatus("Copied.");
  } catch {
    setUnitPriceStatus("Copy did not work in this browser.");
  }
}

function initUnitPriceCompare() {
  if (!unitPriceUnit || !unitPriceAPrice || !unitPriceAAmount || !unitPriceBPrice || !unitPriceBAmount) return;
  [unitPriceUnit, unitPriceAPrice, unitPriceAAmount, unitPriceBPrice, unitPriceBAmount].forEach((control) => {
    control.addEventListener("input", updateUnitPriceCompare);
    control.addEventListener("change", updateUnitPriceCompare);
  });
  if (unitPriceCopyButton) unitPriceCopyButton.addEventListener("click", copyUnitPriceResult);
  updateUnitPriceCompare();
}

function setFeeStatus(message) {
  if (!feeStatus) return;
  feeStatus.textContent = message;
}

function getFeeSummary() {
  const salePrice = Math.max(0, parseNumberLike(feeSalePrice?.value));
  const percent = Math.max(0, parseNumberLike(feePercent?.value));
  const fixedFee = Math.max(0, parseNumberLike(feeFixedAmount?.value));
  const costs = Math.max(0, parseNumberLike(feeCosts?.value));
  const percentageFee = salePrice * (percent / 100);
  const totalCosts = Math.min(salePrice, percentageFee + fixedFee + costs);
  const net = Math.max(0, salePrice - totalCosts);
  const keepRate = salePrice > 0 ? (net / salePrice) * 100 : 0;

  return {
    salePrice,
    percent,
    fixedFee,
    costs,
    percentageFee,
    totalCosts,
    net,
    keepRate,
  };
}

function updateFeeCalculator() {
  if (!feeNetResult || !feeTotalCostsResult || !feeKeepRateResult) return;
  const summary = getFeeSummary();

  feeNetResult.textContent = currency.format(summary.net);
  feeTotalCostsResult.textContent = currency.format(summary.totalCosts);
  feeKeepRateResult.textContent = `${formatNumber(summary.keepRate, 1)}%`;

  if (summary.salePrice === 0) {
    setFeeStatus("Enter a sale price first.");
    return;
  }

  if (summary.totalCosts >= summary.salePrice) {
    setFeeStatus("Fees and costs use the full sale price.");
    return;
  }

  setFeeStatus("Useful before listing, invoicing, or quoting a small job.");
}

async function copyFeeEstimate() {
  const summary = getFeeSummary();
  if (summary.salePrice === 0) {
    setFeeStatus("Enter a sale price first.");
    return;
  }

  const text =
    `${currency.format(summary.salePrice)} sale with ${formatNumber(summary.percent, 1)}% fee, ` +
    `${currency.format(summary.fixedFee)} fixed fee, and ${currency.format(summary.costs)} costs. ` +
    `You keep ${currency.format(summary.net)} after ${currency.format(summary.totalCosts)} in fees/costs ` +
    `(${formatNumber(summary.keepRate, 1)}%).`;

  try {
    await navigator.clipboard.writeText(text);
    setFeeStatus("Copied.");
  } catch {
    setFeeStatus("Copy did not work in this browser.");
  }
}

function initFeeCalculator() {
  if (!feeSalePrice || !feePercent || !feeFixedAmount || !feeCosts) return;
  [feeSalePrice, feePercent, feeFixedAmount, feeCosts].forEach((control) => {
    control.addEventListener("input", updateFeeCalculator);
  });
  if (feeCopyButton) feeCopyButton.addEventListener("click", copyFeeEstimate);
  updateFeeCalculator();
}

function setFuelStatus(message) {
  if (!fuelStatus) return;
  fuelStatus.textContent = message;
}

function getFuelSummary() {
  const miles = Math.max(0, parseNumberLike(fuelMiles?.value));
  const mpg = Math.max(1, parseNumberLike(fuelMpg?.value) || 1);
  const price = Math.max(0, parseNumberLike(fuelPrice?.value));
  const gallons = miles / mpg;
  const cost = gallons * price;

  return {
    miles,
    mpg,
    price,
    gallons,
    cost,
  };
}

function updateFuelCost() {
  if (!fuelMiles || !fuelMpg || !fuelPrice || !fuelCostResult || !fuelGallonsResult) return;
  const summary = getFuelSummary();

  fuelCostResult.textContent = currency.format(summary.cost);
  fuelGallonsResult.textContent = `${formatNumber(summary.gallons, 1)} gal`;
  setFuelStatus("Helpful for errands, commutes, and road trips.");
}

async function copyFuelCostResult() {
  if (!fuelMiles || !fuelMpg || !fuelPrice) return;
  const summary = getFuelSummary();
  const text =
    `${formatNumber(summary.miles, 1)} miles at ${formatNumber(summary.mpg, 1)} mpg with gas at ${currency.format(summary.price)}/gal. ` +
    `Estimated fuel: ${formatNumber(summary.gallons, 1)} gal, ${currency.format(summary.cost)}.`;

  try {
    await navigator.clipboard.writeText(text);
    setFuelStatus("Copied.");
  } catch {
    setFuelStatus("Copy did not work in this browser.");
  }
}

function initFuelCost() {
  if (!fuelMiles || !fuelMpg || !fuelPrice) return;
  [fuelMiles, fuelMpg, fuelPrice].forEach((control) => {
    control.addEventListener("input", updateFuelCost);
  });
  if (fuelCopyButton) fuelCopyButton.addEventListener("click", copyFuelCostResult);
  updateFuelCost();
}

function setRecipeStatus(message) {
  if (!recipeStatus) return;
  recipeStatus.textContent = message;
}

function formatRecipeAmount(value) {
  if (!Number.isFinite(value)) return "—";
  const rounded = Math.round(value * 100) / 100;
  if (Number.isInteger(rounded)) return String(rounded);
  return rounded.toLocaleString("en-US", {
    maximumFractionDigits: 2,
  });
}

function getRecipeSummary() {
  const originalServings = Math.max(0.5, parseNumberLike(recipeOriginalServings?.value) || 0.5);
  const neededServings = Math.max(0.5, parseNumberLike(recipeNeededServings?.value) || 0.5);
  const ingredientAmount = Math.max(0, parseNumberLike(recipeIngredientAmount?.value));
  const unit = recipeIngredientUnit?.value.trim().replace(/\s+/g, " ") || "units";
  const multiplier = neededServings / originalServings;
  const scaledAmount = ingredientAmount * multiplier;

  return {
    originalServings,
    neededServings,
    ingredientAmount,
    unit,
    multiplier,
    scaledAmount,
  };
}

function updateRecipeScaler() {
  if (!recipeScaledAmountResult || !recipeMultiplierResult) return;
  const summary = getRecipeSummary();

  recipeScaledAmountResult.textContent = `${formatRecipeAmount(summary.scaledAmount)} ${summary.unit}`;
  recipeMultiplierResult.textContent = `${formatRecipeAmount(summary.multiplier)}×`;
  setRecipeStatus("Useful for cooking, baking, and meal prep.");
}

function setRecipeNeededServings(value) {
  if (!recipeNeededServings) return;
  recipeNeededServings.value = formatRecipeAmount(Math.max(0.5, value));
  updateRecipeScaler();
}

async function copyRecipeResult() {
  const summary = getRecipeSummary();
  const text =
    `${formatRecipeAmount(summary.ingredientAmount)} ${summary.unit} for ${formatRecipeAmount(summary.originalServings)} servings ` +
    `becomes ${formatRecipeAmount(summary.scaledAmount)} ${summary.unit} for ${formatRecipeAmount(summary.neededServings)} servings ` +
    `(${formatRecipeAmount(summary.multiplier)}x).`;

  try {
    await navigator.clipboard.writeText(text);
    setRecipeStatus("Copied.");
  } catch {
    setRecipeStatus("Copy did not work in this browser.");
  }
}

function initRecipeScaler() {
  if (!recipeOriginalServings || !recipeNeededServings || !recipeIngredientAmount || !recipeIngredientUnit) return;

  [recipeOriginalServings, recipeNeededServings, recipeIngredientAmount, recipeIngredientUnit].forEach((control) => {
    control.addEventListener("input", updateRecipeScaler);
  });
  if (recipeHalveButton) recipeHalveButton.addEventListener("click", () => setRecipeNeededServings(getRecipeSummary().originalServings / 2));
  if (recipeDoubleButton) recipeDoubleButton.addEventListener("click", () => setRecipeNeededServings(getRecipeSummary().originalServings * 2));
  if (recipeCopyButton) recipeCopyButton.addEventListener("click", copyRecipeResult);
  updateRecipeScaler();
}

function setLeftoverStatus(message) {
  if (!leftoverStatus) return;
  leftoverStatus.textContent = message;
}

function getLeftoverSummary() {
  const portions = Math.max(0, parseNumberLike(leftoverPortions?.value));
  const people = Math.max(1, Math.floor(parseNumberLike(leftoverPeople?.value) || 1));
  const portionsPerPerson = Math.max(0.25, parseNumberLike(leftoverPortionsPerPerson?.value) || 1);
  const useDays = Math.max(1, Math.floor(parseNumberLike(leftoverUseDays?.value) || 1));
  const portionsPerMeal = people * portionsPerPerson;
  const meals = portionsPerMeal > 0 ? portions / portionsPerMeal : 0;
  const useByDate = addDays(getTodayDateOnly(), useDays);
  const mealsPerDay = meals / useDays;

  return {
    portions,
    people,
    portionsPerPerson,
    useDays,
    portionsPerMeal,
    meals,
    useByDate,
    mealsPerDay,
  };
}

function formatMealCount(value) {
  if (!Number.isFinite(value)) return "0 meals";
  const rounded = Math.floor(value * 10) / 10;
  const label = rounded === 1 ? "meal" : "meals";
  return `${formatNumber(rounded, 1)} ${label}`;
}

function getLeftoverPlan(summary) {
  if (summary.portions === 0) return "Add portions first";
  if (summary.meals < 1) return "Snack or combine with another meal";
  if (summary.mealsPerDay <= 1) return "Eat 1 meal per day";
  return `Eat or freeze ${formatMealCount(summary.meals - summary.useDays)}`;
}

function updateLeftoverPlanner() {
  if (!leftoverMealsResult || !leftoverUseByResult || !leftoverPlanResult) return;
  const summary = getLeftoverSummary();

  leftoverMealsResult.textContent = formatMealCount(summary.meals);
  leftoverUseByResult.textContent = formatLongDate(summary.useByDate);
  leftoverPlanResult.textContent = getLeftoverPlan(summary);

  if (summary.portions === 0) {
    setLeftoverStatus("Enter leftover portions first.");
    return;
  }

  if (summary.meals < 1) {
    setLeftoverStatus("There is not enough for a full meal with these settings.");
    return;
  }

  setLeftoverStatus("Useful after cooking, takeout, and meal prep.");
}

async function copyLeftoverPlan() {
  const summary = getLeftoverSummary();
  if (summary.portions === 0) {
    setLeftoverStatus("Enter leftover portions first.");
    return;
  }

  const text =
    `${formatNumber(summary.portions, 1)} leftover portions for ${summary.people} people ` +
    `at ${formatNumber(summary.portionsPerPerson, 2)} portion${summary.portionsPerPerson === 1 ? "" : "s"} each. ` +
    `Covers about ${formatMealCount(summary.meals)}. Use by ${formatLongDate(summary.useByDate)}. ` +
    `${getLeftoverPlan(summary)}.`;

  try {
    await navigator.clipboard.writeText(text);
    setLeftoverStatus("Copied.");
  } catch {
    setLeftoverStatus("Copy did not work in this browser.");
  }
}

function initLeftoverPlanner() {
  if (!leftoverPortions || !leftoverPeople || !leftoverPortionsPerPerson || !leftoverUseDays) return;
  [leftoverPortions, leftoverPeople, leftoverPortionsPerPerson, leftoverUseDays].forEach((control) => {
    control.addEventListener("input", updateLeftoverPlanner);
  });
  if (leftoverCopyButton) leftoverCopyButton.addEventListener("click", copyLeftoverPlan);
  updateLeftoverPlanner();
}

function setWaterStatus(message) {
  if (!waterStatus) return;
  waterStatus.textContent = message;
}

function getWaterSummary() {
  const weight = Math.max(1, parseNumberLike(waterWeight?.value) || 1);
  const activeMinutes = Math.max(0, parseNumberLike(waterActivityMinutes?.value));
  const bottleSize = Math.max(1, parseNumberLike(waterBottleSize?.value) || 16.9);
  const ounces = weight * 0.5 + activeMinutes * 0.4;
  const cups = ounces / 8;
  const bottles = ounces / bottleSize;

  return {
    weight,
    activeMinutes,
    bottleSize,
    ounces,
    cups,
    bottles,
  };
}

function updateWaterPlanner() {
  if (!waterDailyResult || !waterCupsResult || !waterBottlesResult) return;
  const summary = getWaterSummary();

  waterDailyResult.textContent = `${formatNumber(summary.ounces, 0)} oz`;
  waterCupsResult.textContent = `${formatNumber(summary.cups, 1)} cups`;
  waterBottlesResult.textContent = `${formatNumber(summary.bottles, 1)} bottles`;
  setWaterStatus("A simple planning estimate, not medical advice.");
}

async function copyWaterTarget() {
  const summary = getWaterSummary();
  const text =
    `Daily water target: about ${formatNumber(summary.ounces, 0)} oz, ` +
    `${formatNumber(summary.cups, 1)} cups, or ${formatNumber(summary.bottles, 1)} bottles ` +
    `(${formatNumber(summary.bottleSize, 1)} oz each).`;

  try {
    await navigator.clipboard.writeText(text);
    setWaterStatus("Copied.");
  } catch {
    setWaterStatus("Copy did not work in this browser.");
  }
}

function initWaterPlanner() {
  if (!waterWeight || !waterActivityMinutes || !waterBottleSize) return;
  [waterWeight, waterActivityMinutes, waterBottleSize].forEach((control) => {
    control.addEventListener("input", updateWaterPlanner);
    control.addEventListener("change", updateWaterPlanner);
  });
  if (waterCopyButton) waterCopyButton.addEventListener("click", copyWaterTarget);
  updateWaterPlanner();
}

function setTimeBuddyStatus(message) {
  if (!timeBuddyStatus) return;
  timeBuddyStatus.textContent = message;
}

function formatDateTimeLocalValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

function getRoundedCurrentDateTime() {
  const now = new Date();
  now.setSeconds(0, 0);
  const roundedMinutes = Math.ceil(now.getMinutes() / 15) * 15;
  now.setMinutes(roundedMinutes);
  return now;
}

function formatTimeBuddyDate(date, options = {}) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    ...options,
  }).format(date);
}

function getTimeBuddySummary() {
  const selectedDate = timeBuddyLocalTime?.value ? new Date(timeBuddyLocalTime.value) : null;
  if (!selectedDate || Number.isNaN(selectedDate.getTime())) return null;

  const zone = timeBuddyZone?.value || "America/New_York";
  const zoneLabel = timeBuddyZone?.selectedOptions?.[0]?.textContent || zone;
  const remoteTime = formatTimeBuddyDate(selectedDate, { timeZone: zone });
  const remoteDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: zone,
  }).format(selectedDate);

  return {
    zoneLabel,
    localTime: formatTimeBuddyDate(selectedDate),
    remoteTime,
    remoteDate,
  };
}

function updateTimeBuddy() {
  if (!timeBuddyLocalResult || !timeBuddyRemoteResult || !timeBuddyDateResult) return;
  const summary = getTimeBuddySummary();
  if (!summary) {
    timeBuddyLocalResult.textContent = "—";
    timeBuddyRemoteResult.textContent = "—";
    timeBuddyDateResult.textContent = "—";
    setTimeBuddyStatus("Choose a meeting time first.");
    return;
  }

  timeBuddyLocalResult.textContent = summary.localTime;
  timeBuddyRemoteResult.textContent = summary.remoteTime;
  timeBuddyDateResult.textContent = summary.remoteDate;
  setTimeBuddyStatus(`Showing ${summary.zoneLabel}.`);
}

function setTimeBuddyToNow() {
  if (!timeBuddyLocalTime) return;
  timeBuddyLocalTime.value = formatDateTimeLocalValue(getRoundedCurrentDateTime());
  updateTimeBuddy();
  setTimeBuddyStatus("Updated to the next 15-minute mark.");
}

async function copyTimeBuddyResult() {
  const summary = getTimeBuddySummary();
  if (!summary) {
    setTimeBuddyStatus("Choose a meeting time first.");
    return;
  }

  const text = `Your time: ${summary.localTime}. ${summary.zoneLabel}: ${summary.remoteTime}.`;
  try {
    await navigator.clipboard.writeText(text);
    setTimeBuddyStatus("Copied.");
  } catch {
    setTimeBuddyStatus("Copy did not work in this browser.");
  }
}

function initTimeBuddy() {
  if (!timeBuddyLocalTime || !timeBuddyZone) return;
  if (!timeBuddyLocalTime.value) {
    timeBuddyLocalTime.value = formatDateTimeLocalValue(getRoundedCurrentDateTime());
  }
  timeBuddyLocalTime.addEventListener("input", updateTimeBuddy);
  timeBuddyLocalTime.addEventListener("change", updateTimeBuddy);
  timeBuddyZone.addEventListener("change", updateTimeBuddy);
  if (timeBuddyNowButton) timeBuddyNowButton.addEventListener("click", setTimeBuddyToNow);
  if (timeBuddyCopyButton) timeBuddyCopyButton.addEventListener("click", copyTimeBuddyResult);
  updateTimeBuddy();
}

function setLeaveStatus(message) {
  if (!leaveStatus) return;
  leaveStatus.textContent = message;
}

function formatShortDateTime(date) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

function getLeaveTimeSummary() {
  const arrival = leaveArrivalTime?.value ? new Date(leaveArrivalTime.value) : null;
  if (!arrival || Number.isNaN(arrival.getTime())) return null;

  const travelMinutes = Math.max(0, Math.floor(parseNumberLike(leaveTravelMinutes?.value)));
  const prepMinutes = Math.max(0, Math.floor(parseNumberLike(leavePrepMinutes?.value)));
  const bufferMinutes = Math.max(0, Math.floor(parseNumberLike(leaveBufferMinutes?.value)));
  const totalMinutes = travelMinutes + prepMinutes + bufferMinutes;
  const leaveBy = new Date(arrival.getTime() - (travelMinutes + bufferMinutes) * 60 * 1000);
  const startPrep = new Date(arrival.getTime() - totalMinutes * 60 * 1000);

  return {
    arrival,
    travelMinutes,
    prepMinutes,
    bufferMinutes,
    totalMinutes,
    leaveBy,
    startPrep,
  };
}

function updateLeaveTime() {
  if (!leaveByResult || !leaveStartPrepResult || !leaveTotalResult) return;
  const summary = getLeaveTimeSummary();
  if (!summary) {
    leaveByResult.textContent = "—";
    leaveStartPrepResult.textContent = "—";
    leaveTotalResult.textContent = "—";
    setLeaveStatus("Choose an arrival time first.");
    return;
  }

  leaveByResult.textContent = formatShortDateTime(summary.leaveBy);
  leaveStartPrepResult.textContent = formatShortDateTime(summary.startPrep);
  leaveTotalResult.textContent = `${summary.totalMinutes.toLocaleString()} min`;
  setLeaveStatus("Useful before appointments, errands, and commute plans.");
}

function setLeaveArrivalToNextHour() {
  if (!leaveArrivalTime) return;
  const next = new Date();
  next.setSeconds(0, 0);
  next.setHours(next.getHours() + 1);
  leaveArrivalTime.value = formatDateTimeLocalValue(next);
  updateLeaveTime();
  setLeaveStatus("Arrival set to one hour from now.");
}

async function copyLeaveTimePlan() {
  const summary = getLeaveTimeSummary();
  if (!summary) {
    setLeaveStatus("Choose an arrival time first.");
    return;
  }

  const text =
    `Arrive by ${formatShortDateTime(summary.arrival)}. ` +
    `Leave by ${formatShortDateTime(summary.leaveBy)}; start getting ready by ${formatShortDateTime(summary.startPrep)}. ` +
    `Includes ${summary.travelMinutes} min travel, ${summary.prepMinutes} min getting ready, and ${summary.bufferMinutes} min buffer.`;

  try {
    await navigator.clipboard.writeText(text);
    setLeaveStatus("Copied.");
  } catch {
    setLeaveStatus("Copy did not work in this browser.");
  }
}

function initLeaveTime() {
  if (!leaveArrivalTime || !leaveTravelMinutes || !leavePrepMinutes || !leaveBufferMinutes) return;
  if (!leaveArrivalTime.value) {
    const defaultArrival = getRoundedCurrentDateTime();
    defaultArrival.setHours(defaultArrival.getHours() + 2);
    leaveArrivalTime.value = formatDateTimeLocalValue(defaultArrival);
  }

  [leaveArrivalTime, leaveTravelMinutes, leavePrepMinutes, leaveBufferMinutes].forEach((control) => {
    control.addEventListener("input", updateLeaveTime);
    control.addEventListener("change", updateLeaveTime);
  });
  if (leaveNowButton) leaveNowButton.addEventListener("click", setLeaveArrivalToNextHour);
  if (leaveCopyButton) leaveCopyButton.addEventListener("click", copyLeaveTimePlan);
  updateLeaveTime();
}

saveFocusButton.addEventListener("click", () => {
  const values = focusInputs.map((input) => input.value.trim());
  localStorage.setItem("dailyFocus", JSON.stringify(values));
  focusStatus.textContent = "Saved.";
  updateFocusActions();
});

focusInputs.forEach((input) => {
  input.addEventListener("input", () => {
    focusStatus.textContent = "";
    updateFocusActions();
  });
});

if (copyFocusButton) {
  copyFocusButton.addEventListener("click", async () => {
    const text = buildFocusText();
    if (!text) {
      focusStatus.textContent = "Add a focus item first.";
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
      focusStatus.textContent = "Copied.";
    } catch {
      focusStatus.textContent = "Copy did not work in this browser.";
    }
  });
}

if (downloadFocusButton) {
  downloadFocusButton.addEventListener("click", () => {
    const text = buildFocusText();
    if (!text) {
      focusStatus.textContent = "Add a focus item first.";
      return;
    }
    const today = new Date().toISOString().slice(0, 10);
    downloadTextFile(text + "\n", `everyday-focus-${today}.txt`);
    focusStatus.textContent = "Downloaded.";
  });
}

clearFocusButton.addEventListener("click", () => {
  focusInputs.forEach((input) => {
    input.value = "";
  });
  localStorage.removeItem("dailyFocus");
  focusStatus.textContent = "Cleared.";
  updateFocusActions();
});

function setNextStepStatus(message) {
  if (!nextStepStatus) return;
  nextStepStatus.textContent = message;
}

function hasNextStepSuggestion() {
  const text = nextStepResult?.textContent.trim() || "";
  return Boolean(text) && text !== "—";
}

function updateNextStepActions() {
  const hasSuggestion = hasNextStepSuggestion();
  if (nextStepCopyButton) nextStepCopyButton.disabled = !hasSuggestion;
  if (nextStepClearButton) nextStepClearButton.disabled = !hasSuggestion;
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
  updateNextStepActions();
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

function useNextStepExample() {
  if (!nextStepTime || !nextStepEnergy || !nextStepContext) return;
  nextStepTime.value = "15";
  nextStepEnergy.value = "low";
  nextStepContext.value = "home";
  runNextStepSuggestion();
  setNextStepStatus("Example suggestion added.");
}

function clearNextStepSuggestion() {
  if (nextStepTime) nextStepTime.value = "15";
  if (nextStepEnergy) nextStepEnergy.value = "medium";
  if (nextStepContext) nextStepContext.value = "desk";
  if (nextStepResult) nextStepResult.textContent = "—";
  setNextStepStatus("Cleared.");
  updateNextStepActions();
  nextStepButton?.focus();
}

function initNextStepTool() {
  if (!nextStepButton || !nextStepTime || !nextStepEnergy || !nextStepContext) return;
  if (nextStepSampleButton) nextStepSampleButton.addEventListener("click", useNextStepExample);
  nextStepButton.addEventListener("click", runNextStepSuggestion);
  if (nextStepCopyButton) nextStepCopyButton.addEventListener("click", copyNextStepSuggestion);
  if (nextStepClearButton) nextStepClearButton.addEventListener("click", clearNextStepSuggestion);
  [nextStepTime, nextStepEnergy, nextStepContext].forEach((control) => {
    control.addEventListener("change", () => {
      if (nextStepResult) nextStepResult.textContent = "—";
      setNextStepStatus("");
      updateNextStepActions();
    });
  });
  updateNextStepActions();
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

  if (groceryItems.length === 0) {
    const empty = document.createElement("li");
    empty.className = "checklist-empty";
    empty.textContent = "No groceries yet. Add the first item above.";
    groceryList.append(empty);
  }

  groceryItems.forEach((item) => {
    const li = document.createElement("li");
    li.className = "checklist-item";

    const label = document.createElement("label");
    label.className = "checklist-label";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "groceryListItem";
    checkbox.checked = item.checked;
    checkbox.dataset.id = item.id;

    const text = document.createElement("span");
    text.textContent = item.label;

    label.append(checkbox, text);
    li.append(label);
    groceryList.append(li);
  });

  const hasItems = groceryItems.length > 0;
  const hasCheckedItems = groceryItems.some((item) => item.checked);
  if (groceryCopyButton) groceryCopyButton.disabled = !hasItems;
  if (groceryDownloadButton) groceryDownloadButton.disabled = !hasItems;
  if (groceryClearAllButton) groceryClearAllButton.disabled = !hasItems;
  if (groceryClearCheckedButton) groceryClearCheckedButton.disabled = !hasCheckedItems;
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

function buildGroceryListText() {
  return groceryItems
    .map((item) => `${item.checked ? "[x]" : "[ ]"} ${item.label}`)
    .join("\n");
}

async function copyGroceryList() {
  const text = buildGroceryListText();
  if (!text) {
    setGroceryStatus("Add at least 1 item first.");
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
    setGroceryStatus("Copied.");
  } catch {
    setGroceryStatus("Copy did not work in this browser.");
  }
}

function downloadGroceryList() {
  const text = buildGroceryListText();
  if (!text) {
    setGroceryStatus("Add at least 1 item first.");
    return;
  }
  const today = new Date().toISOString().slice(0, 10);
  downloadTextFile(text + "\n", `everyday-grocery-list-${today}.txt`);
  setGroceryStatus("Downloaded.");
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
    renderGroceryList();
    setGroceryStatus("Saved in this browser.");
  });

  groceryAddButton.addEventListener("click", () => addGroceryItem(groceryNewItem.value));
  groceryNewItem.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    addGroceryItem(groceryNewItem.value);
  });

  if (groceryClearCheckedButton) groceryClearCheckedButton.addEventListener("click", clearCheckedGroceryItems);
  if (groceryCopyButton) groceryCopyButton.addEventListener("click", copyGroceryList);
  if (groceryDownloadButton) groceryDownloadButton.addEventListener("click", downloadGroceryList);
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

function updatePickerActions() {
  const hasItems = parsePickerItems(pickerItems?.value || "").length > 0;
  const hasResult = Boolean(pickerResult?.textContent.trim()) && pickerResult.textContent.trim() !== "—";
  if (pickerButton) pickerButton.disabled = !hasItems;
  if (pickerCopyButton) pickerCopyButton.disabled = !hasResult;
  if (pickerClearButton) pickerClearButton.disabled = !hasItems && !hasResult;
}

function runRandomPicker() {
  if (!pickerItems || !pickerResult) return;
  const items = parsePickerItems(pickerItems.value);
  if (items.length === 0) {
    pickerResult.textContent = "—";
    setPickerStatus("Add at least 1 option first.");
    updatePickerActions();
    return;
  }

  const index = getRandomIndex(items.length);
  const picked = items[Math.max(0, index)] || "";
  pickerResult.textContent = picked;
  setPickerStatus(`${items.length.toLocaleString()} option${items.length === 1 ? "" : "s"}.`);
  updatePickerActions();
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
if (pickerSampleButton && pickerItems) {
  pickerSampleButton.addEventListener("click", () => {
    pickerItems.value = "Pizza\nTacos\nSalad\nSoup";
    if (pickerResult) pickerResult.textContent = "—";
    setPickerStatus("Example added.");
    updatePickerActions();
    pickerItems.focus();
  });
}
if (pickerClearButton && pickerItems && pickerResult) {
  pickerClearButton.addEventListener("click", () => {
    pickerItems.value = "";
    pickerResult.textContent = "—";
    setPickerStatus("Cleared.");
    updatePickerActions();
    pickerItems.focus();
  });
}
if (pickerItems) {
  pickerItems.addEventListener("input", () => {
    if (pickerResult) pickerResult.textContent = "—";
    setPickerStatus("");
    updatePickerActions();
  });
}
updatePickerActions();

const quickNotesStorageKey = "quickNotesText";

function setQuickNotesStatus(message) {
  if (!quickNotesStatus) return;
  quickNotesStatus.textContent = message;
}

function getQuickNotesValue() {
  return quickNotesText?.value.trim() || "";
}

function updateQuickNotesActions() {
  const hasNotes = Boolean(getQuickNotesValue());
  if (quickNotesCopyButton) quickNotesCopyButton.disabled = !hasNotes;
  if (quickNotesDownloadButton) quickNotesDownloadButton.disabled = !hasNotes;
  if (quickNotesClearButton) quickNotesClearButton.disabled = !hasNotes;
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
  updateQuickNotesActions();

  let saveTimeout = null;
  quickNotesText.addEventListener("input", () => {
    updateQuickNotesActions();
    if (saveTimeout !== null) window.clearTimeout(saveTimeout);
    saveTimeout = window.setTimeout(() => {
      localStorage.setItem(quickNotesStorageKey, quickNotesText.value);
      setQuickNotesStatus("Saved in this browser.");
      saveTimeout = null;
    }, 250);
  });

  if (quickNotesCopyButton) {
    quickNotesCopyButton.addEventListener("click", async () => {
      const text = getQuickNotesValue();
      if (!text) {
        setQuickNotesStatus("Add some notes first.");
        return;
      }
      try {
        await navigator.clipboard.writeText(text);
        setQuickNotesStatus("Copied.");
      } catch {
        setQuickNotesStatus("Copy did not work in this browser.");
      }
    });
  }

  if (quickNotesClearButton) {
    quickNotesClearButton.addEventListener("click", () => {
      quickNotesText.value = "";
      localStorage.removeItem(quickNotesStorageKey);
      updateQuickNotesActions();
      setQuickNotesStatus("Cleared.");
      quickNotesText.focus();
    });
  }

  if (quickNotesDownloadButton) {
    quickNotesDownloadButton.addEventListener("click", () => {
      const text = getQuickNotesValue();
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

function hasPassphrase() {
  const text = passphraseResult?.textContent.trim() || "";
  return Boolean(text) && text !== "—";
}

function updatePassphraseActions() {
  const hasResult = hasPassphrase();
  if (passphraseCopyButton) passphraseCopyButton.disabled = !hasResult;
  if (passphraseClearButton) passphraseClearButton.disabled = !hasResult;
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
  updatePassphraseActions();
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

function clearPassphrase() {
  if (!passphraseResult) return;
  passphraseResult.textContent = "—";
  setPassphraseStatus("Cleared.");
  updatePassphraseActions();
  passphraseGenerateButton?.focus();
}

function initPassphrase() {
  if (!passphraseGenerateButton) return;
  passphraseGenerateButton.addEventListener("click", runPassphraseGenerator);
  if (passphraseCopyButton) passphraseCopyButton.addEventListener("click", copyPassphrase);
  if (passphraseClearButton) passphraseClearButton.addEventListener("click", clearPassphrase);
  [passphraseWordCount, passphraseSeparator, passphraseIncludeNumber].forEach((control) => {
    if (!control) return;
    control.addEventListener("change", () => {
      setPassphraseStatus("");
      updatePassphraseActions();
    });
  });
  updatePassphraseActions();
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
    checkbox.name = "habitDay";
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
    toolSearchQuickButtons.forEach((button) => {
      const isActive = Boolean(query) && normalizeSearchText(button.dataset.searchTerm || "") === query;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
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

  toolSearchQuickButtons.forEach((button) => {
    button.setAttribute("aria-pressed", "false");
    button.addEventListener("click", () => {
      toolSearch.value = button.dataset.searchTerm || "";
      updateSearch();
      toolSearch.focus();
    });
  });

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
initLaundryPlanner();
updateUnitConverter();
initPercentageHelper();
initPriceAfterDiscount();
initBudgetSplitter();
initPaycheckPlanner();
initBillReminder();
initSavingsGoal();
initUnitPriceCompare();
initFeeCalculator();
initFuelCost();
initRecipeScaler();
initLeftoverPlanner();
initWaterPlanner();
initTimeBuddy();
initLeaveTime();
initPackingChecklist();
initGroceryList();
initToolSearch();
initBackToTopButton();
initQuickNotes();
initPassphrase();
initHabitTracker();
initBackupRestore();
initMeetingNotesCleaner();
