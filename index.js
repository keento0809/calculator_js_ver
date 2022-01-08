function update(_v) {
  document.querySelector("input").value = _v;
}

function append(_v) {
  document.querySelector("input").value += _v;
}

function calc() {
  const v = document.querySelector("input").value;
  try {
    const f = new Function("return " + v);
    update(f().toString());
  } catch (_error) {
    update(_error);
  }
}

// // Get DOM
// const display = document.querySelector("#display");
// const tds = document.querySelectorAll("td");
// const nums = document.querySelectorAll(".num");

// const reset = document.querySelector("#reset");
// const divide = document.querySelector("#divide");
// const multiply = document.querySelector("#multiply");
// const minus = document.querySelector("#minus");
// const plus = document.querySelector("#plus");
// const equal = document.querySelector("#equal");

// let screen = [];
// let final = [];
// let marks = [divide, multiply, minus, plus];

// // Build out function
// function mapArr(arr) {
//   const html = arr
//     .map((val) => {
//       return `
//           ${val}
//         `;
//     })
//     .join("");
//   return html;
// }

// function test(e) {
//   e.preventDefault();
//   screen.push(this.textContent);
//   display.textContent = mapArr(screen);
//   // console.log(screen);
// }

// function resetValue() {
//   display.textContent = "";
//   screen = [];
// }

// function calculate() {
//   console.log(this);
//   const val = screen.join("");
//   final.push(parseInt(val));
//   final.push(this.textContent);
//   screen = [];
// }

// function terminateCalculation() {
//   calculate();
//   console.log(final);
//   const result = final.join("");
//   display.textContent = result;
//   console.log(typeof result);
//   screen = [];
//   final = [];
// }

// // Hook up the event
// nums.forEach((num) => num.addEventListener("click", test));
// marks.forEach((mark) => mark.addEventListener("click", calculate));

// reset.addEventListener("click", resetValue);
// equal.addEventListener("click", terminateCalculation);

// // console.log(3 + 4 - (10 * 2) / 2 + 12);
// // console.log(typeof(+));
