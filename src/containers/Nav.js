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
        <div class="navwidth">
          <nav className="navbar navbar-dark bg-dark mb-3 navwidth">
            <a className="navbar-brand" href="#">
              <h1>
                <span className="badge badge-secondary">
                  TRAKKITT : COVID-19 UPDATES (LIFESOUL)
                </span>
              </h1>
            </a>
            <div class="pull-right" class="badge badge-light">
              <h4>©utkarshgitikansh</h4>
            </div>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default NavContainer;
