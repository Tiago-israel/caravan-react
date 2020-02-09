import React from "react";
import { Table, Button } from "react-bootstrap";
import Title from "../../../../components/title";
import { events } from "./data/events.json";

export default () => (
  <>
    <Title
      text="descubra o que acontece na cidade"
      subtitle="Próximos Eventos"
    />
    <Table responsive hover>
      <thead>
        <tr>
          <th>Data</th>
          <th>Evento</th>
          <th>Local</th>
          <th>Ticket</th>
        </tr>
      </thead>
      <tbody>
        {events.map(event => (
          <tr key={event.id}>
            <td>{event.date}</td>
            <td>{event.name}</td>
            <td>{event.location}</td>
            <td>
              <Button size="sm" variant="outline-secondary">
                Comprar Ticket
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </>
);
