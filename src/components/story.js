import React from "react";
import Loader from "./loader.js";
import Cards from "./cards";
import Col from "reactstrap/lib/Col";
import StoryStatus from "./story_status.js";

class Story extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: [],
      headline: [],
      detail: [],
      url: [],
      loading: true,
    };
  }

  componentDidMount() {
    fetch("https://updateitt.herokuapp.com/googlenews", {
      method: "GET",
    })
      .then((res) => res.json())
      .then(
        (result) => {
          result.articles.forEach((element) => {
            this.setState({
              headline: [...this.state.headline, element.title],
            });
          });
          result.articles.forEach((element) => {
            this.setState({
              detail: [...this.state.detail, element.description],
            });
          });
          result.articles.forEach((element) => {
            this.setState({
              url: [...this.state.url, element.url],
            });
          });

          for (const [index, element] of result.articles.entries()) {
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
    const { count, headline, detail, url, loading } = this.state;

    let datas = this.state.count.map((index) => {
      return (
        // <Col className="basic_config">

        <StoryStatus
          name={headline[index]}
          value1={detail[index]}
          value2={url[index]}
        />
      );
    });

    if (this.state.loading) {
      return (
        <div class="center">
          <Loader />
        </div>
      );
    } else {
      return (
        <div>
          <h2>
            <span class="badge badge-success">SUCCESS STORIES</span>
          </h2>
          <div class="scroll_mid">{datas}</div>
        </div>
      );
    }
  }
}

export default Story;
