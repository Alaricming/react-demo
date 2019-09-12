import React from "react";

const ArrowFunction = ({ onClick, text }) => <button onClick={() => onClick({ msg: "haha" })}>{text}</button>;

export default ArrowFunction;
