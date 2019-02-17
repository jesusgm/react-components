import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFile, faTimes } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

import FileInput from "./components/fileInput";

library.add(faFile);
library.add(faTimes);

class App extends Component {
  render() {
    return (
      <div className="App">
        <FileInput
          name="upload-file"
          onChange={files => console.log(files)}
          value={[{ name: "file.txt" }]}
        />
      </div>
    );
  }
}

export default App;
