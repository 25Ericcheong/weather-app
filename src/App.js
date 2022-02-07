import "./App.css";

function formatName(user) {
  return `This is ${user.firstName} ${user.lastName}'s first react project!`;
}

function App() {
  const user = {
    firstName: "Eric",
    lastName: "Cheong",
  };

  const element = <h1>{formatName(user)}</h1>;

  return <div className="App">{element}</div>;
}

export default App;
