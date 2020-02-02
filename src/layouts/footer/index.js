import React from "react";
import { Container, Row, Col } from "react-bootstrap";

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
            <h4 className="h6">DADOS DE CONTATO</h4>
            <ul className="list-unstyled text-secondary">
              <li>tiagoisrael77@hotmail.com</li>
              <li>(32) 98701-6546</li>
              <li>De Seg. à Sex. das 8h às 18h</li>
            </ul>
          </Col>
          <Col md={2}>
            <h4 className="h6">REDES SOCIAIS</h4>
            <ul className="list-unstyled">
              <li>
                <a
                  style={{ maxWidth: "140px" }}
                  href
                  className="btn btn-sm btn-outline-secondary btn-block mb-2"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  style={{ maxWidth: "140px" }}
                  href
                  className="btn btn-sm btn-outline-secondary btn-block mb-2"
                >
                  Instagran
                </a>
              </li>
              <li>
                <a
                  style={{ maxWidth: "140px" }}
                  href
                  className="btn btn-sm btn-outline-secondary btn-block mb-2"
                >
                  Youtube
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="bg-primary text-center py-3">
        <p className="mb-0">Caravan © {year} Alguns direitos reservados</p>
      </div>
    </footer>
  );
};
