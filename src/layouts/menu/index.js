import React, { useState } from "react";
import Logo from "../../assets/img/caravan.svg";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import LoginModal from "../../components/login-modal";
import "./styles.css";

export default () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar
        className="py-3 box-shadow"
        bg="light"
        variant="light"
        fixed="top"
        expand="md"
      >
        <Navbar.Brand href="/">
          <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown title="Locais" id="places-nav-dropdown">
              <NavDropdown.Item href="/locais/california">California</NavDropdown.Item>
              <NavDropdown.Item href="/locais/paris">Paris</NavDropdown.Item>
              <NavDropdown.Item href="/locais/dublin">Dublin</NavDropdown.Item>
            </NavDropdown>
            <Nav.Item>
              <Nav.Link href="/planos">Planos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/contato">Contato</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={handleShow}>Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Button className="ml-md-2" variant="outline-primary">
                Inscreva-se
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <LoginModal handleClose={handleClose} show={show} />
    </>
  );
};
