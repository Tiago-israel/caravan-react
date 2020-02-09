import React from "react";
import Menu from "../menu";
import Footer from "../footer";
import MainRoutes from "../../routes/main-routes";

export default () => (
  <>
    <Menu />
    <div className="pb-5">
      <MainRoutes />
    </div>
    <Footer />
  </>
);
