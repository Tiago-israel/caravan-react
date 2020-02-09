import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Title from "../../components/title";
import Gallery from "./components/gallery";
import NextEvents from "./components/next-events";

export default () => {
  const { name } = useParams();
  return (
    <>
      <Container as="section">
        <Title
          text="o melhor destino da sua viagem"
          subtitle={
            <>
              Descubra <span className="text-capitalize">{name}</span>
            </>
          }
        />
        <Gallery />
      </Container>
      <Container as="section">
        <NextEvents />
      </Container>
    </>
  );
};
