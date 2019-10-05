// import React, { useState, useEffect, useRef } from "react";
import React, { Component } from "react";
import { FixedSizeList as List } from "react-window";
import Row from "../row";
import "./style.css";

// These row heights are arbitrary.

// Yours should be based on the content of the row.

class Lista extends Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();

    this.state = {
      height: 0
    };
  }

  componentDidMount() {
    console.log(this.ref.current.clientHeight);
    this.setState({ height: this.ref.current.clientHeight });
  }

  render() {
    const { height } = this.state;
    return (
      <div className="container" ref={this.ref}>
        {height !== 0 ? (
          <List
            height={height}
            itemCount={this.props.rows.length}
            itemSize={30}
            width={500}
          >
            {({ index, style }) => (
              <Row
                style={style}
                item={this.props.rows[index]}
                increment={() => this.props.increment(index)}
              />
            )}
          </List>
        ) : null}
      </div>
    );
  }
}
export default Lista;
/*
export default props => {
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    console.log(ref.current.clientHeight);
    setHeight(ref.current.clientHeight);
  });

  return (
    <div className="container" ref={ref}>
      {height !== 0 ? (
        <List
          height={height}
          itemCount={props.rows.length}
          itemSize={30}
          width={500}
        >
          {RowItem}
        </List>
      ) : null}
    </div>
  );
};
*/
