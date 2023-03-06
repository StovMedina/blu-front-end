import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function SideBarMenu() {
  return (
    <Navbar expand={false} bg="light" className="mb-3">
      <Container fluid>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand"
          aria-labelledby="offcanvasNavbarLabel-expand"
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand">
              Categorias
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Productos</Nav.Link>
              <Nav.Link href="#action2">Envios</Nav.Link>
              <Nav.Link href="#action2">Clientes</Nav.Link>
              <Nav.Link href="#action2">Chamarras</Nav.Link>
              <Nav.Link href="#action2">Blusas</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default SideBarMenu;
