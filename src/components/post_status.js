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

class PostStatus extends React.Component {
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
            <div class="card_body">
              <CardBody border="secondary">
                <div class="card_header">
                  <CardTitle>
                    <b>{name}</b>
                  </CardTitle>
                </div>
                <div class="d-flex flex-column" class="card_text">
                  <CardText>{value1}</CardText>
                  <CardText>{value2}</CardText>
                </div>
              </CardBody>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default PostStatus;
