import React from 'react';
import axios from "axios";
import {NavLink} from "react-router-dom";
import moment from "moment";

const NavigationComponent = (props) => {
    const dynamicLink = (route, linkText) => {
        return(
            <div className="nav-link-wrapper">
                <NavLink exact to ="/blog" activeClassName="nav-link-active">
                    Blog
                </NavLink>
            </div>
        );
    };

    const handleSignOut = () => {
        axios.delete(
            "https://api.devcamp.space/logout",
            {withCredentials : true})
            .then(response => { 
                if (response.status === 200){
                    props.history.push("/");
                }

        })
    }

    return(
        <div className="nav-wrapper">
            <div className="left-side">
                <div className="nav-link-wrapper">
                    <NavLink exact to ="/" activeClassName="nav-link-active">
                        Home
                    </NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink exact to ="/about-me" activeClassName="nav-link-active">
                        About me
                    </NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink exact to ="/contact" activeClassName="nav-link-active">
                        Contact
                    </NavLink>
                </div>

                {props.loggedInStatus === "LOGGED_IN" ? dynamicLink("./blog", "Blog"): null}

                <div className="nav-link-wrapper">
                    <NavLink exact to ="/portfolio/:slug" activeClassName="nav-link-active">
                        Portfolio
                    </NavLink>
                </div>

                {false ? <button>Add Blog</button> : null}
            </div>
            <div className="right-side">
                <div><i class="fas fa-clock"></i> {moment().format('MMMM Do YYYY, h:mm:ss a')}</div> 
            DYLAN WALLACE  <i class="fas fa-caret-right"></i>
            </div>
        </div>
    );
}
export default NavigationComponent;