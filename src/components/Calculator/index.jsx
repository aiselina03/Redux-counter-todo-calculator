import { useDispatch, useSelector } from "react-redux";
import { add, subtract,  multiply, divide } from "../../redux/calculatorSlice";
import React, { useState } from "react";

export function Calculator() {
  const calculatorValue = useSelector((state) => state.calculator.value);
  const dispatch = useDispatch();
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  return (
    <div>
      <h2>Calculator</h2>
      <p>{calculatorValue}</p>
      <input type="text"  placeholder="Enter num 1" 
      value={input1} onChange={(e)=> setInput1(e.target.value)}/>
      <input type="text"   placeholder="Enter num 2" 
      value={input2} onChange={(e)=> setInput2(e.target.value)}/>
      <br />
      <button onClick={() => dispatch(add({number1:+input1,number2:+input2}))}>Add</button>
      <button onClick={() => dispatch(subtract({number1:+input1,number2:+input2}))}>Subtract</button>
      <button onClick={() => dispatch(multiply({number1:+input1,number2:+input2}))}>Multiply</button>
      <button onClick={() => dispatch(divide({number1:+input1,number2:+input2}))}>Divide</button>
    </div>
  );
}
