import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import issameljaouhari from "../../images/issameljaouhari.jpg";
import FullName from "./FullName";
import Address from "./Address";
function BasicExample() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={issameljaouhari} />
      <Card.Body>

        <FullName />
        <Address />

        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
