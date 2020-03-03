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

// import BinaryClock from "./components/binaryClock";

// import Editor from "./components/editor";

// import ReactMarkdown from "react-markdown";

// import CodeHightligter from "./components/code-hightlighter";

// import Lista from "./components/virtualized/lista";

// import List from "./components/list";
import Table from "./components/table";

import Icon from "./components/icon/";

// const ItemList = props => (
//   <li className={props.className} onClick={props.onClick}>
//     {props.name}
//   </li>
// );

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
    const numRows = 999999;
    for (let i = 0; i < numRows; i++) {
      rows.push({ index: i, value: i });
    }

    this.state = {
      rows,
      editorValue: "",
      elements: [
        { id: 1, name: "element1" },
        { id: 2, name: "element2" },
        { id: 3, name: "element3" },
        { id: 4, name: "element4" },
        { id: 5, name: "element5" },
        { id: 6, name: "element6" },
        { id: 7, name: "element7" },
        { id: 8, name: "element8" },
        { id: 9, name: "element9" },
        { id: 10, name: "element10" },
        { id: 11, name: "element11" },
        { id: 12, name: "element12" },
        { id: 13, name: "element13" },
        { id: 14, name: "element14" },
        { id: 15, name: "element15" },
        { id: 16, name: "element16" },
        { id: 17, name: "element17" },
        { id: 18, name: "element18" },
        { id: 19, name: "element19" },
        { id: 20, name: "element20" },
        { id: 21, name: "element21" },
        { id: 22, name: "element22" },
        { id: 23, name: "element23" },
        { id: 24, name: "element24" },
        { id: 26, name: "element25" },
        { id: 27, name: "element26" },
        { id: 28, name: "element27" },
        { id: 19, name: "element28" }
      ],
      selected: 2
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
        <h2>Icons</h2>
        <h3>Font Awesome</h3>
        <Icon font="fa" name="times" />
        <Icon font="fa" name="times" size="2x" />
        <Icon font="fa" name="bars" />
        <Icon font="fa" name="arrow-right" />
        <Icon font="fa" name="arrow-circle-up" />
        <Icon font="fa" name="angle-double-up" />
        <Icon font="fa" name="info-circle" />
        <Icon font="fa" name="spinner" spin />
        <Icon font="fa" name="spinner" pulse size="3x" />

        <h3>Line Awesome</h3>
        <Icon font="la" name="automobile" />
        <Icon font="la" name="bell" />
        <Icon font="la" name="paw" />
        <Icon font="la" name="times" />
        <Icon font="la" name="angle-double-down" />
        <Icon font="la" name="recycle" />
        <Icon font="la" name="music" />
        <Icon font="la" name="sync-alt" spin />
        <Icon font="la" name="sync-alt" pulse />
        {/* <ReactMarkdown
          source={"# This is a header\n\nAnd this is a paragraph"}
        />
        <CodeHightligter lang="python">
          var list = []; list.push(1); list.push(2); list.push(3);
          list.forEach(el => console.log(el));
        </CodeHightligter>
        <BinaryClock /> */}
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
        {/* <Editor
          value={this.state.editorValue}
          onChange={value => this.setState({ editorValue: value })}
        /> */}
        {/* <hr /> */}
        {/* <Lista rows={this.state.rows} increment={this.increment} /> */}

        {/* <List
          ListItem={ItemList}
          selected={this.state.selected}
          onItemClick={item => this.setState({ selected: item.id })}
          identifier="id"
        >
          {this.state.elements}
        </List> */}

        <Table
          headers={["Id", "Name"]}
          rows={this.state.rows}
          pagination={{ pageSize: 5 }}
        />
      </div>
    );
  }
}

export default App;
