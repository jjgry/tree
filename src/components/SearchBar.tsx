import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

const handleSubmit = () => {
  console.log("Form submitted");
};

const SearchBar = () => {
  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-4">
        <FormControl placeholder="Search for a CRSid" />
        <InputGroup.Append>
          <Button variant="outline-secondary" type="submit">
            Search
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
};

export default SearchBar;
