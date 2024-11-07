import './Login.css';

export default function Login() {
  return (
    <>
      <div className="App-body" data-testid="login">
        <p>Login to access the full dashboard</p>

        <label htmlFor='email'>Email</label>
        <input type='email' id='email' name='email' />

        <label htmlFor='password'> Password </label>
        <input type='password' id='password' name='password' />

        <button type='submit'>OK</button>
      </div>
    </>
  )
}