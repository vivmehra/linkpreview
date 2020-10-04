import React from "react";

import "./App.css";

import LinkPreviewComponent from "./containers/LinkPreviewComponent";

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <LinkPreviewComponent />
      </div>
    );
  }
}

export default App;
