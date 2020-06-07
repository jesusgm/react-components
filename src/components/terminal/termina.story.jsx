import React, { useState } from "react";
import Terminal from "./index";

export default {
  title: "Terminal",
};

export const TerminalExample = () => {
  const [command, setCommand] = useState("");
  return (
    <div>
      <h3>Ubuntu Terminal window</h3>
      <Terminal
        onCommand={(c) => {
          if (c === "clear") {
            setCommand("");
          } else {
            setCommand(`${command}\n${c}`);
          }
        }}
      >
        {command}
      </Terminal>
    </div>
  );
};
