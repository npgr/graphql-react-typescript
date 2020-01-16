import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default () => (
  <Menu fixed="top">
    <Menu.Header style={{ margin: "10px" }}>
      <h3 data-test="appTitle">Search App</h3>
    </Menu.Header>
    <Link to="/about">About</Link>
  </Menu>
);
