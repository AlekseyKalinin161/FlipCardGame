import React from "react";
import StartComponent from "./startComponent";
import PlayComponent from "./playComponent";
import {BrowserRouter, Route} from "react-router-dom";
import SettingComponent from "./settingComponent";
import RecordsComponent from "./recordsComponent";


const HomeComponent = (props) => {
    return (
        <BrowserRouter>
                    <>
                        <Route exact path='/' render={() => <StartComponent/>}/>
                        <Route path='/play' render={() => <PlayComponent
                            stateArray={props.stateArray} setStateArray={props.setStateArray}
                        />}/>
                        <Route path='/setting' render={() => <SettingComponent/>}/>
                        <Route path='/records' render={() => <RecordsComponent/>}/>
                    </>
        </BrowserRouter>
    )
}
export default HomeComponent