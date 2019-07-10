import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component{
    constructor(){
        super();

        console.log("Portfolio Container has rendered");
        this.state ={
            pageTitle: "Welcom to my Portfolio",
            isLoading: false,
            data: []
        };
        this.handleFilter = this.handleFilter.bind(this);
    }
    handleFilter(filter){
        this.setState({
            data: this.state.data.filter(item =>{
                return item.category === filter;
            })
        });
    }

    getPortfolioItems () {
        // Make a request for a user with a given ID
        axios
          .get("https://wallace.devcamp.space/portfolio/portfolio_items")
          .then(response => {
            // handle success
            console.log("Response Data", response);
            this.setState({
                data: response.data.portfolio_items
            })
          })
          .catch(error => {
            // handle error
            console.log(error);
          })
      }

    portfolioItems(){
        return this.state.data.map(item => {
            console.log("item data", item);
            return(
                <PortfolioItem 
                key={item.id}
                item={item}
                /> 
            );
        });
    }
    componentDidMount (){
        this.getPortfolioItems();
    }
    render() {
        if (this.state.isLoading) {
            return<div>Loading...</div>;
        }

        return (
            <div className="portfolio-items-wrapper">
                <button className="btn"  onClick={() => this.handleFilter('Fonts')}>
                    Fonts
                </button>
                <button className="btn" onClick={() => this.handleFilter('Class')}>
                    Class
                    </button>
                <button className="btn"  onClick={() => this.handleFilter('Games')}>
                    Games
                    </button>
                <button className="btn"  onClick={() => this.handleFilter('How to')}>
                    How To
                </button>
                <button className="btn"  onClick={() => this.handleFilter('About')}>
                    About
                </button>
                <button className="btn"  onClick={() => this.handleFilter('Resources')}>
                    Resources
                </button>
                {this.portfolioItems()}
            </div>
        );
    }
}