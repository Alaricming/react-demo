import React, { Component } from "react";
import Store from "../store/store1";

export default class BasicStoreTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      type: undefined
    };
  }

  handleClick = () => {
    Store.dispatch({ type: "A" });
  };

  componentDidMount(nextProps) {
    // this.setState({ ...Store.getState() }, console.log(this.state));
    this.unSubscribe = Store.subscribe(() => {
      console.log(Store.getState());
      this.setState({ ...Store.getState() }, console.log(this.state));
    });
  }

  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <button onClick={this.handleClick}>click me</button>
      </div>
    );
  }
}
