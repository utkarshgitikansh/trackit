import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

import { render } from "react-dom";
import { MainContainer } from "../containers/MainContainer.js";

class StoryStatus extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // let { data } = this.props;
    let { name, value1, value2, value3, image } = this.props;

    return (
      <div>
        <Card>
          <div class="d-flex flex-row" class="card_color">
            <div class="story_body">
              <CardBody border="secondary">
                <div class="story_header">
                  <CardTitle class="text-center">
                    <b>{name}</b>
                  </CardTitle>
                </div>
                <div class="d-flex flex-column" class="story_text">
                  <CardText>{value1}</CardText>
                  <a href={value2} target="_blank">
                    {value2}
                  </a>
                </div>
              </CardBody>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default StoryStatus;
