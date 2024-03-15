import { useCallback } from "react";
import useCounter from "../hooks/useCounter.hook";

const UseCallback = () => {
  const [counter1, increment1, decrement1] = useCounter(0);
  const [counter2, increment2, decrement2] = useCounter(0);

  const someFunction = () => {
    console.log("this is doing some logic: ", counter1);
  };

  const canchedFunction = useCallback(someFunction, [counter2]);

  return (
    <section className="mt-8">
      <h1 className="text-2xl font-light">useCallback Hook</h1>
      <p className="text-sm">This component uses the useCallback hook</p>
      <p>
        useCallback hook is a performance hook and its used to memoize functions
      </p>

      <div
        className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-xs mt-8 bg-gray-300"
        data-v0-t="card"
      >
        <div className="flex flex-col space-y-1.5 p-6 px-4">
          <h3 className="font-semibold whitespace-nowrap tracking-tight text-lg">
            Counter 1
          </h3>
          <p className="text-muted-foreground text-xs">Current Value</p>
        </div>
        <div className="flex items-center justify-center p-4">
          <p className="text-4xl font-semibold tracking-tighter">{counter1}</p>
        </div>
        <div className="items-center border-t p-4 flex justify-between gap-4">
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-black text-white hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-1/2"
            onClick={increment1}
          >
            Increment
          </button>
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-1/2"
            onClick={decrement1}
          >
            Decrement
          </button>
        </div>
      </div>

      <div
        className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-xs mt-8 bg-gray-300"
        data-v0-t="card"
      >
        <div className="flex flex-col space-y-1.5 p-6 px-4">
          <h3 className="font-semibold whitespace-nowrap tracking-tight text-lg">
            Counter 2
          </h3>
          <p className="text-muted-foreground text-xs">Current Value</p>
        </div>
        <div className="flex items-center justify-center p-4">
          <p className="text-4xl font-semibold tracking-tighter">{counter2}</p>
        </div>
        <div className="items-center border-t p-4 flex justify-between gap-4">
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-black text-white hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-1/2"
            onClick={increment2}
          >
            Increment
          </button>
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-1/2"
            onClick={decrement2}
          >
            Decrement
          </button>
        </div>
      </div>

      <button
        onClick={canchedFunction}
        className="bg-red-300 text-black px-4 py-2 rounded"
      >
        Call function
      </button>
    </section>
  );
};

export default UseCallback;
