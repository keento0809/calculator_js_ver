// Get DOM
const display = document.querySelector("#display");
const tds = document.querySelectorAll("td");

const reset = document.querySelector("#reset");
const divide = document.querySelector("#divide");
const multiply = document.querySelector("#multiply");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const equal = document.querySelector("#equal");

let screen = [];
let marks = [divide, multiply, minus, plus];

// Build out function
function mapArr(arr) {
  const html = arr
    .map((val) => {
      return `
          ${val}
        `;
    })
    .join("");
  return html;
}

function test(e) {
  e.preventDefault();
  screen.push(this.textContent);
  display.textContent = mapArr(screen);
}

function resetValue() {
  display.textContent = "";
  screen = [];
}

function calculate() {
  console.log("Mark clicked!");
  // let val1 = parseInt(display.textContent);
  // console.log(val1);
  // display.textContent = "";
  // let val2 = [];
  // val2.push();
}

function terminateCalculation() {
  console.log("Calculation done.");
}

// Hook up the event
tds.forEach((td) => td.addEventListener("click", test));
marks.forEach((mark) => mark.addEventListener("click", calculate));

reset.addEventListener("click", resetValue);
equal.addEventListener("click", terminateCalculation);
