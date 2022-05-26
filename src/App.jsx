import React from "react";
import { Route } from "react-router-dom";
import { AboutPage, Header, HomePage } from "./components";

const App = () => (
  <div className="container-fluid">
    <Header />
    <Route exact path="/" component={HomePage} />
    <Route path="/about" component={AboutPage} />
  </div>
);

export default App;
