import React from "react";
import logo from "./logo.svg";
import "./App.css";
import BasicStoreTest from "./component/basicStoreTest";

function App() {
  return (
    <div className="App">
      <BasicStoreTest />
    </div>
  );
}

    render() {
        return (
            <div className="App">
                <ArrowFunciton onClick={this.onClick} text="clickme"></ArrowFunciton>
                <TestState />
            </div>
        );
    }
}
