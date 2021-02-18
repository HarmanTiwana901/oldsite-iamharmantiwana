import React, { useState, useEffect } from 'react';
import Prices from '../../modal/prices/Prices';

import './Header.css';

import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';
  
class Header extends React.Component {
    constructor(props) {
        super(props); 
        
        
        
     
    }
  

    render() {
        if(this.props.mainState.show == true) {
            var blur1 = 'blur(5px)';
            var btnState = 'none'
        } else {
            var blur1 = 'blur(0px)';
            var btnState = 'auto'
        }
        
        return (
            <div style={{filter: blur1}} className="design_1-wrapper-header">
                <div className="design_1-image-header">
                    <svg className="image-top" id="design_1" xmlns="http://www.w3.org/2000/svg" width="115" height="260" viewBox="0 0 115 260">
                    <rect id="Rectangle_1" data-name="Rectangle 1" width="22" height="260" fill="#f64c72"/>
                    <rect id="Rectangle_2" data-name="Rectangle 2" width="22" height="197" transform="translate(31)" fill="#ce2a4f"/>
                    <rect id="Rectangle_3" data-name="Rectangle 3" width="22" height="246" transform="translate(62)" fill="#f64c72"/>
                    <rect id="Rectangle_4" data-name="Rectangle 4" width="22" height="88" transform="translate(93)" fill="#ce2a4f"/>
                    </svg>
                </div>
                <div className="hireme-wrapper">
                    <div>
                        <h4>LOOKING TO HIRE ME FOR WEB DEVELOPMENT?</h4>
                    </div>
                    <div>
                        <button id="hireme-btn" style={{pointerEvents: btnState}}><Link onClick={this.props.changeShow} to="/hireme" className="hireme-text">HIRE ME</Link></button>
                    </div>
                </div>
                
                
            </div>
        );
    }
}

export default Header;