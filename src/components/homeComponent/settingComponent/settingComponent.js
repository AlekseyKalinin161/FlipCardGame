import React from "react";
import {Link} from "react-router-dom";
import {useCustomState} from "../../../context/context";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {Checkbox} from "@material-ui/core";

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
        background: 'white',
    },
    noLink: {
        textDecoration: 'none',
        color: '#FFFFFF'
    }
}));

const SettingComponent = (props) => {
    const {state: stateGame, dispatch} = useCustomState();
    const styleSetting = useStyles();

    function setCardType(type){
        dispatch({type:'CHANGE_TYPE_GAME',value: type});
    }

    function setCardsState(num){
        dispatch({type:'SET_CARDS_NUMBERS',value: num});
    }

    return (
        <div style={{border: '5px solid white', borderRadius: '10px', width: '40%', padding:'5px'}}>
            <h1 style={{color: "white"}}>Настройки</h1>
            <div className={styleSetting.menu}>
                <div>
                    <h4>Уровень сложности:</h4>
                    <div>
                        <Button variant="contained" color="primary" onClick={() => setCardsState(8)} style={{margin: '5px'}}>Легкая</Button>
                        <Button variant="contained" color="primary" onClick={() => setCardsState(16)} style={{margin: '5px'}}>Средняя</Button>
                        <Button variant="contained" color="primary" onClick={() => setCardsState(32)} style={{margin: '5px'}}>Сложная</Button>
                    </div>
                </div>
                <div><h4>Выбрать вселенную:</h4>
                    <div>
                        <Button variant="contained" color="primary" onClick={() => setCardType('marvel')} style={{margin: '5px'}}>MARVEL</Button>
                        <Button variant="contained" color="primary" onClick={() => setCardType('dc')} style={{margin: '5px'}}>DC</Button>
                        <Button variant="contained" color="primary" onClick={() => setCardType('disney')} style={{margin: '5px'}}>Disney</Button>
                    </div>
                </div>
                <div>
                    <h4>Режим на время:
                        <Checkbox
                            color="primary"
                        />
                    </h4>
                </div>
            </div>
            <Link className={styleSetting.noLink} to="/">
                <Button style={{marginTop: "3px"}} variant="contained" color="primary">Назад</Button>
            </Link>
        </div>
    )
}

export default SettingComponent