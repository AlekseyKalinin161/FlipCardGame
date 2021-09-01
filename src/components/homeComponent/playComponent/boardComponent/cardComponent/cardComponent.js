import React from "react";
import "./cardComponent.css"
import { idArray, rerender} from "../../../../../state";
import {useCustomState} from "../../../../../context/context";



const CardComponent = (props) => {

    const {state: state, dispatch} = useCustomState()

    function notEqual() {
        idArray.forEach((e) => {
            e.state = "front";
            e.disabled = false;
        })
        rerender(props.setStateArray, props.stateArray);
        idArray.length = 0;
    }

    function equal() {
        rerender(props.setStateArray, props.stateArray);
        idArray.length = 0;
    }

    function flipper(card) {
        const targetCard = card;
        targetCard.state = "back";
        targetCard.disabled = true;
        idArray.push(targetCard);
        rerender(props.setStateArray, props.stateArray);
        idArray.length === 2 ? idArray[0].numberCard === idArray[1].numberCard ? equal() : setTimeout(notEqual, 1000) : rerender(props.setStateArray, props.stateArray);
    }


    return (
        <button style={{background:'transparent'}} className="scene scene--card" disabled={props.card.disabled}
                onClick={() => flipper(props.card)}>
            <div className={`card ${props.card.state === "back" ? "is-flipped" : ""}`}>
                <div className="card__face card__face--front">
                    <img className='img' src={props.card.cardFront } alt=""/>
                </div>
                <div className="card__face card__face--back">
                    <img className='img' src={props.card.cardBack} alt=""/>
                </div>
            </div>
        </button>
    )
}
export default CardComponent