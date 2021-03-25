import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import { Person } from "../interfaces";
import PersonCard from "./PersonCard";

const PersonGroup = ({ people }: { people: Person[] }) => {
  return (
    <CardDeck>
      {people.map((person: Person) => {
        return <PersonCard {...person} />;
      })}
    </CardDeck>
  );
};

export default PersonGroup;
