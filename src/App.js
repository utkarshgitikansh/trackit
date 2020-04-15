import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import MainContainer from "../src/containers/MainContainer.js";
import Count from "../src/components/count.js";
import Status from "../src/components/status.js";
import News from "../src/components/news.js";
import Cards from "../src/components/cards.js";
import NavContainer from "./containers/Nav.js";

function App() {
  return (
    <div className="App">
      <NavContainer />
      <MainContainer />
    </div>
  );
}

export default App;
