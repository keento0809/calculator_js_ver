// Get DOM
const calculateKeys = document.querySelectorAll(".calculateKey");
const display = document.querySelector("input");
const equalKey = document.querySelector("#equal");
const resetKey = document.querySelector("#reset");

// Build out function
function showResult(val) {
  display.value = val;
}

function appendKey() {
  console.log(this.value);
  display.value += this.value;
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

function reset() {
  showResult("");
}

// Hook up the event
calculateKeys.forEach((calculateKey) =>
  calculateKey.addEventListener("click", appendKey)
);
equalKey.addEventListener("click", calculate);
resetKey.addEventListener("click", reset);
