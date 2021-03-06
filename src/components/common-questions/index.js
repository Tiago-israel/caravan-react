import React from "react";
import {
  Container,
  Row,
  Col,
  Accordion,
  Button,
  Dropdown
} from "react-bootstrap";
import Title from "../title";

const CommonQuestions = () => (
  <Container id="common-questions" as="section">
    <Title text="ainda está com dúvidas?" subtitle="Perguntas Frequentes" />
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

export default CommonQuestions;
