import React from "react";

const Image = props => {
  return (
    <div className="col-7">
      <img src={props.url} className="img-fluid" />
    </div>
  );
};

export default Image;
