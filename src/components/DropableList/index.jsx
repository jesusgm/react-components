import React, { Component } from "react";
import PropTypes from "prop-types";
import { Droppable } from "react-drag-and-drop";
import "./styles.css";

const propTypes = {
  types: PropTypes.array,
  value: PropTypes.array
};

class DropableList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: props.value ? props.value : []
    };

    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(data) {
    console.log(data);
    this.setState({
      list: [...this.state.list, JSON.parse(data.listitem)]
    });
  }

  remove(id) {
    this.setState({
      list: this.state.list.filter(elm => elm.id !== id)
    });
  }

  render() {
    return (
      <div>
        <Droppable types={this.props.types} onDrop={data => this.onDrop(data)}>
          <ul className="dropable-list">
            {this.state.list.length > 0
              ? this.state.list.map(listItem => (
                  <li key={listItem.id}>
                    {listItem.name}
                    <button onClick={() => this.remove(listItem.id)}>
                      Eliminar
                    </button>
                  </li>
                ))
              : null}
          </ul>
        </Droppable>
      </div>
    );
  }
}

DropableList.propTypes = propTypes;

export default DropableList;
