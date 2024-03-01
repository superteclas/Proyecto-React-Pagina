import React from 'react';

const Card = ({ titulo, texto, boton }) => {
  return (
    <div className="card custom-card" style={{ width: '100%', margin: '0.5rem' }}>
      <img src="https://via.placeholder.com/500" className="card-img-top" alt="..." />
      <div className="card-body d-flex flex-column justify-content-between text-center">
        <h6 className="card-title">{titulo}</h6>
        <p className="card-text">{texto}</p>
        <div className="mt-auto btn-container">
          <a href="#" className="btn btn-primary btn-sm d-block mx-auto" style={{ fontSize: '0.6rem', padding: '0.2rem 0.4rem', maxWidth: '6rem' }}>{boton}</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
