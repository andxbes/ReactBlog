import logo from './img/logo.svg';
import './styles/App.scss';

import './components/blog/blog';
import Blog from './components/blog/blog';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      <Blog></Blog>
    </div>
  );
}

export default App;
