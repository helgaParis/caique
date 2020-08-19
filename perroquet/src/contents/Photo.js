import React, { Component } from 'react';
import cat2 from '../img/chat2.jpg';
import cat3 from '../img/chat3.jpg';

class Photo extends Component {
render() {
    return (
        <div className="contentdiv photo">
            <p>Voici différentes photos de  notre perroquet Auguste</p>
            <img src={cat2} className="chat2"></img>
            <img src={cat3} className="chat3"></img>
        </div>
        )
    }
}
    
export default Photo
