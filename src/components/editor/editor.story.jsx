import React from "react";
import Editor from "./index";
import Code from "../code-hightlighter/";

export default {
  title: "Editor"
};

const imports = `    
npm install --save @ckeditor/ckeditor5-react 
npm install --save @ckeditor/ckeditor5-build-classic
`;

export const editor = () => (
  <div>
    <h2>Editor</h2>
    <h3>Example</h3>
    <Editor onChange={v => console.log(v)} />
    <h3>Dependencies</h3>
    <Code lang="bash">{imports}</Code>
  </div>
);
