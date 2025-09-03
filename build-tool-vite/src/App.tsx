import Calculator from "./components/Calculator";

function App() {
  return (
    <>
      <Calculator />
      <Calculator left={1} right={2} />
      <Calculator left={1} operator="*" />
      <Calculator right={2} />
      <Calculator left={2} operator="%" right={2} />
      <Calculator left={4} operator="**" right={2} />
    </>
  );
}

export default App;
