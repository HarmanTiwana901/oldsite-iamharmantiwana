import React from 'react';

import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

import './Portfolio.css';

class Portfolio extends React.Component {
    render() {
        return (
            <div id="portfolio-wrapper" className="page-loadAnimation">
                <div className="back-btn-wrapper">
                    <button className="back-btn" onClick={this.handleClick}><Link className="back-inside" to="/">BACK</Link></button> 
                </div>

            </div>  
        );
    }
}

export default Portfolio;