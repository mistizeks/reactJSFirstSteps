import React from "react";
import ListWrapper from "./components/ListWrapper/ListWrapper";
import "./styles.css";
import { twitterAccounts } from "./data/twitterAccounts";
import Form from "./components/Form/Form";

class App extends React.Component {
  state = {
    items: [...twitterAccounts]
  };

  addItem = event => {
    event.preventDefault();
    const item = {
      name: event.target[0].value,
      twitterLink: event.target[1].value,
      image: event.target[2].value,
      description: event.target[3].value
    };
    this.setState(prevState => ({
      items: [...prevState.items, item]
    }));
    event.target.reset();
  };

  render() {
    return (
      <div>
        <ListWrapper items={this.state.items} />
        <Form submitFn={this.addItem} />
      </div>
    );
  }
}

export default App;
