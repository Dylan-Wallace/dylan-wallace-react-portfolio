import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import moment from "moment";

export default class NavigationComponent extends Component{
    constructor(){
        super();
    }

    render(){
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
                        <NavLink exact to ="/auth" activeClassName="nav-link-active">
                            Auth
                        </NavLink>
                    </div>

                    <div className="nav-link-wrapper">
                        <NavLink exact to ="/contact" activeClassName="nav-link-active">
                            Contact
                        </NavLink>
                    </div>

                    <div className="nav-link-wrapper">
                        <NavLink exact to ="/blog" activeClassName="nav-link-active">
                            Blog
                        </NavLink>
                    </div>
                    
                    <div className="nav-link-wrapper">
                        <NavLink exact to ="/portfolio/:slug" activeClassName="nav-link-active">
                            Portfolio
                        </NavLink>
                    </div>

                    {false ? <button>Add Blog</button> : null}
                </div>
                <div className="right-side">
                 <div><i class="fas fa-clock"></i>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div> 
                DYLAN WALLACE
                <i class="fas fa-caret-right"></i>
                </div>
            </div>
        );
    }

}