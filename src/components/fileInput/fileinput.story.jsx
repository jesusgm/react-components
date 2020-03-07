import React from "react";
import InputFile from "./index";

export default { title: "File input" };

export const FileInput = () => (
  <div>
    <h1>Input File</h1>
    <InputFile name="file" onChange={value => console.log(value)} />
  </div>
);
