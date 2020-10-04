import React from "react";
import _ from "lodash";
const previewbox = (props) => {
  return (
    <div className="previewCard w-50 p-2 m-3 bd-highlight border border-primary">
      {_.isEmpty(props.linkPreview) ? (
        <h4 className="mt-5">Loading...</h4>
      ) : (
        <>
          <div className="imgContainer">
            <img src={props.linkPreview.img} alt={props.linkPreview.title} />
          </div>
          <div className="cardContent">
            <h4 className="cardTitle">{props.linkPreview.title}</h4>
            <div className="cardDescription">
              {props.linkPreview.description}
            </div>
            <footer className="cardDescription">
              <a
                href={`https:\\www.${props.linkPreview.domain}`}
              >{`https:\\www.${props.linkPreview.domain}`}</a>
            </footer>
          </div>
        </>
      )}
    </div>
  );
};
export default previewbox;
