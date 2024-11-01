import logo from './logo.jpg';
import { getFullYear, getFooterCopy } from './utils';
import './App.css';

export default function App() {
  return (
    <>
      <div className="App-header">
        <img src={logo} alt="Holborten Logo" />
        <h1>School dashboard</h1>
      </div>
      <hr />
      <div className="App-body">
        <p>Login to access the full dashboard</p>

        <label htmlFor='email'>Email</label>
        <input type='email' id='email' name='email' />

        <label htmlFor='password'> Password </label>
        <input type='password' id='password' name='password' />

        <button type='submit'>OK</button>
      </div>
      <hr />
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(false)}</p>
      </div>
    </>
  )
}