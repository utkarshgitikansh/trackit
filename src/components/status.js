import React from "react";
import CardStatus from "./cards_status.js";
import Container from "reactstrap/lib/Container";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";
import Loader from "./loader.js";

class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: [],
      name: [],
      value1: [],
      value2: [],
      value3: [],
      loading: true,
      search: "",
      test: [],
      search_task: false,
      ind: -1,
    };
  }

  componentDidMount() {
    fetch("https://updateitt.herokuapp.com/data", {
      method: "GET",
    })
      .then((res) => res.json())
      .then(
        (result) => {
          result.data.forEach((element) => {
            this.setState({
              name: [...this.state.name, element.location],
              value1: [...this.state.value1, element.confirmed],
              value2: [...this.state.value2, element.dead],
              value3: [...this.state.value3, element.recovered],
            });
          });

          for (const [index, element] of result.data.entries()) {
            this.setState({ count: [...this.state.count, index] });
          }
        },

        (error) => {
          this.setState({});
        }
      );
    this.state.loading = false;
  }

  //Search for an item

  onChange = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const {
      name,
      count,
      value1,
      value2,
      value3,
      data,
      search,
      test,
      ind,
      search_task,
    } = this.state;

    let datas = this.state.count.map((index) => {
      return (
        // <Col className="basic_config">
        <CardStatus
          name={name[index]}
          value1={value1[index]}
          value2={value2[index]}
          value3={value3[index]}
        />
        // </Col>
      );
    });

    this.state.ind = -1;

    for (const [ind1, element] of this.state.name.entries()) {
      this.state.ind = -1;
      if (element.toLowerCase().includes(this.state.search.toLowerCase())) {
        this.state.ind = ind1;
        break;
      } else {
        this.state.ind = -1;
      }
    }

    if (this.state.loading) {
      return (
        <div class="center">
          <Loader />;
        </div>
      );
    } else {
      return (
        <div class="basic_config" class="d-flex flex-column">
          {/* <div class="d-flex flex-column"> */}
          <h2>
            <span class="badge badge-danger">STATUS</span>
          </h2>
          <div>
            <div class="d-flex justify-content-center h-100">
              <div class="searchbar">
                <input
                  class="search_input"
                  type="text"
                  name=""
                  onChange={this.onChange}
                  placeholder="Search..."
                ></input>
                <a href="#" class="search_icon">
                  <i class="fas fa-search"></i>
                </a>
              </div>
            </div>
          </div>
          {/* <div class="basic_config"> */}
          <div>
            <CardStatus
              name="Search Result :"
              value1={value1[ind]}
              value2={value2[ind]}
              value3={value3[ind]}
            />
          </div>
          <div>
            {/* <div class="basic_config"> */}
            <div>{datas}</div>
          </div>
        </div>
      );
    }
  }
}

export default Status;
