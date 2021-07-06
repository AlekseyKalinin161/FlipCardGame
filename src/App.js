import './App.css';
import HomeComponent from "./components/homeComponent/homeComponent";
import {useState} from "react";
import {arrayCard} from "./state";

function App() {


  const [stateArray, setStateArray] = useState(arrayCard)
  return (
      <div className="App">
          <HomeComponent
              stateArray={stateArray} setStateArray={setStateArray}
          />
      </div>
  );

}

export default App;
