import { useState } from "react";

const UseState = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    // if you new value is dependent on the previous pass a callback function
    setCounter((prev) => prev + 1);
  };

  const decrement = () => {
    setCounter((prev) => prev - 1);
  };

  return (
    <section className="mt-8">
      <h1 className="text-2xl font-light">useState Hook</h1>
      <p className="text-sm">This component uses useState hook</p>

      <div
        className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-xs mt-8 bg-gray-300"
        data-v0-t="card"
      >
        <div className="flex flex-col space-y-1.5 p-6 px-4">
          <h3 className="font-semibold whitespace-nowrap tracking-tight text-lg">
            Counter
          </h3>
          <p className="text-muted-foreground text-xs">Current Value</p>
        </div>
        <div className="flex items-center justify-center p-4">
          <p className="text-4xl font-semibold tracking-tighter">{counter}</p>
        </div>
        <div className="items-center border-t p-4 flex justify-between gap-4">
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-black text-white hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-1/2"
            onClick={increment}
          >
            Increment
          </button>
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-1/2"
            onClick={decrement}
          >
            Decrement
          </button>
        </div>
      </div>
    </section>
  );
};

export default UseState;
