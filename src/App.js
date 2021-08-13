import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar";
import Images from './Images.Guru1.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={require('./Images/Guru 1.jpg').default} height={200} width={100}
             <img src={Images} height={200} width={100}
        <p>
          Sikh History : Learn about Sikhism here.
        </p>
        <a
          className="App-link"
          href="https://www.basicsofsikhi.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Sikhism
        </a>
      </header>
    </div>
  );
}

export default App;
