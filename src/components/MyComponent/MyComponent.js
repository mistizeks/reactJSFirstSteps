import React from "react";

class MyComponent extends React.Component {
  state = {
    text: "test state"
  };

  handleChange = event => {
    this.setState({ text: event.target.value });
  };

  render() {
    return (
      <>
        <input
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="your text"
        />
        <h1>{this.state.text}</h1>
      </>
    );
  }
}

export default MyComponent;
