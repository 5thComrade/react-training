import { useRef, useEffect } from "react";

const UseRef = () => {
  console.log("component re-rendered!");
  const pRef = useRef(null);
  const counterRef = useRef(0);

  useEffect(() => {
    console.log("p tag: ", pRef.current);
    pRef.current.style.color = "blue";
  }, []);

  const increment = () => {
    counterRef.current = counterRef.current + 1;
  };

  return (
    <section className="mt-8">
      <h1 className="text-2xl font-light">useRef Hook</h1>
      <p className="text-sm">This component uses the useRef hook</p>
      <p className="text-sm" ref={pRef}>
        If you want to reference a particular element or if you want to persist
        data across re-renders but changing the data itself doesnt trigger a
        re-render, use the useRef hook.
      </p>

      <button
        onClick={increment}
        className="bg-black rounded px-4 py-2 text-white"
      >
        Increment by 1
      </button>

      <button
        onClick={() => console.log(counterRef.current)}
        className="bg-white text-black rounded px-4 py-2 border ml-6"
      >
        Console log the counter value
      </button>
    </section>
  );
};

export default UseRef;
