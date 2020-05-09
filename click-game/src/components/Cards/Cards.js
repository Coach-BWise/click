import React from "react";
import { Card } from "react-bootstrap";
import "./Cards.css";

function Cardx(props) {
  return (
    <Card onClick={() => props.isValid(props.id)} className={props.name}>
      <Card.Img className="anime" variant="top" src={props.image} />
      <Card.Body>
        <Card.Text className="names text-center">{props.name}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cardx;
