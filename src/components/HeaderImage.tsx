import Figure from "react-bootstrap/Figure";

const HeaderImage = () => {
  return (
    <div className="my-4" style={{ display: "flex", justifyContent: "center" }}>
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
  );
};

export default HeaderImage;
