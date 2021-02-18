import React from 'react';
import './Contact.css';

// service
import {sendEmail} from '../../services/EmailService';

import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
    useHistory,
  } from 'react-router-dom';
  
class Contact extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            fullname: "",
            email: "",
            inquiry: "",
            errorMessage: ""
        }

        this.handleFullName = this.handleFullName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleInquiry = this.handleInquiry.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFullName(e) {
        this.setState({
            fullname: e.target.value
        })

        
    }

    handleEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    handleInquiry(e) {
        this.setState({
            inquiry: e.target.value
        })
    }
    
    handleSubmit(e) {
        // submit and email our data
        e.preventDefault();
        // check if fields are valid
        if(this.state.fullname == "" || this.state.email == "" || this.state.inquiry == "") {
            this.setState({
                errorMessage: '* One or more fields are missing.'
            })
        } else {
            this.setState({
                errorMessage: ''
            })
            alert("Your email was successfully sent.");
            sendEmail(this.state);
        }
    }

    render() {
      
          
        return (
            <div className="page-loadAnimation">
                
               <div className="back-btn-wrapper">
                    <button className="back-btn" onClick={this.handleClick}><Link className="back-inside" to="/">BACK</Link></button> 
                    
               </div>
               <div id="title-wrapper">
                    <h1 className="header">Find my page interesting?</h1>
                    <p className="sub-header">contact me personally using the form below.</p>
               </div>
                <div id="contact-wrapper">
                    <form method="POST">
                        <input id="fname" type="text" onChange={this.handleFullName} name="fullname" placeholder="full name"></input><br></br>
                        <input id="eaddress" type="text" onChange={this.handleEmail} name="emailaddress" placeholder="email address"></input><br></br>
                        <textarea id="message" rows="3" onChange={this.handleInquiry} name="message" placeholder="your inquiry"></textarea><br></br>
                        <h6 id="field-error">{this.state.errorMessage}</h6>
                        <input type="submit" id="submit-email" onClick={this.handleSubmit} value="SUBMIT EMAIL"></input>
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;