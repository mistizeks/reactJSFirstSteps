import React from "react";

class MyComponent extends React.Component {
  state = {
    text: "test state"
  };

  handleChange = () => console.log("change");

  render() {
    return (
      <>
        <input onChange={this.handleChange} placeholder="your text" />
        <h1>{this.state.text}</h1>
      </>
    );
  }
}

export default MyComponent;
