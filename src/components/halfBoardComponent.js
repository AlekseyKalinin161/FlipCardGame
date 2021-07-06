import React, {useState} from "react";
import CardComponent from "./cardComponent/cardComponent";


const Board = (props) => {
    const [flagArr, setFlagArr] = useState(false);
    function shuffle(array) {
        if(flagArr === false){
        let currentIndex = array.length,  randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
            setFlagArr(true)
        return array;
        }else {
            return array;
        }
    }

    const playBoard = {
        display: "flex",
        flexWrap: "wrap"
    }
        return (
            <div style={playBoard}>
                {shuffle(props.stateArray).map((card) => {
                    return <CardComponent key={card.id} card={card}
                                          stateArray={props.stateArray} setStateArray={props.setStateArray}
                    />
                })}
            </div>
    )

}
export default Board