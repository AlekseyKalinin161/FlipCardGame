import React from "react";
import {Link} from "react-router-dom";

const RecordsComponent = () => {
    return (
        <>
            <h1>Рекорды</h1>
                <Link to="/">
                <button>Назад</button>
                </Link>
            <div>
                <div><h4>Лучший игрок:</h4></div>
                <div><h4>ТОП 10:</h4>
                    <div><h4>1:</h4></div>
                    <div><h4>2:</h4></div>
                    <div><h4>3:</h4></div>
                    <div><h4>4:</h4></div>
                    <div><h4>5:</h4></div>
                    <div><h4>6:</h4></div>
                    <div><h4>7:</h4></div>
                    <div><h4>8:</h4></div>
                    <div><h4>9:</h4></div>
                    <div><h4>10:</h4></div>
                </div>

            </div>
        </>
    )
}
export default RecordsComponent