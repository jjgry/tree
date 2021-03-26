import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import { Person } from "../utils/interfaces";
import { personUrlPath } from "../utils/constants";

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
          const url = personUrlPath + person.crsid;
          return (
            <ListGroup.Item key={person.key} action href={url}>
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
