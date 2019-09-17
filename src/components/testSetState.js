import React, { Component } from "react";

export default class TestSetState extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "haha"
        };
    }

    handleClick = () => {
        this.setState(
            prevState => setTimeout(() => ({ text: prevState.text + 1 }), 3000),
            () => {
                console.log(this.state.text);
            }
        );
        console.log("11", this.state.text);
    };

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>click me</button>
                <p>{this.state.text}</p>
            </div>
        );
    }
}
