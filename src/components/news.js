import React from "react";
import Loader from "./loader.js";
import Cards from "./cards";
import Col from "reactstrap/lib/Col";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: [],
      headline: [],
      detail: [],
      image: [],
      loading: true,
    };
  }

  componentDidMount() {
    fetch("https://lifesoul.herokuapp.com/news", {
      method: "GET",
    })
      .then((res) => res.json())
      .then(
        (result) => {
          result.headLines.forEach((element) => {
            this.setState({
              headline: [...this.state.headline, element],
              //   detail: [...this.state.detail, element.content],
              //   image: [...this.state.image, element.image],
            });
          });

          result.content.forEach((element) => {
            this.setState({
              detail: [...this.state.detail, element],
            });
          });

          result.image.forEach((element) => {
            this.setState({
              image: [...this.state.image, element],
            });
          });

          for (const [index, element] of result.headLines.entries()) {
            this.setState({ count: [...this.state.count, index] });
          }
        },

        (error) => {
          this.setState({});
        }
      );
    this.state.loading = false;
  }

  render() {
    const { count, headline, detail, image } = this.state;

    let datas = this.state.count.map((index) => {
      return (
        // <Col className="basic_config">

        <Cards
          name={headline[index]}
          value1={detail[index]}
          image={image[index]}
          // value3={value3[index]}
        />
      );
    });

    if (this.state.loading) {
      return (
        <div class="center">
          <Loader />;
        </div>
      );
    } else {
      return (
        <div>
          <h2>
            <span class="badge badge-info">NEWS UPDATE</span>
          </h2>
          <div class="scroll_main">{datas}</div>
        </div>
      );
    }
  }
}

export default News;
