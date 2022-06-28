import logo from "./logo.svg";
import "./App.css";
import Alaa from "./Alaa/Alaa";
import Ahmedibrahim from "./Ahmed-ibrahim/Ahmed_ibrahim";
import Mostafa from "./Mostafa/mostafa";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* { 1-NourEldeen AbdElaaty } */}
        <h1> NourEldeen AbdElaaty</h1>
        <Alaa />
        <h1>Amr Elkoumy</h1>
        <Ahmedibrahim></Ahmedibrahim>
        <Mostafa />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
