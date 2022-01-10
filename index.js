import { calculate } from "./calculate.js";
import { reset } from "./calculate.js";
import { display } from "./calculate.js";

// Get DOM
const calculateKeys = document.querySelectorAll(".calculateKey");
const marks = document.querySelectorAll(".mark");
const equalKey = document.querySelector("#equal");
const resetKey = document.querySelector("#reset");

// Build out function
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
