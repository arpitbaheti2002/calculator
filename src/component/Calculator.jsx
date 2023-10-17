import React, { useState } from "react";

function Calculator(){
  var [eq, updateEquation] = useState("");
  var [res, updateResult] = useState(0);
  var [history, updateHistory] = useState("");

function handleChange(event){
  var operation = event.target.name;

  if(operation === "backspace"){
    updateEquation(eq.substring(0, eq.length-1));
  } else {
    updateEquation(eq+operation);
  }
}

function evaluate(){
  try{
    const result = eval(eq);
    updateResult(result);
  } catch (error) {
    updateResult("Invalid");
  }

  updateHistory(eq);
  updateEquation("");
}

  return(
    <div class="container">
      <div className="display">
        <h3 className="equation">{eq}</h3>
        <h2 className="history">{history}</h2>
        <h2 className="result">{res}</h2>
      </div>
      <div className="buttons">
        <div className="keypad">
          <button name="7" onClick={handleChange}>7</button>
          <button name="8" onClick={handleChange}>8</button>
          <button name="9" onClick={handleChange}>9</button>
          <button name="4" onClick={handleChange}>4</button>
          <button name="5" onClick={handleChange}>5</button>
          <button name="6" onClick={handleChange}>6</button>
          <button name="1" onClick={handleChange}>1</button>
          <button name="2" onClick={handleChange}>2</button>
          <button name="3" onClick={handleChange}>3</button>
          <button name="0" onClick={handleChange}>0</button>
          <button name="." onClick={handleChange}>.</button>
          <button onClick={evaluate}>=</button>
        </div>
        <div className="functions">
          <button name="backspace" onClick={handleChange}>←</button>
          <button name="/" onClick={handleChange}>÷</button>
          <button name="*" onClick={handleChange}>x</button>
          <button name="-" onClick={handleChange}>-</button>
          <button name="+" onClick={handleChange}>+</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;