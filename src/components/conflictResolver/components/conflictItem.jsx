import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles.css";

class ConflictItem extends Component {
  render() {
    const { data, resolve, result } = this.props;

    return (
      <div className="conflict-item">
        <div className="local">
          <span className="data">{data.local}</span>
          <span className="icon" onClick={() => resolve(data.id, data.local)}>
            <FontAwesomeIcon icon="arrow-right" />
          </span>
        </div>
        <div className="result">
          <span className="data">{result}</span>
          <span className="icon" onClick={() => resolve(data.id, "")}>
            <FontAwesomeIcon icon="times" />
          </span>
        </div>
        <div className="remote">
          <span className="data">{data.remote}</span>
          <span className="icon" onClick={() => resolve(data.id, data.remote)}>
            <FontAwesomeIcon icon="arrow-left" />
          </span>
        </div>
      </div>
    );
  }
}

export default ConflictItem;
