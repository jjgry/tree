import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { personUrlPath } from "../utils/constants";

const SearchBar = () => {
  const history = useHistory();
  const [value, setValue] = useState("");

  const handleSubmit = (event: React.ChangeEvent<any>) => {
    event.preventDefault();
    setValue("");
    const targetUrl = personUrlPath + value;
    history.push(targetUrl);
  };

  const handleChange = (event: React.ChangeEvent<any>) => {
    setValue(event.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-4">
        <FormControl
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Search for a CRSid"
        />
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
