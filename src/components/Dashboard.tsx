import { useEffect, useState } from "react";
import PersonGroup from "./PersonGroup";
import SearchBar from "./SearchBar";
import HeaderImage from "./HeaderImage";
import Container from "react-bootstrap/Container";
import CardColumns from "react-bootstrap/CardColumns";
import { Response } from "../utils/interfaces";
import { useParams } from "react-router-dom";

const Dashboard = () => {
  let { id }: { id: string } = useParams();
  console.log("ID:", id);

  const [data, setData] = useState<Response>({});

  const getData = () => {
    fetch("/test-data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  };

  const getApiData = () => {
    fetch("/api/v1/parents", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("Data fetched from API: ", json);
      });
  };

  useEffect(() => {
    getData();
    getApiData();
  }, []);

  console.log("data:", data);

  return (
    <Container className="mt-3 justify-content-md-center">
      <HeaderImage />
      <SearchBar />

      {data.focus &&
      data.parents &&
      data.spouses &&
      data.siblings &&
      data.children ? (
        <>
          <div style={{ textAlign: "center" }}>
            <h4>{data.focus.name}</h4>
            {data.focus.college}
            <br />
            {data.focus.subject}
            <br />
            <code>{data.focus.crsid}</code>
          </div>

          <hr />

          <CardColumns>
            <PersonGroup title="Parents" people={data.parents} />
            <PersonGroup title="Partner" people={data.spouses} />
            <PersonGroup title="Siblings" people={data.siblings} />
            <PersonGroup title="Children" people={data.children} />
          </CardColumns>
        </>
      ) : (
        <p>loading</p>
      )}
    </Container>
  );
};

export default Dashboard;
