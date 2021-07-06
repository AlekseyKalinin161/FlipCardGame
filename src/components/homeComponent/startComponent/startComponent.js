import React from "react";
import {NavLink} from "react-router-dom";

const StartComponent = () => {
    return (
            <div>
                <button><NavLink to='/play'>Начать игру</NavLink></button>
                <button><NavLink to='/setting'>Настройки</NavLink></button>
                <button><NavLink to='/records'>Рекорды</NavLink></button>
            </div>
    )
}
export default StartComponent