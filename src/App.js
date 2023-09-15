import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(5);
  return (
    <>
      <button onClick={() => setCounter((counterval) => counterval - 1)}>
        Decrease the counter value-
      </button>
      <h1>App content here!{counter}</h1>
      <button onClick={() => setCounter((counterval) => counterval + 1)}>
        Increase the counter value+
      </button>
    </>
  );
};

export default App;
