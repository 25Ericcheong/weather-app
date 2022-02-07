import "./App.css";

function formatName(user) {
  return `This is ${user.firstName} ${user.lastName}'s first react project!`;
}

function App(props) {
  const user = {
    firstName: "Eric",
    lastName: "Cheong",
  };
  const userElement = <h1>{formatName(user)}</h1>;

  return (
    <section className="App">
      <h1>{userElement}</h1>
      <h2>{props.appName}</h2>
    </section>
  );
}

export default App;
