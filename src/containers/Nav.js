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
import { Navbar, Nav, NavItem } from "react-bootstrap";

class NavContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark mb-3">
          <a className="navbar-brand" href="#">
            <h1>
              <span className="badge badge-secondary">
                LIFESOUL: COVID-19 UPDATES
              </span>
            </h1>
          </a>
          <div class="pull-right" class="badge badge-light">
            <h4>©utkarshgitikansh</h4>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavContainer;
