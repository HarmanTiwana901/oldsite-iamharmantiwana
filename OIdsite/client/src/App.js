import React from 'react';

// css
import './App.css';

// react router

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';


// template components
import Header from './components/template/header/Header';
import Footer from './components/template/footer/Footer';

// components
 
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import Prices from './components/modal/prices/Prices';
import Portfolio from './components/portfolio/Portfolio';
import { Component } from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeShow = this.changeShow.bind(this);
    if(this.state) {
      
    } else {
      this.state = {
        show: null
      }
    }
  }

  changeShow() {
    if(this.state.show == true) {
      this.setState({
        show: false
      })
    } else {
      this.setState({
        show: true
      })
    }

    console.log(this.state);
  }

 

  render() {
    return (
      <Router>
      <div style={{overflowx: 'scroll'}} className="ht_app">
        
        <Header mainState={this.state} changeShow={this.changeShow}/>
        <div className="main-wrapper">   
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/contact" component={Contact}/>
              <Route exact path="/portfolio" component={Portfolio}/>
              <Route exact path="/hireme" component={() => <Prices changeShow={this.changeShow}/>}/>
            </Switch>
          
        </div>
        <Footer mainState={this.state}/>
      </div>
    </Router>
    )
  }
}

export default App;
