import React from 'react';
import '../CSS/Cart.css';
import CartItem from './CartItem';

class Cart extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="cart">
                <div className="cartTitle">Cart</div>
                <div className="cartItemList">
                {this.props.items.map((cardInfo)=>{return <CartItem key={cardInfo.id} cardInfo={cardInfo} removeItem={this.props.removeItem.bind(this)} addItem={this.props.addItem.bind(this)}/>;})}
                </div>    
            </div>
        );
    }
}
export default Cart;