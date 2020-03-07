import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import Icon from "../icon/";
import "./style.css";

const propTypes = {
  /** None */
};

class BinaryClock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    this.updateTime = this.updateTime.bind(this);
    this.renderBinary = this.renderBinary.bind(this);

    this.timer = null;
  }

  componentDidMount() {
    this.timer = setInterval(this.updateTime, 1000);
  }

  updateTime() {
    var d = new Date();
    this.setState({
      hours: d.getHours(),
      minutes: d.getMinutes(),
      seconds: d.getSeconds()
    });
  }

  renderBinary(value) {
    const binary = value.toString(2).padStart(6, "0");
    //console.log(binary);
    const binaryArray = binary.split("");
    return (
      <div className="bclock">
        {binaryArray.map((b, i) => {
          return (
            <Icon
              key={i}
              font="fa"
              name="circle"
              className={b === "0" ? "empty" : "full"}
            />
          );
        })}
      </div>
    );
  }

  render() {
    const { hours, minutes, seconds } = this.state;
    return (
      <div>
        <h3>Horas: {hours}</h3>
        {this.renderBinary(hours)}
        <h3>Minutos: {minutes}</h3>
        {this.renderBinary(minutes)}
        <h3>Segundos: {seconds < 10 ? `0${seconds}` : seconds}</h3>
        {this.renderBinary(seconds)}
      </div>
    );
  }
}

BinaryClock.propTypes = propTypes;

export default BinaryClock;
