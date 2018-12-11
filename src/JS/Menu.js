import React from 'react';
import ItemCard from './ItemCard';
import SearchBar from './SearchBar';
import Cart from './Cart';
import '../CSS/Menu.css';
import firebase, { firestore } from 'firebase';

class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cards: [],
            items:[],
            displayItems: []
        }
        this.getItems("")
    }
    addToCartEvent(cardInfo,event){
        this.props.addItem(cardInfo);
        let quantityIncreased=0;
        if(this.props.cards.length==0)quantityIncreased=0;
        let isFound=false;
        this.props.cards.forEach((element,index)=>{
                if(element.id==cardInfo.id){isFound=true;quantityIncreased=this.props.cards[index].quantity;}
            });
            if(!isFound){quantityIncreased=1;}
        
        this.state.items.forEach((item,index)=>{
            if(item.id==cardInfo.id) {
                let temp1=this.state.items;temp1[index].quantity=quantityIncreased;
                this.setState({items: temp1});
            };
        });
    }
    removeItem(itemId,event){
        this.props.removeItem(itemId);
        this.state.items.forEach((item,index)=>{
            if(item.id==itemId && item.quantity>0) 
            if(item.quantity==1) 
            {
                let temp1=this.state.items;temp1[index].quantity=" ";
                this.setState({items: temp1});
            }
            else{
                let temp1=this.state.items;temp1[index].quantity--;
                this.setState({items: temp1});
            };
        });
    }
    searchEvent(searchData,event){
        let temp=[];
        this.setState({displayItems: []})
        this.state.items.forEach(
            (item)=>{
                var typeMatches=false;
                //check TAG
                if(searchData.type[0]=="any") typeMatches=true;
                else searchData.type.forEach((type)=>{if(item.tags.includes(type))typeMatches=true;});
                //check Filter
                if(!((item.tags.includes(searchData.filter))||(searchData.filter=="all"))) typeMatches=false;
                //check SearchTerm
                if(!item.name.includes(searchData.searchTerm)) typeMatches=false;
                
                if(typeMatches)temp.push(item);
            }
        )
        this.setState({displayItems: temp})
    }
    getItems(searchData,event){
        let p=[];
        firestore().collection("items").get().then((items)=>{
            this.setState({items: []})
            items.forEach((item)=>{
                //this.setState({items: (this.state.items.push({id: item.data().name}))})
                p.push({
                    id: item.id,
                    name: item.data().name,
                    price: item.data().price,
                    description: item.data().description,
                    tags: item.data().tags,
                    quantity: " ",
                    imgLocation: item.data().imgLocation
                })
            })
            this.setState({items: p,displayItems: p})
        })
    }

    render(){
        return(
            <body id="cartid">
                <div className="body-showcase">Weeallpaper</div>
                <div className="body-title">Menu</div>
                <div className="body-main">
                    <SearchBar search={this.searchEvent.bind(this)}/>
                        <div class="itemList">
                        {this.state.displayItems.map((item)=> {return <ItemCard key={item.id} item={item}  addToCartEvent={this.addToCartEvent.bind(this)} removeFromCartEvent={this.removeItem.bind(this)}/>})}
                        </div>
                </div>
            <Cart items={this.props.cards} removeItem={this.removeItem.bind(this)} addItem={this.addToCartEvent.bind(this)}/>
            <button className="order" onClick={()=>this.props.changeBody("cart")}>Order</button>    
            </body>
        );
    }
}
export default Menu;