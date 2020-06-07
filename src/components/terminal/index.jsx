import React, { useState, useEffect } from "react";
import "./styles.css";

const Terminal = (props) => {
  const { children, onCommand, username, host, path } = props;
  // const terminalRef = React.createRef();
  const id = `terminal-${Math.floor(Math.random() * 100)}`;
  const [history, setHistory] = useState([]);
  const [historyPos, setHistoryPos] = useState(0);
  const [command, setCommand] = useState("");

  useEffect(() => {
    const terminal = document.getElementById(id);
    terminal.addEventListener("keydown", handleKey);

    return () => {
      terminal.removeEventListener("keydown", handleKey);
    };
  });

  const handleKey = (e) => {
    e.stopPropagation();
    console.log(e.key, e.keyCode);
    if (e.keyCode === 13) {
      setHistory([command, ...history]);
      setCommand("");
      if (onCommand) {
        onCommand(command);
      }
    }
    if (e.keyCode === 8) {
      setCommand(command.substr(0, command.length - 1));
    }
    if (e.keyCode === 38) {
      //arrow up
      if (history.length > historyPos + 1) {
        setCommand(history[historyPos + 1]);
        setHistoryPos(historyPos + 1);
      }
    }
    if (e.keyCode === 40) {
      //arrow down
      if (historyPos > 0) {
        setCommand(history[historyPos - 1]);
        setHistoryPos(historyPos - 1);
      }
    }
    if (
      (e.keyCode >= 48 && e.keyCode <= 57) ||
      (e.keyCode >= 65 && e.keyCode <= 90) ||
      (e.keyCode >= 96 && e.keyCode <= 105) ||
      e.keyCode === 32
    ) {
      setCommand(`${command}${e.key}`);
    }
  };

  return (
    <div className="Terminal">
      <div className="Terminal__Toolbar">
        <div className="Toolbar__buttons">
          <button className="Toolbar__button Toolbar__button--exit">
            &#10005;
          </button>
          <button className="Toolbar__button">&#9472;</button>
          <button className="Toolbar__button">&#9723;</button>
        </div>
        <p className="Toolbar__user">
          {username}@{host}:~
        </p>
      </div>
      <div className="Terminal__body" id={id} tabIndex="0">
        <pre className="Terminal__text command__history">{children}</pre>
        <div className="Terminal__Prompt">
          <span className="Prompt__user">
            {username}@{host}:
          </span>
          <span className="Prompt__location">{path}</span>
          <span className="Prompt__dollar">$</span>
          <span className="Prompt__command">{command}</span>
          <span className="Prompt__cursor"></span>
        </div>
      </div>
    </div>
  );
};

Terminal.defaultProps = {
  host: window.location.hostname,
  path: "~",
  username: "user",
};

export default Terminal;
