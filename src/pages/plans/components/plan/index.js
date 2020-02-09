import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import Card from "../../../../components/card";
const Plan = props => (
  <Card>
    {props.header || <h2>{props.title}</h2>}
    <ul className="plan-list list-unstyled">
      {props.benefits?.map((benefit, index) => (
        <li key={index}>→ {benefit}</li>
      ))}
    </ul>
    <Form>
      <Form.Group>
        <Form.Label></Form.Label>
        <Form.Control className="bg-light" as="select">
          <option>Selecione a cidade</option>
          <option>California</option>
          <option>París</option>
          <option>Dublin</option>
        </Form.Control>
      </Form.Group>
      <Row className="align-items-center mt-4">
        <Col>
          <Button size="lg" block variant="primary">
            Comprar Plano
          </Button>
        </Col>
        <Col>
          <span className="h4">R${props.price}</span>
        </Col>
      </Row>
    </Form>
  </Card>
);

export default Plan;
