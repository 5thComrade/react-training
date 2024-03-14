// import React, { useState } from "react";
// import UseState from "./components/UseState.component";
// import UseEffect from "./components/UseEffect.component";
import UseCustom from "./components/UseCustom.component";

function App() {
  return (
    <main className="p-8">
      <h1 className="text-3xl text-red-300">The ReactJS Training</h1>
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      <UseCustom />
    </main>
  );

  // Babel transpiles JSX into React.createElement chain like below

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Hello World!")
  // );
}

export default App;
