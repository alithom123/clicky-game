import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div>
            <div className="card" style={{ width: "18rem", width: "200px", height: "200px" }}>
                <img className="card-img-top" src={props.imageUrl} />
                <div className="card-body">
                    {/* <h5 className="card-title">Card title</h5> */}
                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    <a href="#" className="btn btn-primary" onClick={props.handleCardClick} id={props.id} clickCount={props.clickCount}>Go somewhere</a>
                </div>
            </div>
        </div>
    );
}

export default Card;
