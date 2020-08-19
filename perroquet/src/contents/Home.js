import React, { Component } from 'react';
import cat1 from '../img/chat1.jpg';


class Home extends Component {
render() {
    return (
        <div className="contentdiv home">
            <p>Ceci est un site pour présenter Auguste, notre perroquet:</p>
            <img src={cat1} className="chat1"></img>
        </div>
        )
    }
}

export default Home