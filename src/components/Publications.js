import AnakinPhoto from "./images/Anakin.jpg";
import RayPhoto from "./images/Ray.jpg";
import CheckMark from "./images/check-mark.svg";
import Like from "./images/like.svg"
import Repost from "./images/repost.svg"
import Share from "./images/share.svg"
import Comment from "./images/comment.svg"
import React, { Component } from "react";

export default class Publications extends Component {
    constructor(props) {
        super(props);
        this.name = "Anakin skywalker";
        this.nickname = "@dart_vader";
        this.content = "WTF? Who is Ray? Why she is Skywalker? Luke...?";
        this.date = "26 feb";
        this.ANAKIN_IMAGE = AnakinPhoto;
        this.RAY_IMAGE = RayPhoto;
    }
    
    
    render() {
        return (
            <>
            <div className="container">
                <img className="logo" src={this.ANAKIN_IMAGE} alt="img"></img>
                <div className="info">
                    <div className="head">
                        <h3>{this.name}</h3>
                        <img src={CheckMark} alt="img"></img>
                        <h5>{this.nickname}</h5>
                        <h5>{this.date}</h5>
                    </div>
                    <div className="content">
                        <h4>{this.content}</h4>
                        <img src={this.RAY_IMAGE} className="gal image" alt="img"></img>
                    </div>
                    <div className="footer">
                        <div className="actions">
                            <img src={Comment} alt="img"></img>
                            <p>482</p>
                        </div>
                        <div className="actions">
                            <img src={Repost} alt="img"></img>
                            <p>146</p>
                        </div>
                        <div className="actions">
                            <img src={Like} alt="img"></img>
                            <p>887</p>
                        </div>
                        <div className="actions">
                            <img src={Share} alt="img"></img>
                        </div>
                    </div>
                </div>

            </div>
            </>
        )   
    }
}