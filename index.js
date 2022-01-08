// Get DOM
const calculateKeys = document.querySelectorAll(".calculateKey");
const marks = document.querySelectorAll(".mark");
const display = document.querySelector("input");
const equalKey = document.querySelector("#equal");
const resetKey = document.querySelector("#reset");

// Build out function
function showResult(val) {
  display.value = val;
}

function appendKey() {
  checkMarks();
  console.log(this);
  if (this.classList.contains("mark")) console.log("Contains mark!!");
  display.value += this.value;
}

function checkMarks() {
  marks.forEach((mark) => {
    if (mark.classList.contains("whiten")) mark.classList.remove("whiten");
  });
}

function calculate() {
  const value = display.value;
  try {
    const func = new Function("return " + value);
    showResult(func().toString());
  } catch (err) {
    showResult(err);
  }
}

function highlight() {
  this.classList.add("whiten");
}

function reset() {
  showResult("");
}

// Hook up the event
calculateKeys.forEach((calculateKey) =>
  calculateKey.addEventListener("click", appendKey)
);
marks.forEach((mark) => mark.addEventListener("click", highlight));
equalKey.addEventListener("click", calculate);
resetKey.addEventListener("click", reset);
