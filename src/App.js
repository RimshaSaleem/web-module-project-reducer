import React, { useReducer } from 'react';

import './App.css';
// import reducer, { initialState } from "./reducers/index";
import {
  applyNumber,
  changeOperation,
  clearDisplay,
  memoryPlus,
  memoryClear,
  memoryRecall,
} from "./actions";


import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import reducer, { initialState } from "./reducers/index";
// import { useReducer } from 'react';
 function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  const handleNumber = (num) => {
    dispatch(applyNumber(num));
};


  const handleMemoryClear = () => {
    dispatch(memoryClear());
};


  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={0}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> X</span>
              <span id="memory"><b>Memory:</b> 0</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}
              onClick={handleMemoryClear} />
            </div>

            <div className="row">
              <CalcButton value={1}
              onClick={() => handleNumber(1)}/>
              <CalcButton value={2}
              onClick={() => handleNumber(1)}/>
              <CalcButton value={3}
              onClick={() => handleNumber(1)}/>
            </div>

            <div className="row">
              <CalcButton value={4}
              onClick={() => handleNumber(1)}/>
              <CalcButton value={5}
              onClick={() => handleNumber(1)}/>
              <CalcButton value={6}
              onClick={() => handleNumber(1)}/>
            </div>

            <div className="row">
              <CalcButton value={7}
              onClick={() => handleNumber(1)}/>
              <CalcButton value={8}
              onClick={() => handleNumber(1)}/>
              <CalcButton value={9}
              onClick={() => handleNumber(1)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"}/>
              <CalcButton value={"*"}/>
              <CalcButton value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
