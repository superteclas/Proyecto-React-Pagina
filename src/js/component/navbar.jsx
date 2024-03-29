import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-body-tertiary">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <a className="navbar-brand custom-text ml-3" href="#">Start React!</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link white-text" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link white-text" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link white-text" aria-disabled="true">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link white-text" aria-current="page" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
