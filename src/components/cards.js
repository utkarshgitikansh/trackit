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

class Cards extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // let { data } = this.props;
    let { name, value1, value2, value3, image } = this.props;

    return (
      <div>
        <Card>
          <div class="d-flex flex-column" class="news_body">
            <div>
              <CardBody>
                <div class="news_title">
                  <CardTitle>
                    <b>{name}</b>
                  </CardTitle>
                </div>
                <div class="d-flex flex-row">
                  <div>
                    <img src={image} class="img-responsive" />
                  </div>
                  <div class="news_text">
                    <CardText>{value1}</CardText>
                    <CardText>{value2}</CardText>
                    <CardText>{value3}</CardText>
                  </div>
                </div>
              </CardBody>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default Cards;
