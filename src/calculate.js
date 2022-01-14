// import { checkMarks } from "./index.js";
export const display = document.querySelector("input");

export const showResult = (val) => {
  display.value = val;
};

export const reset = () => {
  showResult("");
};
