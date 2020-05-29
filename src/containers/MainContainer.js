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

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import Status from "../components/status.js";
import News from "../components/news.js";
import Post from "../components/post.js";
import Story from "../components/story.js";

class MainContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      date: new Date().toDateString,
      status: false,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        curTime: 31 - new Date().getDate(),
        curTime2: 24 - new Date().getHours(),
        curTime3: 60 - new Date().getMinutes(),
        curTime4: 60 - new Date().getSeconds(),
      });
    }, 1000);

    // setInterval(() => {
    //   this.setState({
    //     status: true,
    //   });
    // }, 15000);
  }

  render() {
    // const { status } = this.state;
    // const value = 66;

    // if (this.state.status) {
    return (
      <div class="d-flex flex-row">
        <div class="d-flex flex-column margin">
          <News />
          <div>
            <div class="d-flex bd-highlight">
              <div class="margin">
                <Story />
              </div>
              <div class="margin">
                <Post />
              </div>
            </div>
            {/* <div class="d-flex flex-column">
                <Story />
              </div>
              <div class="d-flex flex-column">
                <Post />
              </div> */}
          </div>
        </div>
        <div class="d-flex flex-column">
          <div class="p-2 bd-highlight" class="basic_config_4">
            <Card
              width="auto"
              height="auto"
              style={{ flex: 1, backgroundColor: "grey" }}
            >
              <CardBody>
                <CardTitle>
                  <b>Countdown to lockdown:</b>
                  <h4>#StayHomeStaySafe</h4>
                </CardTitle>

                <CardText>
                  {this.state.curTime}d : {this.state.curTime2}h :{" "}
                  {this.state.curTime3}m : {this.state.curTime4}s
                </CardText>
              </CardBody>
            </Card>
            {/* <iframe
                src="http://free.timeanddate.com/countdown/i78pyxlo/n176/cf100/cm0/cu4/ct0/cs0/ca0/cr0/ss0/cac6e7f80/cpc000/pc96ceb4/tc66c/fs100/szw320/szh135/tatCountdown%20to%20lockdown/tacfe8a71/tptTime%20since%20Event%20started%20in/tpc000/mat%23StayHomeStaySafe/mac708090/mpc000/iso2020-05-03T23:59:59/bas3/bac6e7f80"
                allowTransparency="true"
                frameborder="0"
                width="auto"
                height="auto"
              ></iframe> */}
          </div>
          <div class="p-2 bd-highlight" class="scroll_side">
            <Status />
          </div>
        </div>
      </div>
    );
  }
  // else {
  //   return (
  //     <div class="loader">
  //       <CircularProgressbar value={value} text={`${value}%`} />
  //     </div>
  //   );
  // }
  // }
}

export default MainContainer;
