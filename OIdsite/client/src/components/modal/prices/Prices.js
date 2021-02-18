// modal

import React from 'react';

import './Prices.css';


import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

// import images

import webdev from './images/settings.png';
import uidesign from './images/sketch.png';
import removebutton from './images/remove-button.png';

class Prices extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div id="prices-wrapper">
               <Link onClick={this.props.changeShow} to="/"><img className="exit-btn" src={removebutton} height="25px"></img></Link>
               <div id="webdev-wrapper">
               
                    <div className="title-wrapper">
                        <div className="icon-wrapper">
                            <img src={webdev} height="55px" alt=":("></img>
                        </div>
                        <div className="service-name-wrapper">
                            <h1>WEBSITE DEVELOPMENT</h1>
                            <h6>STARTING AT $80.00 CAD</h6>
                        </div>
                    </div>
                    <div className="service-description-wrapper">
                    Need a standard website for your private or public business? Starting at<br></br>
                    only $80.00 CAD, you can have your very own custom website with the smell<br></br>
                    of total satisfaction.
                    </div>
                    <div className="hireme-btn-wrapper">
                    <button className="git-btn"><Link onClick={this.props.changeShow} className="git-btn" to="/contact">GET IN TOUCH</Link></button>
                    </div>
               </div>
               <div id="uidesign-wrapper">
                    <div className="title-wrapper">
                        <div className="icon-wrapper">
                            <img src={uidesign} height="55px" alt=":("></img>
                        </div>
                        <div className="service-name-wrapper">
                            <h1>UI/UX DESIGN</h1>
                            <h6>STARTING AT $45.00 CAD</h6>
                        </div>
                    </div>
                    <div className="service-description-wrapper">
                    Just need a mockup or simple design layout for a website you'll be<br></br>
                    purchasing in the future? Look no further, starting only at $45.00 CAD, a <br></br>
                    professional design awaits you.
                    </div>
                    <div className="hireme-btn-wrapper">
                        <button id="git-btnparent" className="git-btn"><Link onClick={this.props.changeShow} className="git-btn" to="/contact">GET IN TOUCH</Link></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Prices;