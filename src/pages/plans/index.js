import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { benefits } from "./data/benefits.json";
import Plan from "./components/plan";
import Title from "../../components/title";
import "./styles.css";
const Plans = () => (
  <Container>
    <Title text="seu plano, sua viagem" subtitle="Escolha o Plano" />
    <Row>
      <Col md className="mb-5">
        <Plan showButton title="Gold" benefits={benefits.gold} price="5.000" />
      </Col>
      <Col md className="mb-5">
        <Plan
          showButton
          benefits={benefits.platinum}
          price="7.500"
          header={
            <h2>
              Platinum <Badge variant="success">Novo</Badge>
            </h2>
          }
        />
      </Col>
    </Row>
  </Container>
);

export default Plans;
