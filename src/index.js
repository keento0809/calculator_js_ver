import { calculate, reset, display } from "./calculate.js";

// Get DOM
const calculateKeys = document.querySelectorAll(".calculateKey");
const marks = document.querySelectorAll(".mark");
const equalKey = document.querySelector("#equal");
const resetKey = document.querySelector("#reset");

// Define variable
let cal;

// Build out function
function appendKey() {
  checkMarks();
  console.log(this);
  cal === undefined ? (cal = this.value) : (cal += this.value);
  // if (this.classList.contains("mark")) this.value = convertMark(this.id);
  display.value += this.value;
  console.log(cal);
}

function convertMark(mark) {
  if (mark === "multiply") {
    return "✖️";
  } else if (mark === "plus") {
    return "➕";
  } else if (mark === "minus") {
    return "➖";
  } else if (mark === "divide") {
    return "➗";
  }
}

export const checkMarks = () => {
  marks.forEach((mark) => {
    if (mark.classList.contains("whiten")) mark.classList.remove("whiten");
  });
};

function highlight() {
  this.classList.add("whiten");
}

// Hook up the event
calculateKeys.forEach((calculateKey) =>
  calculateKey.addEventListener("click", appendKey)
);
marks.forEach((mark) => mark.addEventListener("click", highlight));
equalKey.addEventListener("click", calculate);
resetKey.addEventListener("click", reset);
