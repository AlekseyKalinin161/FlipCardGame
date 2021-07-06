import React from "react";
import {Link} from "react-router-dom";
import BoardComponent from "./boardComponent/boardComponent";



const PlayComponent = (props) => {

    const playBoard = {
        display: "flex",
        flexWrap: "wrap",
        border: "2px solid red",
        width: "100%",
        height: "100%",
        margin: "0"
    }
    const ButtonPanel = () => {
        return (
            <div>
                <Link to="/">
                    <button>Назад</button>
                </Link>
            </div>
        )
    }

    return (
        <div>
            <div style={playBoard}>
                <BoardComponent
                    stateArray={props.stateArray} setStateArray={props.setStateArray} idArray={props.idArray}
                />
            </div>
            <ButtonPanel/>
        </div>
    )
}
export default PlayComponent