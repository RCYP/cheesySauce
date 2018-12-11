import React from 'react';
import '../CSS/Footer.css';

class Footer extends React.Component{
    render(){
        return(
            <footer>
                <div className="footer-links">
                    <a className="links" onClick={()=>this.props.changeBody("aboutus")}>About US</a>
                    <a className="links" onClick={()=>this.props.changeBody("careers")}>Careers</a>
                    <a className="links" onClick={()=>this.props.changeBody("privacypolicy")}>Privacy Policy</a>
                </div>
                <div className="copyright">©{new Date().getFullYear()} Cheesy Sauce Private Limited. All rights reserved.</div>
            </footer>
        );
    }
}
export default Footer;