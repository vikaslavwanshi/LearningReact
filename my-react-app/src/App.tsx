import { ReactComponent as Logo } from "./logo.svg";
import Posts from "./Components/Posts";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Logo style={{ height: 200 }} />
        <h1> Smiles me Custom Printing
        </h1>
        <body> Print your ideas!!
        </body>
      </header>
      <Posts />
    </div>
  );
}

export default App;
