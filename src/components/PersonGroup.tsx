import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import { Person } from "../interfaces";

const PersonGroup = ({
  title,
  people,
}: {
  title: string;
  people: Person[];
}) => {
  return (
    <Card>
      <Card.Header as="h6">{title}</Card.Header>
      <ListGroup variant="flush">
        {people.map((person: Person) => {
          return (
            <ListGroup.Item key={person.key}>
              {person.name}{" "}
              <Badge variant="light">
                <code>{person.crsid}</code>
              </Badge>{" "}
              <Badge variant="primary">{person.college}</Badge>{" "}
              <Badge variant="success">{person.subject}</Badge>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </Card>
  );
};

export default PersonGroup;
