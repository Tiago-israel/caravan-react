import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Title from "../../components/title";
import Card from "../../components/card";
import Plan from "../plans/components/plan";
import { benefits } from "../plans/data/benefits.json";

const Subscription = () => (
  <Container as="section">
    <Title text="programe a viagem do seu sonho" subtitle="INSCREVA-SE" />
    <Row>
      <Col lg={6}>
        <Form>
          <Form.Row>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Nome completo" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>CPF</Form.Label>
                <Form.Control type="text" placeholder="xxx.xxx.xxx-xx" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="nome@exemplo.com" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group>
                <Form.Label>Endereço</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Número, nome da rua e bairro."
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Cidade</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
            <Col xs={6} md={3}>
              <Form.Group>
                <Form.Label>Estado</Form.Label>
                <Form.Control type="text" as="select">
                  <option>Selecione o Estado</option>
                  <option>Rio de Janeiro</option>
                  <option>São Paulo</option>
                  <option>Paraná</option>
                  <option>Ceará</option>
                  <option>Acre</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={6} md={3}>
              <Form.Group>
                <Form.Label>Cep</Form.Label>
                <Form.Control type="text" placeholder="xxxxx-xxx" />
              </Form.Group>
            </Col>
          </Form.Row>
          <Card>
            <h2 className="h6 text-primary text-uppercase">
              forma de pagamento
            </h2>
          </Card>
        </Form>
      </Col>
      <Col className="mx-auto order-first order-lg-1 mb-5" lg={5}>
        <h2 className="h6 text-primary text-uppercase">plano escolhido</h2>
        <Plan
          showButton={false}
          title="Gold"
          benefits={benefits.gold}
          price="5.000"
        />
      </Col>
    </Row>
  </Container>
);

export default Subscription;
