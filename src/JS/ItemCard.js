import React,{Component} from 'react';
import '../CSS/ItemCard.css'
import { request } from 'http';
class ItemCard extends Component{
    constructor(props){
        super(props);
        this.cardInfo={
            id: this.props.item.id,
            name: this.props.item.name,
            description: this.props.item.description,
            price: this.props.item.price,
            image: this.props.item.imgLocation,
            tags: this.props.item.tags
        }
        this.quantity=" ";
    }
    add(){
        if(this.quantity==" ")this.quantity=1;
        else this.quantity++;
        this.props.addToCartEvent(this.cardInfo);
    }
    remove(){
        if(this.quantity==" "||this.quantity==1)this.quantity=" ";
        else this.quantity--;
        this.props.removeFromCartEvent(this.props.item.id)
    }
    render(){
        return (
        <div className="itemCard">
        <div className="itemCard-header">{this.props.item.name}</div>
        <div className="itemCard-body">
        <img className="itemCard-image" src={require("../assets/items/"+this.props.item.imgLocation)} alt="none"/>
        <p className="itemCard-description">{this.props.item.description}</p>
        </div>
        <div className="itemCard-footer">
        <p className="itemCard-price">{this.props.item.price}</p>
        <div className="itemCard-quantityLayout">
        <button className="itemCard-removeFromCart" onClick={()=>this.remove()}></button>
        <button className="itemCard-addToCart" onClick={()=>this.add()}></button>
        <span className="itemCard-quantity">{this.props.item.quantity}</span>
        </div>
        </div>
        </div>);
    }
}
export default ItemCard;