import logo from './utils/image/favicon.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br/>
        <p>
         Octotech Technologies
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/octotechdotin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Octotech Technologies
        </a>
      </header>
    </div>
  );
}

export default App;
