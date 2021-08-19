import React from "react";

function Food() {
  return <h1>I like Food.</h1>
}

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Food name="kimchi" />
    </div>
  );
}

export default App;
