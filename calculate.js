export const display = document.querySelector("input");

const showResult = (val) => {
  display.value = val;
};

export const reset = () => {
  showResult("");
};

export const calculate = () => {
  const value = display.value;
  try {
    const func = new Function("return " + value);
    showResult(func().toString());
  } catch (err) {
    showResult(err);
  }
};
