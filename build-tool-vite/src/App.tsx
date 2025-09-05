import Box from "./components/Box";

function App() {
  return (
    <>
      <Box size="small" style={{ backgroundColor: "lightblue" }}>
        small lightblue box
      </Box>

      <Box size="medium" style={{ backgroundColor: "pink" }}>
        medium pink box
      </Box>

      <Box size="large" style={{ backgroundColor: "orange" }}>
        large orange box
      </Box>

      <Box>sizeless colorless box</Box>
    </>
  );
}

export default App;
