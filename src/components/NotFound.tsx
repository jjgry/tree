import SearchBar from "./SearchBar";
import Container from "react-bootstrap/Container";
import HeaderImage from "./HeaderImage";

const NotFound = () => {
  return (
    <Container className="mt-3 justify-content-md-center">
      <HeaderImage />
      <SearchBar />

      <h2>This page does seem to exist.</h2>

      <p>
        If you think this is a mistake contact{" "}
        <a href="mailto:webmaster@jjgry.com">webmaster@jjgry.com</a>
      </p>
    </Container>
  );
};

export default NotFound;
