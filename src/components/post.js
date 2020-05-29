import React from "react";
import Loader from "./loader.js";
import Cards from "./cards";
import Col from "reactstrap/lib/Col";
import CardStatus from "./cards_status.js";
import PostStatus from "./post_status.js";

import CircularProgress from "@material-ui/core/CircularProgress";

const htmlToText = require("html-to-text");

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: [],
      headline: [],
      detail: [],
      loading: true,
    };
  }

  componentDidMount() {
    fetch(
      "https://www.googleapis.com/blogger/v3/blogs/8337522737151010272/posts?key=AIzaSyCeHQxTnHn6e8PE5XU2g0rB6zp5qi1a1K0",
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then(
        (result) => {
          result.items.forEach((element) => {
            this.setState({
              headline: [...this.state.headline, element.title],
            });
          });

          result.items.forEach((element) => {
            // let s = element.content.replace(/<[^>]*>?/gm, "");
            let s = element.content.replace(/(<([^>]+)>)/gi, "");
            let p = s.replace("&nbsp;", "      ");

            this.setState({
              detail: [...this.state.detail, p],
            });
          });

          for (const [index, element] of result.items.entries()) {
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
    const { count, headline, detail, loading } = this.state;

    let datas = this.state.count.map((index) => {
      return (
        // <Col className="basic_config">

        <PostStatus name={headline[index]} value1={detail[index]} />
      );
    });

    if (this.state.loading) {
      return (
        <div class="center">
          <CircularProgress />
          {/* <CircularProgress color="secondary" /> */}
        </div>
      );
    } else {
      return (
        <div>
          <h2>
            <span class="badge badge-primary">MY STORY</span>
          </h2>
          <div class="scroll_mid">{datas}</div>
        </div>
      );
    }
  }
}

export default Post;
