import React, { Component } from "react";
import axios from "axios";

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

    buildForm() {
        let formData = new FormData();
        
        formData.append("portfolio_item[name]", this.state.name);
        formData.append("portfolio_item[description]", this.state.description);
        formData.append("portfolio_item[url]", this.state.url);
        formData.append("portfolio_item[category]", this.state.category);
        formData.append("portfolio_item[position]", this.state.position);
        
        return formData;
    }

    handleChange(event) {
        console.log("Handle Change", event);
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        axios
          .post(
            "https://wallace.devcamp.space/portfolio/portfolio_items",
            this.buildForm(),
            { withCredentials: true }
          )
          .then(response => {
            console.log("response", response);
          })
          .catch(error => {
            console.log("portfolio form handleSubmit error", error);
          });
    
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
                    
                        <select
                        name="category"
                        value={this.state.category}
                        onChange={this.handleChange}
                        >
                            <option  value="Fonts">Fonts</option>
                            <option  value="Class">Class</option>
                            <option  value="Games">Games</option>
                            <option  value="How To">How To</option>
                            <option  value="About">About</option>
                            <option  value="Resources">Resources</option>
                            <option  value="Others">Others</option>
                        </select>
                    </div>
                    <div>
                        
                    <textarea
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