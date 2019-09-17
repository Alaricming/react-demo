import { createStore } from "redux";

const initialState = {
  name: "init",
  type: "I"
};

const Store1 = createStore(reducer);

export default Store1;

function reducer(state = initialState, action) {
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
