import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFile,
  faTimes,
  faArrowRight,
  faArrowLeft,
  faCircle,
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";

import "./App.css";

// import FileInput from "./components/fileInput";
// import ConflictsResolver from "./components/conflictResolver";

// import { Draggable } from "react-drag-and-drop";
// import DropableList from "./components/DropableList";

import BinaryClock from "./components/binaryClock";

import Editor from "./components/editor";

import ReactMarkdown from "react-markdown";

import CodeHightligter from "./components/code-hightlighter";

// import Lista from "./components/virtualized/lista";

library.add(faFile);
library.add(faTimes);
library.add(faArrowRight);
library.add(faArrowLeft);
library.add(faCircle);
library.add(faCheckCircle);

class App extends Component {
  constructor(props) {
    super(props);

    let rows = [];
    const numRows = 9999;
    for (let i = 0; i < numRows; i++) {
      rows.push({ index: i, value: i });
    }

    this.state = {
      rows,
      editorValue: ""
    };

    this.increment = this.increment.bind(this);
  }

  increment(index) {
    this.setState({
      rows: this.state.rows.map(row => {
        if (row.index === index) {
          return {
            ...row,
            value: row.value + 1
          };
        }
        return row;
      })
    });
  }
  render() {
    return (
      <div className="App">
        <ReactMarkdown
          source={"# This is a header\n\nAnd this is a paragraph"}
        />
        <CodeHightligter lang="python">
          var list = []; list.push(1); list.push(2); list.push(3);
          list.forEach(el => console.log(el));
        </CodeHightligter>
        <BinaryClock />
        {/*
        <h2> File Input </h2>
        <FileInput
          name="upload-file"
          onChange={files => console.log(files)}
          value={
            [
              // {
              //   name: "file.txt"
              // }
            ]
          }
        />
        <hr /> */}
        {/* <ConflictsResolver
          conflicts={[
            {
              id: 1,
              local: "aaa",
              remote: "aab"
            },
            {
              id: 2,
              local: "123",
              remote: "adfadsf"
            },
            {
              id: 3,
              local: "aaad",
              remote: "aabd"
            },
            {
              id: 4,
              local: "www",
              remote: "eee"
            },
            {
              id: 5,
              local: "afdadf",
              remote: "adfadff"
            }
          ]}
        />
        <hr /> */}
        {/* <Draggable
          type="listitem"
          data={JSON.stringify({
            name: "item1",
            id: 1
          })}
        >
          Item 1
        </Draggable>
        <Draggable
          type="listitem"
          data={JSON.stringify({
            name: "item2",
            id: 2
          })}
        >
          Item 2
        </Draggable>
        <Draggable
          type="listitem"
          data={JSON.stringify({
            name: "item3",
            id: 3
          })}
        >
          Item 3
        </Draggable>
        <hr /> */}
        {/* <DropableList
          value={[
            {
              name: "item2",
              id: 2
            }
          ]}
          types={["listitem"]}
        /> */}
        {/* <hr />
         */}
        <Editor
          value={this.state.editorValue}
          onChange={value => this.setState({ editorValue: value })}
        />
        {/* <hr /> */}
        {/* <Lista rows={this.state.rows} increment={this.increment} /> */}
      </div>
    );
  }
}

export default App;
