import React, { useEffect, useState } from "react";
import PersonGroup from "./components/PersonGroup";
import Container from "react-bootstrap/Container";
import { Response } from "./interfaces";
import "./App.css";

const App: React.FC = () => {
  const [data, setData] = useState<Response>({});

  const getData = () => {
    fetch("./test-data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => setData(json));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container className="mt-3">
      <h3>Focus</h3>
      {data.focus ? <PersonGroup people={data.focus} /> : <p>loading</p>}
      <h3>Parents</h3>
      {data.parents ? <PersonGroup people={data.parents} /> : <p>loading</p>}
    </Container>
  );
};

export default App;
