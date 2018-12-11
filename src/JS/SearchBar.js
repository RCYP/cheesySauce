import React, { Component } from 'react';
import '../CSS/SearchBar.css'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "all",
            searchTerm: "",
            type: ["any"]
        }
    }
    toggleButton(filterTerm) {
        switch (filterTerm) {
            case "all": document.getElementById("all").style.backgroundColor = "yellow";
                document.getElementById("veg").style.backgroundColor = "white";
                document.getElementById("nonveg").style.backgroundColor = "white";
                break;
            case "veg": document.getElementById("all").style.backgroundColor = "white";
                document.getElementById("veg").style.backgroundColor = "green";
                document.getElementById("nonveg").style.backgroundColor = "white";
                break;
            case "nonveg": document.getElementById("all").style.backgroundColor = "white";
                document.getElementById("veg").style.backgroundColor = "white";
                document.getElementById("nonveg").style.backgroundColor = "red";
                break;
        }
    }
    refineType(typeTerm){
        if (typeTerm == "any") {
            this.setState({ type: ["any"] });
            document.getElementById("any").style.borderBottom= "5px solid red";
            document.getElementById("starters").style.borderBottom= "0px solid white";
            document.getElementById("beverages").style.borderBottom= "0px solid white"
            document.getElementById("maincourse").style.borderBottom= "0px solid white"
            document.getElementById("dessert").style.borderBottom= "0px solid white"
        }
        else {
            if(this.state.type.includes("any")){let cc = this.state.type; cc.splice(cc.indexOf("any"),1); this.setState({ type: cc });document.getElementById("any").style.borderBottom= "0px solid white"}
            if (this.state.type.includes(typeTerm)) { let cc = this.state.type; cc.splice(cc.indexOf(typeTerm),1); this.setState({ type: cc });document.getElementById(typeTerm).style.borderBottom= "0px solid white"; }
            else { let cc = this.state.type; cc.push(typeTerm); this.setState({ type: cc });document.getElementById(typeTerm).style.borderBottom= "5px solid red"; }
        }
    }
    refineSearch(filterTerm, searchTerm, typeTerm=false, event) {
        this.setState({ filter: filterTerm });
        this.setState({ searchTerm: searchTerm });
        if(typeTerm)this.refineType(typeTerm);
        this.props.search(this.state);
        this.toggleButton(filterTerm);
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <div className="filterContainer">
                    <input className="searchBar" onChange={() => this.setState({ searchTerm: document.getElementsByClassName("searchBar")[0].value })} type="text" hint="search" value={this.state.searchTerm}  onKeyPress={(press) => {if(press.charCode==13) this.refineSearch(this.state.filter, this.state.searchTerm);}}></input>
                    <button className="searchButton" onClick={() => this.refineSearch(this.state.filter, this.state.searchTerm)}></button>
                    <button className="filterButton" id="all" onClick={() => this.refineSearch("all", this.state.searchTerm)}>all</button>
                    <button className="filterButton" id="veg" onClick={() => this.refineSearch("veg", this.state.searchTerm)}>Veg</button>
                    <button className="filterButton" id="nonveg" onClick={() => this.refineSearch("nonveg", this.state.searchTerm)}>Non-Veg</button>
                </div>
                <div className="typeContainer">
                    <button className="typeButton" id="any" onClick={() => this.refineSearch(this.state.filter, this.state.searchTerm, "any")}>any</button>
                    <button className="typeButton" id="starters" onClick={() => this.refineSearch(this.state.filter, this.state.searchTerm, "starters")}>starters</button>
                    <button className="typeButton" id="beverages" onClick={() => this.refineSearch(this.state.filter, this.state.searchTerm, "beverages")}>beverages</button>
                    <button className="typeButton" id="maincourse" onClick={() => this.refineSearch(this.state.filter, this.state.searchTerm, "maincourse")}>maincourse</button>
                    <button className="typeButton" id="dessert" onClick={() => this.refineSearch(this.state.filter, this.state.searchTerm, "dessert")}>dessert</button>
                </div>
            </div>
        );
    }
}
export default SearchBar;