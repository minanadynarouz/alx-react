import logo from './logo.jpg';
import './App.css';

export default function App() {
  return (
    <>
      <div className="App-header">
        <img src={logo} alt="Holborten Logo" />
        <h1>School dashboard</h1>
        <hr />
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <hr />
      </div>
      <div className="App-footer">
        <h1>Copyright 2020 - holberton School</h1>
      </div>
    </>
  )
}