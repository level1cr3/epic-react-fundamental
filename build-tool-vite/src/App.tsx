function App() {
  return (
    <>
      <div
        className="box box--small"
        style={{ backgroundColor: "lightblue", fontStyle: "italic" }}
      >
        small lightblue box
      </div>
      <div
        className="box box--medium"
        style={{ backgroundColor: "pink", fontStyle: "italic" }}
      >
        medium pink box
      </div>
      <div
        className="box box--large"
        style={{ backgroundColor: "orange", fontStyle: "italic" }}
      >
        large orange box
      </div>
      <div className="box" style={{ fontStyle: "italic" }}>
        sizeless colorless box
      </div>
    </>
  );
}

export default App;
