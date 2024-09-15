import React, { useReducer } from 'react';
import './App.css';
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import reducer, {initialState} from './reducers/index';
// import {addOne} from './actions/index';
import {applyNumber, changeOperation, clearDisplay, currentMemory, applyMemory, clearMemory} from './actions/index';


function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState);


  // const handleAddOne = () => {
  //   dispatch(addOne());
  // }

  const calculateNumber = (number) => {
    dispatch(applyNumber(number));
  }

  const operation = (operator) => {
    dispatch(changeOperation(operator));
  }

  const clear = () => {
    dispatch(clearDisplay());
  }

  const setMemory = () => {
    dispatch(currentMemory());
  }

  const callMemory = () => {
    dispatch(applyMemory());
  }

  const resetMemory =() => {
    dispatch(clearMemory());
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick={() => setMemory()} value={"M+"}/>
              <CalcButton onClick={() => callMemory()} value={"MR"}/>
              <CalcButton onClick={() => resetMemory()} value={"MC"}/>
            </div>

            <div className="row">
              {/* <CalcButton onClick={handleAddOne} value={1}/> */}
              <CalcButton onClick={() => calculateNumber(1)} value={1}/>
              <CalcButton onClick={() => calculateNumber(2)}  value={2}/>
              <CalcButton onClick={() => calculateNumber(3)} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => calculateNumber(4)} value={4}/>
              <CalcButton onClick={() => calculateNumber(5)} value={5}/>
              <CalcButton onClick={() => calculateNumber(6)} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => calculateNumber(7)} value={7}/>
              <CalcButton onClick={() => calculateNumber(8)} value={8}/>
              <CalcButton onClick={() => calculateNumber(9)} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => operation('+')} value={"+"}/>
              <CalcButton onClick={() => operation('*')} value={"*"}/>
              <CalcButton onClick={() => operation('-')} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={() => clear()} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
