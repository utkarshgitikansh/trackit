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

import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

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
      message: "Loading the world ...",
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

    setTimeout(() => {
      this.setState({
        message: "Stay home stay safe ...",
      });
    }, 5000);

    setInterval(() => {
      this.setState({
        message: "Almost there ...",
      });
    }, 10000);

    setInterval(() => {
      this.setState({
        status: true,
      });
    }, 20000);
  }

  render() {
    // const { status } = this.state;
    // const value = 66;

    if (this.state.status) {
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
            <h2>
              <span class="badge badge-secondary">LOCKDOWN</span>
            </h2>
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
            </div>
            <div class="p-2 bd-highlight" class="scroll_side">
              <Status />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div class="center">
          <div class="d-flex flex-column">
            <CircularProgress />
            {/* <CircularProgress color="secondary" /> */}
            <h1>{this.state.message}</h1>
          </div>
        </div>
      );
    }
  }
}

export default MainContainer;
