import React from "react";
import Button from "../components/Button";
import { useState } from "react";

const CounterPage = () => {
  const [count, setCount] = useState(0);
  const [valueToAdd, setValueToAdd] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const haldleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    setValueToAdd(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setCount(count + valueToAdd);
    setValueToAdd(0);
  };
  return (
    <div className="border max-w-3xl mx-auto mt-24 rounded p-3 shadow bg-white w-full">
      <h1>Count is {count}</h1>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
      <form onSubmit={handleSubmit}>
        <label>Add a lot</label>
        <input
          value={valueToAdd || ""}
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
