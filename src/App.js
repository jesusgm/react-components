import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFile,
  faTimes,
  faArrowRight,
  faArrowLeft
} from "@fortawesome/free-solid-svg-icons";

import "./App.css";

import FileInput from "./components/fileInput";
import ConflictsResolver from "./components/conflictResolver";

import { Draggable } from "react-drag-and-drop";
import DropableList from "./components/DropableList";

library.add(faFile);
library.add(faTimes);
library.add(faArrowRight);
library.add(faArrowLeft);

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2> File Input </h2>{" "}
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
        />{" "}
        <hr />
        <ConflictsResolver
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
        <hr />
        <Draggable
          type="listitem"
          data={JSON.stringify({ name: "item1", id: 1 })}
        >
          Item 1
        </Draggable>
        <Draggable
          type="listitem"
          data={JSON.stringify({ name: "item2", id: 2 })}
        >
          Item 2
        </Draggable>
        <Draggable
          type="listitem"
          data={JSON.stringify({ name: "item3", id: 3 })}
        >
          Item 3
        </Draggable>
        <hr />
        <DropableList value={[{ name: "item2", id: 2 }]} types={["listitem"]} />
      </div>
    );
  }
}

export default App;
