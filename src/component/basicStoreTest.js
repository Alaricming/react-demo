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

  init() {
    function throttle(method, delay, context) {
      console.log(method, delay, context);
      clearTimeout(method.timmerId);

      method.timmerId = setTimeout(() => {
        method();
      }, delay);
    }

    window.onscroll = throttle(onScroll, 5000, this);

    function onScroll() {
      console.log(1);
    }
  }

  handleClick = () => {
    Store.dispatch({ type: "A" });
  };

  componentDidMount(nextProps) {
    this.init();
    this.setState({ ...Store.getState() }, console.log(this.state));

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
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
      </div>
    );
  }
}
