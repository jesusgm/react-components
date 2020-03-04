import React from "react";
import Icon from "./index";

export default { title: "Button" };

export const Icons = () => (
  <div>
    <h1>Componente Icon</h1>

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
  </div>
);