import React, { Component } from "react";

class Row extends Component {
  render() {
    return (
      <div className="row" style={this.props.style}>
        {this.props.item.index}: Value {this.props.item.value}
        <button onClick={() => this.props.increment()}>+</button>
      </div>
    );
  }
}

export default Row;
