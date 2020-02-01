import React from "react";
import { Carousel } from "react-bootstrap";
import California from "../../../../../assets/img/california.jpg";
import Dublin from "../../../../../assets/img/dublin.jpg";
import Paris from "../../../../../assets/img/paris.jpg";

export default props => (
  <Carousel>
    <Carousel.Item>
      <img src={California} className="d-block w-100" alt="california" />
      <Carousel.Caption>
        <h3 className="display-4">California</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img src={Dublin} className="d-block w-100" alt="dublin" />
      <Carousel.Caption>
        <h3 className="display-4">California</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img src={Paris} className="d-block w-100" alt="paris" />
      <Carousel.Caption>
        <h3 className="display-4">California</h3>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);
