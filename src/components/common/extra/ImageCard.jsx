import React from "react";

const ImageCard = props => {
  return (
    <div className="col-md-4 mb-5">
      <div class="card" style={{ width: "22rem" }}>
        <img src={props.url} class="card-img-top" alt="..." />
        <div class="card-body">
          <h3 class="card-text">{props.head}</h3>
          <p class="card-text">{props.para}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
