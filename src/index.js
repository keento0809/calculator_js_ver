import { display, showResult } from "./calculate.js";

// Get DOM
const calculateKeys = document.querySelectorAll(".calculateKey");
const marks = document.querySelectorAll(".mark");
const subMarks = document.querySelectorAll(".subMark");
const equalKey = document.querySelector("#equal");
const resetKey = document.querySelector("#reset");

// Define variable
let cal;
let markClicked = false;

// Build out function
function appendKey() {
  checkMarks();
  if (markClicked) display.value = "";
  cal === undefined ? (cal = this.value) : (cal += this.value);
  if (this.classList.contains("mark")) {
    markClicked = true;
    display.value += "";
  } else {
    markClicked = false;
    display.value += this.value;
  }
  console.log(cal);
}

function calculate() {
  // const value = display.value;
  const value = eval(cal);
  try {
    const func = new Function("return " + value);
    showResult(func().toString());
  } catch (err) {
    showResult(err);
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

function reset() {
  showResult("");
  cal = undefined;
  markClicked = false;
  checkMarks();
  console.log(cal);
}

// Hook up the event
calculateKeys.forEach((calculateKey) =>
  calculateKey.addEventListener("click", appendKey)
);
marks.forEach((mark) => mark.addEventListener("click", highlight));
subMarks.forEach((mark) => mark.addEventListener("click", calculate));

equalKey.addEventListener("click", calculate);
resetKey.addEventListener("click", reset);
