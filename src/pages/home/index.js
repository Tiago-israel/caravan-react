import React from "react";
import Menu from "../../layouts/navigation/menu/Index";
import Banner from "./components/banner";
import Benefits from "./components/benefits";
import Quote from "./components/quote";
import CommonQuestions from "./components/common-questions";

export default () => (
  <>
    <Menu />
    <Banner />
    <Benefits />
    <Quote />
    <CommonQuestions />
  </>
);
