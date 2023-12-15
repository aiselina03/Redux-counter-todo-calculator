import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementByAmount, incrementByAmount } from "../../redux/counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <h2>Counter</h2>
        <button onClick={() => dispatch(incrementByAmount(5))}>+</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrementByAmount(5))}>-</button>
      </div>
    </div>
  );
}
