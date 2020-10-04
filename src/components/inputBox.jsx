import React from "react";
const inputBox = (props) => {
  return (
    <input
      type="text"
      id="urlInputs"
      onChange={(e) => props.handleUrlChange(e)}
      className="w-50 m-5"
      placeholder="Enter a string which has url\urls to preview"
    />
  );
};
export default inputBox;
