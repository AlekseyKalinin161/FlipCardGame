import './App.css';
import HomeComponent from "./components/homeComponent/homeComponent";
import React, {useState} from "react";
import {arrayCard} from "./state";
import {StateProvider} from "./context/context";

function App() {
    const [stateArray, setStateArray] = useState(arrayCard)
    const [backgroundImg, setBackgroundImg] = useState('')

    return (
        <div className="App" style={{backgroundImage: `url(${backgroundImg})`}}>
            <StateProvider>
                <HomeComponent
                    setBackgroundImg={setBackgroundImg}
                    stateArray={stateArray} setStateArray={setStateArray}
                />
            </StateProvider>
        </div>
    );

}

export default App;
