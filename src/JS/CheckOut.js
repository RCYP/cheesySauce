import React from 'react';
import '../CSS/CheckOut.css';
import Cart from './Cart';

class CheckOut extends React.Component{
    constructor(props){
        super(props);
    }
    //TODO: add remove item from cart
    render(){
        return(
            <div>
                <div className="checkOut-title">Checkout</div>
                <div className="checkout-body">
                    <div className="checkOut-info">
                    <div className="input-block" id="name">
                        <p className="inputText">Name:</p>
                        <input className="textInputs" id="name" type="text"></input>
                        <div className="inputError">Error</div>
                    </div>
                    <div className="input-block" id="email">
                        <p className="inputText">Name:</p>
                        <input className="textInputs" id="email" type="text"></input>
                        <div className="inputError">Error</div>
                    </div>
                    <div className="input-block" id="phone">
                        <p className="inputText">Phone:</p>
                        <input className="textInputs" id="phone" type="text"></input>
                        <div className="inputError">Error</div>
                    </div>
                    <div className="input-block" id="address">
                        <p className="inputText">address:</p>
                        <input className="textInputs" id="address" type="textarea"></input>
                        <div className="inputError">Error</div>
                    </div>
                    <div className="input-block" id="paymentMethod">
                        <p className="inputText">Payment Method:</p>
                        <input className="comboInputs" id="paymentMethod" type="text"></input>
                        <div className="inputError">Error</div>
                    </div>
                </div>
                    <div className="checkout-cart">
                    <Cart items={this.props.cards} removeItem={this.props.removeItem} addItem={this.props.addItem}/>
                    </div>
                </div>
                <button className="checkout-Confirm">Confirm</button>
            </div>
        );
    }
}
export default CheckOut;