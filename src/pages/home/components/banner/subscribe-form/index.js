import React from "react";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";

export default () => (
  <>
    <h1 className="display-4">Realize a viagem do seu sonho</h1>
    <p className="lead">
      O melhor local para viajar é com a Caravan, mais de 5.000 excursões
      concluídas
    </p>
    <Form>
      <InputGroup size="lg">
        <FormControl
          placeholder="E-mail"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button variant="primary">Inscreva-se</Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  </>
);
