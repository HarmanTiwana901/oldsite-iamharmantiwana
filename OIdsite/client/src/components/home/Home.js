import React from 'react';
import './Home.css';



import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';
  

import Avatar from './images/Avatar.png';

class Home extends React.Component {
    componentDidMount() {
        
    }


    render() {
        return (
            <div id="home-wrapper">
                
                <div id="avatar-wrapper">
                    <img src={Avatar} alt=":("></img>
                </div>
                <div id="about-wrapper">
                    <h1>
                        Hi, I'm Harman Tiwana
                    </h1>
                    <p>
                        I am an aspiring young web developer who strives to provide quality websites to those who need it in an efficent detailed oriented and professional manner.
                    </p>
                </div>
                <div id="btn-wrapper">
                    <Link id="btn-portfolio" to="/portfolio" className="btn-core"><span>VIEW PORTFOLIO</span></Link>
                    <Link id="btn-contact" to="/contact" className="btn-core"><span>CONTACT ME</span></Link>
                </div>
             
            </div>
            
        );
    }
}

export default Home;