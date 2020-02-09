import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactData from "../../components/contact-data";
import SocialNetworks from "../../components/social-networks";

export default () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-dark text-white">
      <Container className="py-4">
        <Row>
          <Col md={3}>
            <h4 className="h6">PÁGINAS</h4>
            <ul className="list-unstyled">
              <li>
                <a href="https://github.com/Tiago-israel/caravan-react">
                  Planos
                </a>
              </li>
              <li>
                <a href="https://github.com/Tiago-israel/caravan-react">
                  Contato
                </a>
              </li>
              <li>
                <a href="https://github.com/Tiago-israel/caravan-react">
                  Inscreva-se
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h4 className="h6">Locais</h4>
            <ul className="list-unstyled">
              <li>
                <a href="https://github.com/Tiago-israel/caravan-react">
                  California
                </a>
              </li>
              <li>
                <a href="https://github.com/Tiago-israel/caravan-react">
                  Paris
                </a>
              </li>
              <li>
                <a href="https://github.com/Tiago-israel/caravan-react">
                  Dublin
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <ContactData />
          </Col>
          <Col md={2}>
            <SocialNetworks />
          </Col>
        </Row>
      </Container>
      <div className="bg-primary text-center py-3">
        <p className="mb-0">Caravan © {year} Alguns direitos reservados</p>
      </div>
    </footer>
  );
};
