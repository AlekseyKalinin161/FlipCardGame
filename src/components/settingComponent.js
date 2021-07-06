import React from "react";
import {Link} from "react-router-dom";

const SettingComponent = () => {
    return (
        <>
            <h1>Настройки</h1>
            <Link to="/">
                <button>Назад</button>
            </Link>
            <div>
                <div><h4>кек:</h4></div>
                <div><h4>кек:</h4></div>
                <div><h4>чпок:</h4></div>
            </div>
        </>
    )
}
export default SettingComponent