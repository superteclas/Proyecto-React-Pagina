import React from 'react';

const Card = () => {
  return (
    <div className="card custom-card" style={{ width: '12rem'}}>
      <img src="https://plus.unsplash.com/premium_photo-1706142540630-51555d91b574?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..." />
      <div className="card-body d-flex flex-column justify-content-between text-center">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Lorem insum dolor sit amet consectetur e olpisicingel Saniente asse necessitatibus Magio.</p>
        <div className="mt-auto btn-container">
          <a href="#" className="btn btn-primary d-block mx-auto">Find More</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
