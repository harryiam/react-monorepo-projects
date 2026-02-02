function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Square & Circle</h1>

      <div
        className="square"
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "lightblue",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="circle"
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "coral",
            borderRadius: "50%",
          }}
        />
      </div>
    </div>
  );
}

export default App;
