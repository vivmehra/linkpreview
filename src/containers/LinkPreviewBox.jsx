import React from "react";
import Previewbox from "../components/previewbox";
import axios from "axios";

class LinkPreviewBox extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      linkPreviewResponse: {},
    };
    this.getresponse = this.getresponse.bind(this);
  }
  componentDidMount() {
    this.getresponse(this.props.url);
  }
  componentDidUpdate(prevProps) {
    if (this.props.url !== prevProps.url) {
      this.getresponse(this.props.url);
      this.setState({ linkPreviewResponse: {} });
    }
  }
  async getresponse(url) {
    let res = null;
    await axios
      .get("http://localhost:4000/screenshot", {
        params: {
          url: url,
        },
      })
      .then(function (response) {
        res = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    let resObj = { ...this.state.linkPreviewResponse };

    resObj = { ...res };
    this.setState({ linkPreviewResponse: { ...resObj } });
  }

  render() {
    return <Previewbox linkPreview={this.state.linkPreviewResponse} />;
  }
}
export default LinkPreviewBox;
