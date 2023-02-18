import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
// import { Navbar, Nav, NavDropdown } from 'react-bootstrap';//in case that is needed

const SideBarMenu = (props) => {
  return (
    <article class="w-25 p-3">
    <Navbar bg="light" expand="lg" collapseOnSelect={false}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Tote Bags</Nav.Link>
          <Nav.Link href="/productos">Bucket Hats</Nav.Link>
          <Nav.Link href="/servicios">Lapiceras</Nav.Link>
          <Nav.Link href="/servicios">Chamarras</Nav.Link>
          <Nav.Link href="/servicios">Blusas</Nav.Link>
          {/* <NavDropdown title="Más" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.3">Opción 3</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Opción 3</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Opción 3</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Opción 3</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </article>
  );
}

export default SideBarMenu;

