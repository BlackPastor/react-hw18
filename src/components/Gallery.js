import React, { Component } from "react";

import img1 from "./images/img1.jpg"
import img2 from "./images/img2.jpg"
import img3 from "./images/img3.png"
import img4 from "./images/img4.jpg"
import img5 from "./images/img5.jpg"
import img6 from "./images/img6.jpg"
import img7 from "./images/img7.jpg"
import img8 from "./images/img8.jpg"

export default class UserPage extends Component {
    render() {
        return (
            <div>
                <div className="gallery">
                    <div className="images">
                        <img className="img" src={img1}  alt="img"/>
                        <img className="img" src={img2}  alt="img"/>
                    </div>
                    <div className="images">
                        <img className="img" src={img3}  alt="img"/>
                        <img className="img" src={img4}  alt="img"/>
                    </div>
                    <div className="images">
                        <img className="img" src={img5}  alt="img"/>
                        <img className="img" src={img6}  alt="img"/>
                    </div>
                    <div className="images">
                        <img className="img" src={img7}  alt="img"/>
                        <img className="img" src={img8}  alt="img"/>
                    </div>

                </div>
            </div>
        )
    }
}