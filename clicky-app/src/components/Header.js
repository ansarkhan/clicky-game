import React from 'react';
import './App.css';

const Header = (props) => {

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand">Clicky Game</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link">Score: 0<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link">High Score: 0</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    );
  };
  
  export default Header;