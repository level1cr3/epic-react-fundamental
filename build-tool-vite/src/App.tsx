import { useState } from "react";

function App() {
  const [key, setKey] = useState(0);

  return (
    <>
      <input key={key} type="text" />
      <button onClick={() => setKey(key + 1)}> reset</button>
    </>
  );
}

export default App;
