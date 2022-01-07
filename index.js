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

// Build out function
function mapArr(arr) {
  const html = arr
    .map((val) => {
      return `
          ${val}
        `;
    })
    .join("");
  console.log(html);
  return html;
}

function test(e) {
  e.preventDefault();
  screen.push(this.textContent);
  display.textContent = mapArr(screen);
  console.log(display.textContent);
}

function resetValue() {
  display.textContent = "";
  screen = [];
}

function calculate() {}

// Hook up the event
tds.forEach((td) => td.addEventListener("click", test));

reset.addEventListener("click", resetValue);
