import { useState } from "react";
import Child from "./components/Child.component";

function App() {
  const [childName, setChildName] = useState("Walter White!");

  const changeName = () => {
    setChildName("Antony");
  };

  return (
    <div>
      <h1 className="text-3xl text-red-300">The Parent Component</h1>

      <Child name={childName} />

      <button onClick={changeName}>Change Name</button>
    </div>
  );
  

  // Babel transpiles JSX into React.createElement chain like below

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Hello World!")
  // );
}

export default App;
