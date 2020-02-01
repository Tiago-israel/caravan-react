import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Caroucel from "./carousel";
import SubscribeForm from "./subscribe-form";

export default () => (
  <Container fluid={true} as="section">
    <Row className="bg-dark text-white">
      <Col lg={7} className="p-0">
        <Caroucel />
      </Col>
      <Col lg={5} className="p-4 align-self-center">
        <SubscribeForm />
      </Col>
    </Row>
  </Container>
);
