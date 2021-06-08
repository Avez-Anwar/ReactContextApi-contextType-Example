import React from "react";
import User from "./User";
import { Provider } from "./Context";

export const MyContext = React.createContext();

class App extends React.Component {
  state = {
    name: "React",
    value: 10
  };

  handleClickContext = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    const contextValue = {
      name: this.state.name,
      value: this.state.value,
      handleClick: this.handleClickContext
    };
    return (
      <Provider value={contextValue}>
        <div className="App">
          <div>
            <User />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
