import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component{
    constructor(){
        super();

        console.log("Portfolio Container has rendered");
        this.state ={
            pageTitle: "Welcom to my Portfolio",
            isLoading: false,
            data: [
                {title: "Oh Sleeper", category: "Heavy Metal", slug:"oh-sleeper"},
                {title: "Skillet", category: "Heavy Rock", slug:"skillet"},
                {title: "Thousand Foot Krutch", category: "Rock", slug:"thousand-foot-krutch"},
                {title:"Demon Hunter",category: "Heavy Metal", slug:"demon-hunter"}
            ]
        };
        this.handleFilter = this.handleFilter.bind(this);
    }
    handleFilter(filter){
        this.setState({
            data: this.state.data.filter(songs =>{
                return songs.category === filter;
            })
        });
    }
    portfolioItem() {
        return this.state.data.map(songs => {
            return <PortfolioItem title={songs.title} url={"google.com"} slug={songs.slug}/>;
        });
    }
    render() {
        if (this.state.isLoading) {
            return<div>Loading...</div>;
        }
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>
                
                <button onClick={() => this.handleFilter('Heavy Metal')}>
                    Heavy Metal
                    </button>
                <button onClick={() => this.handleFilter('Heavy Rock')}>
                    Heavy Rock
                    </button>
                <button onClick={() => this.handleFilter('Rock')}>
                    Rock
                    </button>

                {this.portfolioItem()}
            </div>
        );
    }
}