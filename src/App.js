import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";
import ArrowFunciton from "./components/arrowFunction";
import TestState from "./components/testSetState";

export default class extends Component {
    // constructor(props) {
    //     super(props);
    // }

    onClick = ({ msg }) => {
        console.log(msg);
    };

    render() {
        return (
            <div className="App">
                <ArrowFunciton onClick={this.onClick} text="clickme"></ArrowFunciton>
                <TestState />
            </div>
        );
    }
}
