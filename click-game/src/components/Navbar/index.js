import React from "react";
import { Navbar } from "react-bootstrap";
import "./style.css";

function Nav(props) {
  return (
    <Navbar className="col-12 mb-4">
      <Navbar.Brand className="justify-content-left" href="/">
        Memory Game
      </Navbar.Brand>

      <Navbar.Collapse className="justify-content-around">
        <Navbar.Text id="instruct">
          Click each image only once to win. Once you select one they will
          shuffle.
        </Navbar.Text>
        <Navbar.Text>Current Score: {props.currentScore}</Navbar.Text>
        <Navbar.Text>Top Score {props.topScore}</Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Nav;
