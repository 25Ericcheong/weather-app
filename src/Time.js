import "./App.css";

function Time() {
  const element = (
    <div>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  );

  return <div className="App">{element}</div>;
}

export default Time;
