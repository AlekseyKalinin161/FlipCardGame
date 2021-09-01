import React, {useState} from "react";
import {Link} from "react-router-dom";
import BoardComponent from "./boardComponent/boardComponent";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    playBoard: {
        display: "flex",
        flexWrap: "wrap",
        border: "3px solid white",
        width: "auto",
        height: "100%",
        // margin: "5px",
    },
    noLink: {
        textDecoration: 'none',
        color: '#FFFFFF'
    }
}));

const PlayComponent = (props) => {
    const [data,setData] = useState(null)
    const playBoard = useStyles();


    console.log('data',data);

    return (
        <div style={{width: '100%', height: '87%'}}>
            <div className={playBoard.playBoard}>
                <BoardComponent
                    stateArray={props.stateArray} setStateArray={props.setStateArray} idArray={props.idArray}
                    cards={props.cards} setCards={props.setCards}
                />
            </div>
            <div>
                <Link className={playBoard.noLink} to="/">
                    <Button style={{margin: '3px', border: '2px solid white'}} variant="contained"
                            color="primary">Назад</Button>
                </Link>
            </div>
        </div>
    )
}
export default PlayComponent