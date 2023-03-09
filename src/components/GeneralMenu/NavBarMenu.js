import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import BluButton from "../Button/BluButton";
import BluCartButton from "../Button/BluCartButton";
import BluUserButton from "../Button/BluUserButton";
import { useNavigate } from "react-router-dom";

function NavBarMenu() {
  const navigate = useNavigate();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex ">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Navbar.Collapse>
        <BluButton
          href="https://api.whatsapp.com/send?phone=0123456789"
          variant="success"
          text="Quieres ser donador?"
        />
        <BluCartButton actionOnClick={() => navigate("/blu/cart")} />
        <BluUserButton />
      </Container>
    </Navbar>
  );
}

export default NavBarMenu;
