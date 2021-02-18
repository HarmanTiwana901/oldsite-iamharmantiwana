import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    
    render() {
        if(this.props.mainState.show == true) {
            var blur1 = 'blur(5px)';
        } else {
            var blur1 = 'blur(0px)';
        }
        
        return (
           <div>
               <div style={{filter: blur1}} className="design_1-wrapper-bottom">
                    <div className="design_1-image-bottom">
                        <svg className="image-bottom" xmlns="http://www.w3.org/2000/svg" width="260" height="115" viewBox="0 0 260 115">
                        <g id="design_1" transform="translate(260) rotate(90)">
                            <rect id="Rectangle_1" data-name="Rectangle 1" width="22" height="260" fill="#f64c72"/>
                            <rect id="Rectangle_2" data-name="Rectangle 2" width="22" height="197" transform="translate(31)" fill="#ce2a4f"/>
                            <rect id="Rectangle_3" data-name="Rectangle 3" width="22" height="246" transform="translate(62)" fill="#f64c72"/>
                            <rect id="Rectangle_4" data-name="Rectangle 4" width="22" height="88" transform="translate(93)" fill="#ce2a4f"/>
                        </g>
                        </svg>
                    </div>
                </div>
        
                <div className="footer-wrapper">
                <div className="footer-filler">

                </div>
                <h5 className="footer-text">Copyright © 2021 harmantiwana Inc. All Rights Reserved</h5>
                <div className="footer-filler">
                    
                </div>
                </div>
           </div>
        );
    }
}

export default Footer;