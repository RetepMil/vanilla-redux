import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, { type }) => {
  switch (type) {
    case "ADD":
      return count + 1;
    case "MINUS":
      return count - 1;
    default:
      return count - 1;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

add.addEventListener("click", () => {
  countStore.dispatch({ type: ADD });
});
minus.addEventListener("click", () => {
  countStore.dispatch({ type: MINUS });
});
