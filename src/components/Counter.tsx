import { useState } from "react";


const Counter = () => {
  const [count, setCount] = useState<number>(0)

  function handleIncrement() {
    setCount((value) => value + 1)
  }

  
  function handleDecrement() {
    setCount((value) => value - 1)
  }



  return (
    <div className="flex gap-5 justify-center items-center">
      <button onClick={handleDecrement} className="bg-gray-300 text-2xl font-bold w-xs h-36 rounded-2xl cursor-pointer">
        kurang
      </button>
      <p className="text-7xl font-bold p-1 rounded-2xl">{count}</p>
      <button onClick={handleIncrement} className="bg-gray-300 text-2xl font-bold w-xs h-36 rounded-2xl cursor-pointer">
        tambah
      </button>
    </div>
  );
};

export default Counter;
