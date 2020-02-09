import React from "react";

const Title = ({ text, subtitle }) => (
  <div className="text-center my-5">
    <span className="h6 d-block text-uppercase">{text}</span>
    <h1 className="display-4 text-primary">{subtitle}</h1>
  </div>
);

export default Title;
