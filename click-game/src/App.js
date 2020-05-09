import React, { Component } from "react";
import Cards from "./components/Cards";
import cardData from "./cards.json";
import Nav from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import $ from "jquery";
import "./App.css";

let chosen = [];
let currentScore = 0;
let topScore = 0;

function reset() {
  if (topScore < currentScore) {
    topScore = currentScore;
  }
  currentScore = 0;

  chosen = [];
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

class App extends Component {
  state = { cardData };

  isValid = (id) => {
    chosen.forEach((element) => {
      if (id === element) {
        $("#instruct").text("INCORRECT"); // click on first element

        $("#instruct").css({ color: "red" }); //change second element background
        setTimeout(function () {
          $("#instruct").css({ color: "rgba(0,0,0,0.5)" }); // change it back after ...
          $("#instruct").text("Play Again");
        }, 1000);
        reset();
        id = null;
      }
    });
    if (id || id === 0) {
      chosen.push(id);

      $("#instruct").text("CORRECT"); // click on first element

      $("#instruct").css({ color: "green" }); //change second element background
      setTimeout(function () {
        $("#instruct").css({ color: "rgba(0,0,0,0.5)" }); // change it back after ...
        $("#instruct").text("Choose Another");
      }, 500);

      currentScore++;

      if (currentScore === 12) {
        $("#instruct").text("You Win!"); // click on first element

        $("#instruct").css({ color: "green" }); //change second element background
        setTimeout(function () {
          $("#instruct").css({ color: "rgba(0,0,0,0.5)" }); // change it back after ...
          $("#instruct").text("New Game");
        }, 1000);
        reset();
        id = null;
      }
    }
    shuffle(cardData);
    this.setState({ cardData });
  };

  render() {
    return (
      <Container className="m-3">
        <Row>
          <Nav currentScore={currentScore} topScore={topScore} />
        </Row>
        <Row>
          {cardData.map((data) => (
            <Col xs={3} className="mb-4">
              <Cards
                isValid={this.isValid}
                id={data.id}
                key={data.id}
                name={data.name}
                image={data.image}
              />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default App;
