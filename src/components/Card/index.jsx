import React from "react";
import "./style.css";

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickedOnce: false,
        };
    }


    render() {
        return (
            // <a href="" class="custom-card">
            <div onClick={() => this.props.onClick()}>
                <div className="click-item" >
                    <img className="card-img-top" src={this.props.imageUrl} />
                    <div className="card-body">
                        {/* <p>clicked = {this.state.clickedOnce ? "true" : "false"}</p>
                        <p>id = {this.props.id}</p> */}

                        {/* <h5 className="card-title">Card title</h5> */}
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        {/* <a href="#" className="btn btn-primary" onClick={props.handleCardClick} id={props.id} clickCount={props.clickCount}>Click this card</a> */}
                    </div>
                </div>
            </div>
            // </a>
        );
    }
}

export default Card;
