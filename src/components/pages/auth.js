import React, { Component } from "react";
import Login from "../auth/login";
import loginimg from "../../../static/assets/images/auth/source.gif";

export default class Auth extends Component{
    render(){
        return(
            <div className="auth-page-wrapper">
                <div 
                    className="left-column" 
                    style={{
                        backgroundImage: `url(${loginimg})`
                    }}
                />

                <div className="right-column">
                    <Login />
                </div>
            </div>
        );
    }
}