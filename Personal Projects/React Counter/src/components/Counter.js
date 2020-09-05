import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);

  const reset = () => setCounter((prev) => (prev = 0));

  const decrement = () => setCounter(counter - 1);

  return (
    <div className="counter">
      <h1
        className={counter === 0 ? "reset" : counter > 0 ? "greater" : "less"}
      >
        {counter}
      </h1>
      <div className="buttons">
        <button onClick={increment}>
          <i className="fa fa-plus fa-2x"></i>
        </button>
        <button onClick={reset}>
          <i className="fa fa-refresh fa-2x"></i>
        </button>
        <button onClick={decrement}>
          <i className="fa fa-minus fa-2x"></i>
        </button>
      </div>
    </div>
  );
};

export default Counter;
