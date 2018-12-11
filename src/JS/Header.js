import React from 'react';
import '../CSS/Header.css';
import Menu from './Menu';
import AboutUs from './AboutUs';

class Header extends React.Component{
    constructor(props){
        super(props);
        let menu=React.createElement(<Menu/>);
        let aboutUs=React.createElement(<AboutUs/>);
        this.openAboutUS=this.openAboutUS.bind(this);
        this.closeNavigantionDrawer=this.closeNavigantionDrawer.bind(this);
    }
    openNavigantionDrawer(){
        document.getElementsByClassName("navigationDrawer")[0].style.width = "40vw";
        document.getElementsByClassName("navigationHider")[0].style.width = "60vw";
    }
    closeNavigantionDrawer(){
        document.getElementsByClassName("navigationDrawer")[0].style.width = "0vw";
        document.getElementsByClassName("navigationHider")[0].style.width = "0vw";
    }
    openAboutUS(){
        console.log("Sd")
        this.closeNavigantionDrawer();
        React.replaceChild(this.props.displayedBody,this.aboutUs);
        //React.getElementById("mainBody")
        //.replaceChild(React.createElement(<AboutUs/>),React.getElementById("mainBody").firstChild)
    }
    render(){
        return(
            <header>
                <button className="header-navBar" onClick={this.openNavigantionDrawer}></button>
                <span className="header-title">Cheesy Sauce</span>
                <button className="header-login" onClick={()=>this.props.changeBody("useraccounts")}></button>
                <div className="navigationHider" onClick={this.closeNavigantionDrawer}></div>
                <div className="navigationDrawer">
                <div class="navigationHeader">
                    <button class="navigationClose" onClick={this.closeNavigantionDrawer}></button>
                    <div className="SiteMapText">SiteMap</div>
                </div>
                <a class="links" onClick={()=>this.props.changeBody("menu")}>Menu</a>
                <a class="links" onClick={()=>this.props.changeBody("cart")}>Cart</a>
                <a class="links" onClick={()=>this.props.changeBody("useraccounts")}>User Account</a>
                <a class="links" onClick={()=>this.props.changeBody("aboutus")}>About Us</a>
                <a class="links" onClick={()=>this.props.changeBody("careers")}>Careers</a>
                </div>
            </header>
        );
    }
}
export default Header;