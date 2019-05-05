import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div
        className="card"
        style={{
            backgroundImage: props.image ? `url(${props.image})` : "none"
        }}>
            <button onClick={props.onClick}>Card Button</button>
        </div>
    );
}

export default Card;