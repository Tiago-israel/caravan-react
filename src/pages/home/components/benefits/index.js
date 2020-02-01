import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Passaporte from "../../../../assets/img/icones/passaporte.svg";
import Passagens from "../../../../assets/img/icones/passagens.svg";
import Translado from "../../../../assets/img/icones/translado.svg";
import Praias from "../../../../assets/img/icones/praias.svg";
import Bagagens from "../../../../assets/img/icones/bagagens.svg";
import Turismo from "../../../../assets/img/icones/turismo.svg";

export default () => (
  <section className="py-5 bg-light text-center">
    <Container>
      <div className="my-5">
        <span className="h6">TUDO DE MELHOR PARA VOCÊ</span>
        <h2 className="display-4 text-primary">Aproveite as Vantagens</h2>
      </div>
      <Row>
        <Col md={6} xl={4}>
          <BenefitItem title="Documentos" img={Passaporte} />
        </Col>
        <Col md={6} xl={4}>
          <BenefitItem title="Passagens" img={Passagens} />
        </Col>
        <Col md={6} xl={4}>
          <BenefitItem title="Translado" img={Translado} />
        </Col>
        <Col md={6} xl={4}>
          <BenefitItem title="Praias" img={Praias} />
        </Col>
        <Col md={6} xl={4}>
          <BenefitItem title="Bagagens" img={Bagagens} />
        </Col>
        <Col md={6} xl={4}>
          <BenefitItem title="Turismo" img={Turismo} />
        </Col>
      </Row>
      <Button className="mt-4" size="lg" variant="primary">
        Comprar Plano
      </Button>
    </Container>
  </section>
);

const BenefitItem = props => (
  <>
    <div className="d-flex justify-content-center">
      <img style={{ height: "100px" }} src={props.img} alt="img" />
    </div>
    <h3>{props.title}</h3>

    {props.children || (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, nemo
        nulla.
      </p>
    )}
  </>
);
