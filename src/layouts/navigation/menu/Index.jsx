import React from "react";
import Logo from "../../../assets/img/caravan.svg";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import "./styles.css";

export default () => (
  <Navbar
    className="py-3 box-shadow"
    bg="light"
    variant="light"
    fixed="top"
    expand="md"
  >
    <Navbar.Brand href="#home">
      <img src={Logo} alt="logo" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <NavDropdown title="Locais" id="places-nav-dropdown">
          <NavDropdown.Item>California</NavDropdown.Item>
          <NavDropdown.Item>Paris</NavDropdown.Item>
          <NavDropdown.Item>Dublin</NavDropdown.Item>
        </NavDropdown>
        <Nav.Item>
          <Nav.Link>Planos</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Contato</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Login</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Button className="ml-md-2" variant="outline-primary">
            Inscreva-se
          </Button>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
