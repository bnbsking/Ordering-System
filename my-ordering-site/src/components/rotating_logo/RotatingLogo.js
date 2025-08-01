import logo from './logo.svg';
import '../../App.css';

function RotatingLogo() {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"  // open the link in a new tab
        rel="noopener noreferrer"  // security best practice
      >
        Learn React
      </a>
    </div>
  );
}

export default RotatingLogo;
