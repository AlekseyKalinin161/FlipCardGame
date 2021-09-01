import React, {useState} from "react";
import CardComponent from "./cardComponent/cardComponent";
import {arrayCard} from "../../../../state";
import WinComponent from "./winComponent";
import {useCustomState} from "../../../../context/context";


const BoardComponent = (props) => {
    const {state: stateGame, dispatch} = useCustomState()
    const [flagArr, setFlagArr] = useState(false);


    function addCardsToPlay() {
            if (arrayCard.length !== stateGame.gameSize) {
                arrayCard.length = 0;
                for (let i = 1; arrayCard.length < stateGame.gameSize; i += 1) {
                    arrayCard.push({
                        id: i,
                        numberCard: Math.round(i / 2),
                        disabled: false,
                        state: 'front',
                        cardFront: stateGame.gameData.cardFront,
                        cardBack: stateGame.gameData.cardBack[Math.round(i / 2)]
                    });
                }
            }
    }

    addCardsToPlay()

    function shuffle(array) {
        if (flagArr === false) {
            let currentIndex = array.length, randomIndex;

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
        } else {
            return array;
        }
    }

    const playBoard = {
        display: "flex",
        flexWrap: "wrap",
        width: '100%',
        justifyContent: 'center',
        overflow: 'overlay',
    }
    return (
            <div style={playBoard}>
                {shuffle(props.stateArray).map((card) => {
                    return <CardComponent key={card.id} card={card}
                                          stateArray={props.stateArray} setStateArray={props.setStateArray}

                    />
                })}
                <WinComponent cards={props.cards} setCards={props.setCards} shuffle={shuffle} stateArray={props.stateArray}
                              setFlagArr={setFlagArr}
                />
            </div>

    )

}
export default BoardComponent