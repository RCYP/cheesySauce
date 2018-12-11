import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from '../assets/logo.svg';
import '../CSS/App.css';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import AboutUs from './AboutUs';
import CheckOut from './CheckOut';
import Careers from './Careers';
import UserAccounts from './UserAccounts';
import PrivacyPolicy from './PrivacyPolicy.js';
import Cart from './Cart';
import firebase from 'firebase';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            cards: [],
            isLoggedIn: false,
            user:{
                email: "sad",
                password: "sad",
                photo: "",
                phone: ""
            }
        }
        firebase.auth().onAuthStateChanged((user)=>{
            if(user) this.setState({user:{
                email: user.email,
                password: user.password,
                photo: user.photoURL,
                phone: user.phoneNumber
            }});
        });
    }
    componentWillMount(){
        let menu=<Menu cards={this.state.cards} removeItem={this.removeItem.bind(this)} addItem={this.addToCartEvent.bind(this)} changeBody={this.changeBody.bind(this)}/>;
        this.setState({
            displayedBody: menu,
            renderedElements: [menu,
                React.createElement(AboutUs),
                React.createElement(Careers),
                <UserAccounts user={this.state.user} signin={this.signin.bind(this)} signup={this.signup.bind(this)} signout={this.signout.bind(this)}/>,
                <CheckOut cards={this.state.cards} removeItem={this.removeItem.bind(this)} addItem={this.addToCartEvent.bind(this)}/>,
                React.createElement(PrivacyPolicy),
                <Cart items={this.state.cards} removeItem={this.state.removeItem} addItem={this.state.addItem}/>
            ]
        });
    }
    signin(provider){
        switch(provider){
            case "google":var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider)
            .then((error)=>alert(error))
            .catch((error)=>alert(error));
            break;
            default:firebase.auth().signInWithEmailAndPassword(String(this.state.email),String(this.state.password))
            .then(alert("success")).catch(e=>alert(e));
            break;
        }
        
    }
    signup(provider){
        switch(provider){
            case "google": var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider)
            .then((error)=>alert(error))
            .catch((error)=>alert(error));
            break;
            default: firebase.auth().createUserWithEmailAndPassword(String(this.state.email),String(this.state.password));
            break;
        }
    }
    signout(){
        firebase.auth().signOut().catch();
    }
    addToCartEvent(cardInfo,event){
        alert("sd");
        let temp=this.state.cards;
        let quantityIncreased=0;
        if(temp.length==0){temp.push(cardInfo);temp[temp.length-1].quantity=1;quantityIncreased=1;}
        else {
            let isFound=false;
            temp.forEach((element,index)=>{
                if(element.id==cardInfo.id){isFound=true;temp[index].quantity++;quantityIncreased=temp[index].quantity;}
            });
            if(!isFound){temp.push(cardInfo);temp[temp.length-1].quantity=1;quantityIncreased=1;}
        }
        this.setState({cards: temp});
    }
    removeItem(itemId,event){
        let temp=this.state.cards;
        temp.forEach((element,index) => {
            if(element.id===itemId)
            if(element.quantity==1)temp.splice(index,1);
            else if(element.quantity>0)temp[index].quantity--;
        });
        this.setState({cards: temp});
    }
    changeBody(newBody){
        let temp=<p>Nothing was Loaded.</p>
        switch(newBody){
            case "menu":temp=this.state.renderedElements[0];
            break;
            case "aboutus":temp=this.state.renderedElements[1];
            break;
            case "cart":temp=this.state.renderedElements[4];
            break;
            case "careers":temp=this.state.renderedElements[2];
            break;
            case "useraccounts":temp=this.state.renderedElements[3];
            break;
            case "privacypolicy":temp=this.state.renderedElements[5];
            break;
        }
        this.setState({displayedBody: temp});
    }
    render() {
    return (
<div>      
<Header changeBody={this.changeBody.bind(this)} userInfo={this.state.user}/>
<div id="mainBody">
{this.state.displayedBody}
</div>
<Footer changeBody={this.changeBody.bind(this)}/>
</div>
    );
  }
}
export default App;