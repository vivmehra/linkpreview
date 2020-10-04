import React from "react";
import getUrls from "get-urls";
import LinkPreviewBox from "./LinkPreviewBox";
import InputBox from "../components/inputBox";

class LinkPreviewComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      previewUrls: [],
    };
  }
  handleUrlChange = (e) => {
    let urls = getUrls(e.target.value);
    this.setState({ previewUrls: [...urls] });
  };
  render() {
    return (
      <>
        <InputBox handleUrlChange={this.handleUrlChange} />
        <div className="previewContainer d-flex justify-content-center flex-wrap ml-6 mb-3 mt-3">
          {this.state.previewUrls.length > 0 &&
            this.state.previewUrls.map((url) => {
              return <LinkPreviewBox url={url} />;
            })}
        </div>
      </>
    );
  }
}
export default LinkPreviewComponent;
