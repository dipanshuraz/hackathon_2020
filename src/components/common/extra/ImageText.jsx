import React from "react";

const ImageText = (props) => {
  return (
    <div className="col-5 ">
      <h1>{props.head}</h1>

      <small>
        {props.para}
      </small>
    </div>
  );
};

export default ImageText;
