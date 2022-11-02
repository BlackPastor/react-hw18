import React, { Component } from "react";
import taras from './images/taras.jpg'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <div className="home">
                    <img src={taras}  alt="img"/>
                    <p>І на оновленій землі <br></br>
                       Врага не буде, супостата, <br></br>
                       А буде син і буде мати <br></br>
                       І будуть люде на землі.
                       <br></br>
                       <span>Т.Г.Шевченко</span>
                    </p>
                </div>
            </div>
        )
    }
}