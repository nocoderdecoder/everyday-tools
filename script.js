const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const todayDate = document.querySelector("#todayDate");
const billTotal = document.querySelector("#billTotal");
const tipPercent = document.querySelector("#tipPercent");
const peopleCount = document.querySelector("#peopleCount");
const splitResult = document.querySelector("#splitResult");
const messyText = document.querySelector("#messyText");
const cleanTextButton = document.querySelector("#cleanTextButton");
const copyTextButton = document.querySelector("#copyTextButton");
const copyStatus = document.querySelector("#copyStatus");
const focusInputs = Array.from(document.querySelectorAll(".focus-input"));
const saveFocusButton = document.querySelector("#saveFocusButton");
const clearFocusButton = document.querySelector("#clearFocusButton");

todayDate.textContent = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  month: "short",
  day: "numeric",
}).format(new Date());

function calculateSplit() {
  const bill = Number(billTotal.value) || 0;
  const tip = Number(tipPercent.value) || 0;
  const people = Math.max(Number(peopleCount.value) || 1, 1);
  const total = bill + bill * (tip / 100);
  splitResult.textContent = currency.format(total / people);
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
