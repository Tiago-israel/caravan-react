import React from "react";
import {
  Container,
  Row,
  Col,
  Accordion,
  Button,
  Dropdown
} from "react-bootstrap";

export default () => (
  <Container id="common-questions" as="section">
    <div className="my-5 text-center">
      <span className="h6">AINDA ESTÁ COM DÚVIDAS?</span>
      <h2 className="display-4 text-primary">Perguntas Frequentes</h2>
    </div>
    <Row className="justify-content-center">
      <Col md={6}>
        <Accordion defaultActiveKey="0">
          <AccordionItem title="→ É possível cancelar a viagem?" eventKey="0" />
          <AccordionItem
            title="→ Qual a garantia que tenho se perder o voo?"
            eventKey="1"
          />
          <AccordionItem
            title="→ Qual a principal forma de viagem?"
            eventKey="2"
          />
          <AccordionItem
            title="→ Qual o melhor destino de viagem?"
            eventKey="3"
          />
          <AccordionItem
            title="→ Vocês dão descontos para grupos grandes?"
            eventKey="4"
          />
        </Accordion>
      </Col>
    </Row>
    <div className="text-center my-4">
      <p className="small m-1">FALE CONOSCO PARA MAIS DÚVIDAS</p>
      <Button size="lg" variant="primary">
        Entre em Contato
      </Button>
    </div>
  </Container>
);

const AccordionItem = ({ eventKey, title, children }) => (
  <div className="py-2">
    <Accordion.Toggle as={Button} variant="link" eventKey={eventKey}>
      <span className="lead">{title}</span>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey={eventKey}>
      {children || (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium
          lorem non vestibulum scelerisque. Proin a vestibulum sem, eget
          tristique massa. Aliquam lacinia rhoncus nibh quis ornare.
        </p>
      )}
    </Accordion.Collapse>
    <Dropdown.Divider />
  </div>
);
