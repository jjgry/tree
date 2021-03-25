import React from "react";
import Card from "react-bootstrap/Card";
import { Person } from "../interfaces";

const PersonCard = (person: Person) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{person.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {person.crsid}
        </Card.Subtitle>
        <Card.Text>{person.subject}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PersonCard;
