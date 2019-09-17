import { createStore } from "redux";

const Store1 = createStore(reducer);

export default Store1;

const state = {
  name: "init",
  type: "I"
};

function reducer(state, action) {
  switch (action.type) {
    case "A":
      return { ...state, type: "A" };
    case "B":
      return { ...state, type: "B" };
    case "C":
      return { ...state, type: "C" };
    default:
      return { ...state };
  }
}
