import React, { Component } from "react";
import ConflictItem from "./components/conflictItem";

class ConflictsResolver extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: new Array(props.conflicts.length)
    };
  }

  render() {
    const { conflicts } = this.props;
    const { result } = this.state;

    return (
      <div className="conflict-resolver">
        {conflicts.map(conflict => (
          <ConflictItem
            key={conflict.id}
            data={conflict}
            result={result[conflict.id]}
            resolve={(id, data) => {
              let newResult = result;
              console.log(conflicts);
              console.log(newResult);
              result[id] = data;
              this.setState({
                result: newResult
              });
            }}
          />
        ))}
      </div>
    );
  }
}

export default ConflictsResolver;
