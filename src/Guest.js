import React from "react";
import { MyContext } from "./Context";

class Guest extends React.Component {
  static contextType = MyContext;
  render() {
    return (
      <div>
        <h3>Guest Component</h3>
        <h4>Name:{this.context.name}</h4>
        <h4>Value:{this.context.value}</h4>
        <button onClick={this.context.handleClick}>Change value</button>
      </div>
    );
  }
}
export default Guest;
