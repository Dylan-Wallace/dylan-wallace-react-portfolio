import React, { Component } from "react";

export default class PortfolioForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            name:"",
            description:"",
            category:"",
            url: "",
            thumb_image:"",
            banner_image:"",
            logo:""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    buildForm(){
        let formData = new FormData();

        formData.append("porfolio_item[name]", this.state.name);
        formData.append("porfolio_item[description]", this.state.description);
        formData.append("porfolio_item[url]", this.state.url);
        formData.append("porfolio_item[category]", this.state.category);

        return formData;
    }

    handleChange(event) {
        console.log("Handle Change", event);
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event){
        console.log("Handle Submit", event);
        this.buildForm();
        event.preventDefault();

    }

    render(){
        return(
            <div>
                <h1>PortfolioForm</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                        type="text"
                        name="name"
                        placeholder="Place Your Name Here"
                        value={this.state.name}
                        onChange={this.handleChange}
                        />

                        <input
                        type="text"
                        name="url"
                        placeholder="Place Your URL Here"
                        value={this.state.url}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                        type="text"
                        name="position"
                        placeholder="Position value"
                        value={this.state.position}
                        onChange={this.handleChange}
                        />

                        <input
                        type="text"
                        name="category"
                        placeholder="Category"
                        value={this.state.category}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        
                    <input
                        type="text"
                        name="description"
                        placeholder="Place Your Description Here"
                        value={this.state.description}
                        onChange={this.handleChange}
                        />
                    </div>
                    <button type="sumbit">Save</button>
                </form>
            </div>
        );
    }
}