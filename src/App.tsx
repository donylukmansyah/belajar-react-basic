import { useState } from "react";
// import "./App.css";



function App() {

  const [count, setCount] = useState<number>(0)
  const [hallo, setHallo] = useState<string>("")
  
  function clickMe():void {
    setCount((count) => count + 1)
  }

  

  return (
    <>
    
      <h1>counter ke: {count}</h1>
      <button onClick={clickMe}>click gua</button>

      {/* ? hallo word */}
      <h1>{hallo}</h1>
      <button onClick={() => setHallo("Hallow World")}>Ini diclick yaa...</button>
    </>
  );
}

export default App;
