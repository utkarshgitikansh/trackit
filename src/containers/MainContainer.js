import "bootstrap/dist/css/bootstrap.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

import React from "react";
import Cards from "../components/cards.js";
import Container from "reactstrap/lib/Container";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";

import Status from "../components/status.js";
import News from "../components/news.js";
import Timer from "react-compound-timer";
import Post from "../components/post.js";
import Story from "../components/story.js";

class MainContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div class="d-flex flex-row">
        <div class="d-flex flex-column">
          <News />
          <div class="d-flex flex-row">
            <Story />
            <Post />
          </div>
        </div>
        <div class="d-flex flex-column">
          <div class="p-2 bd-highlight" class="basic_config_4">
            <iframe
              src="http://free.timeanddate.com/countdown/i78pyxlo/n176/cf100/cm0/cu4/ct0/cs0/ca0/cr0/ss0/cac6e7f80/cpc000/pc96ceb4/tc66c/fs100/szw320/szh135/tatCountdown%20to%20lockdown/tacfe8a71/tptTime%20since%20Event%20started%20in/tpc000/mat%23StayHomeStaySafe/mac708090/mpc000/iso2020-05-03T23:59:59/bas3/bac6e7f80"
              allowTransparency="true"
              frameborder="0"
              width="326"
              height="141"
            ></iframe>
          </div>
          <div class="p-2 bd-highlight" class="scroll_side">
            <Status />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
