import React from "react";
import "./cardComponent.css"
import {idArray, rerender} from "../../state";



const CardComponent = (props) => {


    function notEqual(){
        idArray.forEach((e)=>{e.state = "front"; e.disabled = false;})
        rerender(props.setStateArray, props.stateArray);
        idArray = [];
    }
    function equal(){
        rerender(props.setStateArray, props.stateArray);
        idArray = [];
    }

    function flipper(card) {
        const targetCard = card;
        targetCard.state = "back";
        targetCard.disabled = true;
        rerender(props.setStateArray, props.stateArray);
        idArray.push(targetCard);
        idArray.length === 2 ? idArray[0].numberCard === idArray[1].numberCard ? equal() : setTimeout(notEqual,1000): rerender(props.setStateArray, props.stateArray);
    }

    return (
        <button className="scene scene--card" disabled={props.card.disabled}
                onClick={() => flipper(props.card)}>
            <div className={`card ${props.card.state === "back" ? "is-flipped" : ""}`}>
                <div className="card__face card__face--front">front</div>
                <div className="card__face card__face--back">{props.card.numberCard}</div>
            </div>
        </button>
    )
}
export default CardComponent