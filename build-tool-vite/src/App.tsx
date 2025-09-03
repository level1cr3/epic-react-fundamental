import Calculator from "./components/Calculator";

function App() {
  return (
    <>
      <Calculator left={1} operator="+" right={2} />
      <Calculator left={1} operator="-" right={2} />
      <Calculator left={1} operator="*" right={2} />
      <Calculator left={1} operator="/" right={2} />
      <Calculator left={2} operator="%" right={2} />
      <Calculator left={4} operator="**" right={2} />
    </>
  );
}

export default App;
