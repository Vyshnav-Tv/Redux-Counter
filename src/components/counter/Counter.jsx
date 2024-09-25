import React from "react";
import "./Counter.css";
import { useDispatch, useSelector } from "react-redux";
import { DecrementCounter, IncrementCounter } from "../../Redux/Reducer/Reducer";


function Counter() {
    const count=useSelector((state)=>state.counter.value)
    const dispatch=useDispatch();
  return (
<div className="container">
      <h2>Redux</h2>
      <p>{count}</p>
      <div className="buttons">
        <button className="button" onClick={()=>dispatch(IncrementCounter())}>Increment</button>
        <button className="button" onClick={()=>dispatch(DecrementCounter())}>Decrement</button>
      </div>
    </div>
  );
}

export default Counter;
