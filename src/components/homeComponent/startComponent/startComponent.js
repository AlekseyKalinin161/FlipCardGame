import React, {useEffect} from "react";
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import {useCustomState} from "../../../context/context";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        height: '100%',
        width: '20%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    menu: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        border: '5px solid white',
        borderRadius: '10px',
        padding: '10px',
        height: '30%',
        width: '100%',
    },
    noLink: {
        textDecoration: 'none',
        color: '#FFFFFF'
    },
    button: {
        margin: '3px',
        border: '2px solid white'
    }
}));

const StartComponent = (props) => {
    const {state: stateGame, dispatch} = useCustomState();
    const startStyle = useStyles();

    async function dataRequest(type) {
        const response = await fetch(`http://localhost:3000/${type}`);
        return response.json();
    }

    useEffect(() => {
        // if (!stateGame.gameData) {
            dataRequest(stateGame.gameType).then((response) => dispatch({type: 'INITIAL_GAME', data: response}))
        // }
        console.log('INITIAL_GAME useEff');
    }, [stateGame.gameType])

    useEffect(() => {
        if (stateGame.gameData) {
            props.setBackgroundImg(stateGame.gameData.backgroundImg)
        }
    }, [stateGame.gameData])

    const Play = () => {
        return (
            <div className={startStyle.menu}>
                <Button className={startStyle.button} variant="contained" color="primary">
                    <NavLink className={startStyle.noLink} to='/play'>Начать игру</NavLink>
                </Button>
                <Button className={startStyle.button} variant="contained" color="primary">
                    <NavLink className={startStyle.noLink} to='/setting'>Настройки</NavLink>
                </Button>
                <Button className={startStyle.button} variant="contained" color="primary">
                    <NavLink className={startStyle.noLink} to='/records'>Рекорды</NavLink>
                </Button>
            </div>
        )
    }

    return (
        <div className={startStyle.wrapper}>
            {stateGame.gameData ? <Play/> : <h1>loading...</h1>}
        </div>
    );
}
export default StartComponent