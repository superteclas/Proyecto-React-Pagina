import React from "react";

const Jumbotron = () => {
  return (
    <div className="jumbotron custom-jumbotron" style={{ padding: '2rem 1rem', maxWidth: '100%', overflow: 'hidden' }}>
      <h1 className="display-4 custom-h1">A Warm Welcome!</h1>
      <p className="lead custom-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>
      <a className="btn btn-primary btn-lg custom-button" href="#" role="button">Call to action!</a>
    </div>
  );
};

export default Jumbotron;
