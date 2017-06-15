/*
 * Unigram Website
 * Copyright © 2016-2017 Unigram <team@unigram.me>
 * Licensed under MIT 
 * (https://github.com/UnigramDev/unigram.me/blob/master/LICENSE)
 */
import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div className="navigation-root">
        <nav className="navbar fixed-top navbar-toggleable-md" id="main-nav">
          <div className="container">
            <a className="navbar-brand" href="#page-top">
              <img src="img/buttons/unigram.svg" alt="Unigram Logo"/>Unigram
            </a>
            <div className="collapse navbar-collapse" id="navbarExample">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#features">
                    <i className="mdl2 mdl2-favorite-list" aria-hidden="true"></i>Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#download">
                    <i className="mdl2 mdl2-download" aria-hidden="true"></i>Download
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#team">
                    <i className="mdl2 mdl2-people" aria-hidden="true"></i>Team
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://github.com/UnigramDev/Unigram">
                    <i className="mdl2 mdl2-document" aria-hidden="true"></i>Source code
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    <i className="mdl2 mdl2-accounts" aria-hidden="true"></i>Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <button className="navbar-toggler navbar-toggler-left" data-toggle="collapse" data-target="#navbarExample" type="button" aria-controls="navbarExample" aria-expanded="false" aria-label="Toggle navigation">
            <img src="img/buttons/menu.svg" width="26"/>
          </button>
        </nav>
      </div>
    );
  }
}

export default Navigation;