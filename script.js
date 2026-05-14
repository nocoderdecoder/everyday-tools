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
const readingText = document.querySelector("#readingText");
const readingTimeResult = document.querySelector("#readingTimeResult");
const readingWordCount = document.querySelector("#readingWordCount");

todayDate.textContent = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  month: "short",
  day: "numeric",
}).format(new Date());

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

saveFocusButton.addEventListener("click", () => {
  const values = focusInputs.map((input) => input.value.trim());
  localStorage.setItem("dailyFocus", JSON.stringify(values));
});

clearFocusButton.addEventListener("click", () => {
  focusInputs.forEach((input) => {
    input.value = "";
  });
  localStorage.removeItem("dailyFocus");
});

loadFocus();
calculateSplit();
updateReadingTime();
