/*
 * Unigram Website
 * Copyright © 2016-2017 Unigram <team@unigram.me>
 * Licensed under MIT 
 * (https://github.com/UnigramDev/unigram.me/blob/master/LICENSE)
 */

/**
 * @file A simple button that will redirect to the support page. It should only be used in the 
 * home page.
 * @see {@link index.js|index}
 * @author Matei Bogdan Radu <matei.radu.92@gmail.com>
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import './SupportDigest.css';

class SupportDigest extends Component {
  render() {
    return (
      <div className="supportdigest-root">
        <div className="container">
          <h1 className="supportdigest-header">Need any help?</h1>
          <div className="supportdigest-subheader sh1">
            Make a feature request or report a bug.
          </div>
          <Link className="btn btn-primary" to={"/support"}>Ask for support <i className="mdl2 mdl2-scroll-chevron-right-bold-legacy" aria-hidden="true"></i></Link>
        </div>
      </div>
    );
  }
}

export default SupportDigest;