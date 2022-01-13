import { display, showResult } from "./calculate.js";

// Get DOM
const calculateKeys = document.querySelectorAll(".calculateKey");
const marks = document.querySelectorAll(".mark");
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
  if (this.classList.contains("mark")) this.value = convertMark(this.id);
  display.value += this.value;
  console.log(cal);
  markClicked = false;
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

function convertMark(mark) {
  // if (mark === "multiply") {
  //   return "✖️";
  // } else if (mark === "plus") {
  //   return "➕";
  // } else if (mark === "minus") {
  //   return "➖";
  // } else if (mark === "divide") {
  //   return "➗";
  // }
  if (
    mark === "multiply" ||
    mark === "plus" ||
    mark === "minus" ||
    mark === "divide"
  )
    return "";
}

export const checkMarks = () => {
  marks.forEach((mark) => {
    if (mark.classList.contains("whiten")) mark.classList.remove("whiten");
  });
};

function highlight() {
  this.classList.add("whiten");
  markClicked = true;
  // if (display.value !== "") display.value = "";
}

function reset() {
  showResult("");
  cal = undefined;
  markClicked = false;
}

// Hook up the event
calculateKeys.forEach((calculateKey) =>
  calculateKey.addEventListener("click", appendKey)
);
marks.forEach((mark) => mark.addEventListener("click", highlight));
equalKey.addEventListener("click", calculate);
resetKey.addEventListener("click", reset);

window.addEventListener("DOMContentLoaded", function () {
  const call = "9*3-2+1000";
  console.log(eval(call));
});
