import Calculator from "./components/Calculator";

function App() {
  return (
    <>
      <Calculator left={1} operator="+" right={2} />
      <Calculator left={1} operator="-" right={2} />
      <Calculator left={1} operator="*" right={2} />
      <Calculator left={1} operator="/" right={2} />
    </>
  );
}

export default App;
