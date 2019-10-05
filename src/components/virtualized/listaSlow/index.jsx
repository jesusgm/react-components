import React, { Component } from "react";
import Row from "../row";

class Lista extends Component {
  render() {
    return (
      <div className="container">
        {this.props.rows.map(row => (
          <Row
            key={row.index}
            item={row}
            increment={() => this.props.increment(row.index)}
          />
        ))}
      </div>
    );
  }
}

export default Lista;
