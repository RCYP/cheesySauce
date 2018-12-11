import React from 'react';
import '../CSS/UserAccounts.css';
import firebase from 'firebase';
import ReactDOM from 'react-dom';
class UserAccounts extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        let temp=this.props.user.email
        //TODO: not detecting input tags
        document.getElementById("email").value=temp;
        temp=this.props.user.password;
        document.getElementById("password").value=temp;alert(this.props.user.email)
    }
    render(){
        return(
            <div>
                <div className="userAccounts-title">UserAccounts Page</div>
                <div id="email">
                        <p className="inputText">Name:</p>
                        <input className="textInputs" id="email" type="text"></input>
                        <div className="inputError">Error</div>
                    </div>
                    <div id="password">
                        <p className="inputText">Name:</p>
                        <input className="textInputs" id="password" type="text"></input>
                        <div className="inputError">Error</div>
                    </div>
                    <div id="phone">
                        <p className="inputText">Phone:</p>
                        <input className="textInputs" id="phone" type="text"></input>
                        <div className="inputError">Error</div>
                    </div>
                    <button onClick={()=>this.props.signin("none")}>login</button>
                    <button onClick={()=>this.props.signup("none")}>signUp</button>
                    <button onClick={()=>this.props.signout()}>signOut</button>
                    <button onClick={()=>this.props.signup("google")} className="google-button">
                        <image className="google-icon" src="../assets/btn_google_light_normal_ios.svg"></image><div>SignIn with Google</div>
                    </button>
            </div>
        );
    }
}
export default UserAccounts;