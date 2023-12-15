import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtodoByAmount, removetodoByAmount } from "../../redux/todoSlice";
import { v4 as uuidv4 } from 'uuid';

export function Todo() {
  const todo = useSelector((state) => state.todo.value);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <div>
        <h1>Todo</h1>
        <input type="text"  value={inputValue} onChange={(e) => setInputValue(e.target.value)}  />
        <button  onClick={() => {dispatch(addtodoByAmount({ 
        value: inputValue, id: uuidv4()})); setInputValue("")}}>
          add
        </button>
        {todo.map((x) => (
          <li key={x.id} onClick={()=>dispatch(removetodoByAmount(x.id))}>{x.value}</li>
        ))}
      </div>
    </div>
  );
}
