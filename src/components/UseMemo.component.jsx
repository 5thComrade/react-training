import { useState, useMemo } from "react";
import useCounter from "../hooks/useCounter.hook";

const UseMemo = () => {
  const [counter, increment, decrement] = useCounter(0);
  // eslint-disable-next-line no-unused-vars
  const [items, setItems] = useState([
    { id: 1, name: "Toy", price: 20 },
    { id: 2, name: "Food", price: 80 },
  ]);

  const calculateTotal = () => {
    console.log(
      "this function did the entire calculation again! Thats a problem"
    );
    return items.reduce((a, c) => a + c.price, 0);
  };

  // UNCOMMENT LINES 18 AND 19 AND COMMENT LINES 21 AND 22 TO SEE WHY WE NEED USECALLBACK

  //   const calculateSumOfPrices = calculateTotal();
  //   console.log(
  //     "this value is not cached and calculateTotal is called again and again when the component re-renders",
  //     calculateSumOfPrices
  //   );

  const cachedSumOfPrices = useMemo(() => calculateTotal(), [items]);
  console.log(
    "the value returned by calculateTotal is cached and hence calculateTotal is not called again and again",
    cachedSumOfPrices
  );

  return (
    <section className="mt-8">
      <h1 className="text-2xl font-light">useMemo Hook</h1>
      <p className="text-sm">This component uses the useMemo hook</p>
      <p>
        useMemo hook is a performance hook and its used to memoize
        values(values, arrays, objects etc)
      </p>

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

export default UseMemo;
