import React from "react";
import Button from "../components/Button";
import { useReducer } from "react";

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const SET_VALUE_TO_ADD = "set_value_to_add";
const ADD_VALUE_TO_COUNT = "add_value_to_count";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case SET_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload,
      };
    case ADD_VALUE_TO_COUNT:
      return {
        ...state,
        count: state.valueToAdd + state.count,
        valueToAdd: 0,
      };
  }
};
const CounterPage = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, valueToAdd: 0 });

  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT,
    });
  };
  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };
  const haldleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: ADD_VALUE_TO_COUNT,
    });
  };
  return (
    <div className="border max-w-3xl mx-auto mt-24 rounded p-3 shadow bg-white w-full">
      <h1>Count is {state.count}</h1>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
      <form onSubmit={handleSubmit}>
        <label>Add a lot</label>
        <input
          value={state.valueToAdd || ""}
          type="number"
          onChange={haldleChange}
          className="p-1 m-3 border border-gray-300"
        />
        <Button>Add it</Button>
      </form>
    </div>
  );
};

export default CounterPage;
