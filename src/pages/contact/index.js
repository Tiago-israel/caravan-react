import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Title from "../../components/title";
import Card from "../../components/card";
import ContactData from "../../components/contact-data";
import SocialNetworks from "../../components/social-networks";
import CommonQuestions from "../../components/common-questions";

const Contact = () => (
  <>
    <Container as="section">
      <Title text="possui alguma dúvida?" subtitle="Fale Conosco" />
      <Row>
        <Col lg>
          <Card>
            <Form>
              <Form.Group>
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Mensagem</Form.Label>
                <Form.Control as="textarea" rows="4" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Enviar Mensagem
              </Button>
            </Form>
          </Card>
        </Col>
        <Col lg>
          <h2 className="h6 text-uppercase">nosso endereço</h2>
          <img
            src="https://www.origamid.com/projetos/caravan/img/mapa.png"
            className="img-fluid box-shadow rounded mb-4"
            alt="endereço da empresa"
          />
          <ContactData />
          <SocialNetworks />
        </Col>
      </Row>
    </Container>
    <CommonQuestions />
  </>
);

export default Contact;
