import React from 'react';
import '../CSS/Careers.css';

class Careers extends React.Component{
    render(){
        return(
            <div>
                <div className="careers-title">Careers</div>
                <div className="careers-body">
                <div className="careers-bodyText">Join Us</div>
                <div id="email">
                        <p className="inputText">Name:</p>
                        <input className="textInputs" id="email" type="text"></input>
                        <div className="inputError">Error</div>
                </div>
                <div id="phone">
                        <p className="inputText">Phone:</p>
                        <input className="textInputs" id="phone" type="text"></input>
                        <div className="inputError">Error</div>
                </div>
                <button className="careers-join">Join</button>
                </div>
            </div>
        );
    }
}
export default Careers;