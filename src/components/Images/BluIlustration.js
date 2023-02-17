import React from "react";

const BluIlustration = (props) => {
  return (
    <div className="container">
      <img className="ilustration-img" src={props.src} alt={props.alt} />
    </div>
  );
};

export default BluIlustration;
