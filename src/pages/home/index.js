import React from "react";
import Banner from "./components/banner";
import Benefits from "./components/benefits";
import Quote from "./components/quote";
import CommonQuestions from "../../components/common-questions";
import { Button } from "react-bootstrap";
const Home = () => (
  <>
    <Banner />
    <Benefits />
    <Quote />
    <CommonQuestions />
    <div className="text-center my-4">
      <p className="small m-1">FALE CONOSCO PARA MAIS DÚVIDAS</p>
      <Button size="lg" variant="primary">
        Entre em Contato
      </Button>
    </div>
  </>
);

export default Home;
