import React, { useEffect, useState } from "react";
import PersonGroup from "./components/PersonGroup";
import SearchBar from "./components/SearchBar";
import Figure from "react-bootstrap/Figure";
import Container from "react-bootstrap/Container";
import CardColumns from "react-bootstrap/CardColumns";
import { Response } from "./interfaces";
import "./App.css";

const App: React.FC = () => {
  const [data, setData] = useState<Response>({});

  const getData = () => {
    fetch("./test-data.json")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <>
      {data.focus &&
      data.parents &&
      data.partners &&
      data.siblings &&
      data.children ? (
        <Container className="mt-3 justify-content-md-center">
          <div
            className="my-4"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Figure>
              <Figure.Image
                src="/logo.svg"
                width={50}
                height={50}
                className="d-inline-block
                align-center mr-2"
                alt="College Tree logo"
              />
            </Figure>
            <h1>CollegeTree</h1>
          </div>
          <SearchBar />
          {data.focus ? (
            <div style={{ textAlign: "center" }}>
              <h4>{data.focus.name}</h4>
              {data.focus.college}
              <br />
              {data.focus.subject}
              <br />
              <code>{data.focus.crsid}</code>
            </div>
          ) : (
            <p>loading</p>
          )}
          <hr />

          <CardColumns>
            {data.parents ? (
              <PersonGroup title="Parents" people={data.parents} />
            ) : (
              <p>loading</p>
            )}
            {data.partners ? (
              <PersonGroup title="Partner" people={data.partners} />
            ) : (
              <p>loading</p>
            )}
            {data.siblings ? (
              <PersonGroup title="Siblings" people={data.siblings} />
            ) : (
              <p>loading</p>
            )}
            {data.children ? (
              <PersonGroup title="Children" people={data.children} />
            ) : (
              <p>loading</p>
            )}
          </CardColumns>
        </Container>
      ) : (
        <p>loading</p>
      )}
    </>
  );
};

export default App;
