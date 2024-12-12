import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class Login extends Component {
  constructor(props) {
    super(props);

    // Local state initialization
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false,
    };

    // Binding functions for performance
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  // Handles form submission
  handleLoginSubmit(event) {
    event.preventDefault(); // Prevent page reload
    this.setState({ isLoggedIn: true });
    console.log('Login successful'); // Test output
  }

  // Handles changes to the email field
  handleChangeEmail(event) {
    const email = event.target.value;
    this.setState(
      { email },
      this.validateInputs // Callback to validate inputs after state update
    );
  }

  // Handles changes to the password field
  handleChangePassword(event) {
    const password = event.target.value;
    this.setState(
      { password },
      this.validateInputs // Callback to validate inputs after state update
    );
  }

  // Validates input fields and toggles the submit button
  validateInputs() {
    const { email, password } = this.state;
    this.setState({
      enableSubmit: email.trim() !== '' && password.trim() !== '',
    });
  }

  render() {
    const { email, password, enableSubmit } = this.state;

    return (
      <>
        <div className={css(styles.appBody)} data-testid="login">
          <p>Login to access the full dashboard</p>
          <form onSubmit={this.handleLoginSubmit}>
            <label className={css(styles.label)} htmlFor="email">
              Email
            </label>
            <input
              className={css(styles.input)}
              type="email"
              id="email"
              name="email"
              value={email} // Controlled component
              onChange={this.handleChangeEmail} // Updates state
            />

            <label className={css(styles.label)} htmlFor="password">
              Password
            </label>
            <input
              className={css(styles.input)}
              type="password"
              id="password"
              name="password"
              value={password} // Controlled component
              onChange={this.handleChangePassword} // Updates state
            />

            <input
              className={css(styles.button)}
              type="submit"
              value="OK"
              disabled={!enableSubmit} // Button enabled/disabled based on state
            />
          </form>
        </div>
      </>
    );
  }
}

const styles = StyleSheet.create({
  appBody: {
    fontSize: '1.2rem',
    height: '50vh',
    fontFamily: 'var(--font-fam)',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    justifyContent: 'start',
    position: 'relative',
    left: '5%',
  },
  label: {
    fontWeight: 'bold',
    marginRight: '5px',
    textAlign: 'left',
    width: '100%',
    maxWidth: '400px',
  },
  input: {
    width: '100%',
    maxWidth: '400px',
    padding: '8px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    position: 'absolute',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: '#af4c56',
    color: 'white',
    borderRadius: '4px',
    width: '100%',
    maxWidth: '200px',
    height: '50px',
    top: '35vh',
    ':hover': {
      backgroundColor: '#a05345',
    },
    ':disabled': {
      backgroundColor: '#ccc',
      cursor: 'not-allowed',
    },
  },
});

export default Login;
