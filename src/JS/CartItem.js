import React from 'react';
import '../CSS/CartItem.css';

class CartItem extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="cartItem">
                <span className="itemName">{this.props.cardInfo.name}</span>
                <span className="itemPrice">{this.props.cardInfo.price}</span>
                <span className="itemQuantity">{this.props.cardInfo.quantity}</span>
                <button className="removeButton" onClick={()=>this.props.removeItem(this.props.cardInfo.id)}></button>
                <button className="addButton" onClick={()=>this.props.addItem(this.props.cardInfo)}></button>
            </div>
        );
    }
}
export default CartItem;