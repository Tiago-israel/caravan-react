import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

export default ({ show, handleClose }) => (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title className="h5">Entre na Sua Conta</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Senha" />
        </Form.Group>
        <Button variant="primary" type="buton">
          Entrar na Conta
        </Button>
        <Form.Text className="text-muted">
          Esqueceu a senha? <a href="sss">clique aqui!</a>
        </Form.Text>
      </Form>
    </Modal.Body>
  </Modal>
);
