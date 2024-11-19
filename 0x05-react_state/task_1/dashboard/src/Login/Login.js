import { StyleSheet, css } from 'aphrodite';


export default function Login() {
  return (
    <>
      <div className={css(styles.appBody)} data-testid="login">
        <p>Login to access the full dashboard</p>

        <label className={css(styles.label)} htmlFor='email'>Email</label>
        <input className={css(styles.input)} type='email' id='email' name='email' />

        <label className={css(styles.label)} htmlFor='password'> Password </label>
        <input className={css(styles.input)} type='password' id='password' name='password' />

        <button className={css(styles.button)} type='submit'>OK</button>
      </div>
    </>
  )
}

const styles = StyleSheet.create({
  appBody: {
    fontSize: "1.2rem",
    height: "50vh",
    fontFamily: "var(--font-fam)",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    justifyContent: "start",
    position: "relative",
    left: "5%",
  },
  label: {
    fontWeight: "bold",
    marginRight: "5px",
    textAlign: "left",
    width: "100%",
    maxWidth: "400px",
  },
  input: {
    width: "100%",
    maxWidth: "400px",
    padding: "8px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    position: "absolute",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    border: "none",
    backgroundColor: "#af4c56",
    color: "white",
    borderRadius: "4px",
    width: "100%",
    maxWidth: "200px",
    height: "50px",
    top: "35vh",
    ':hover': {
      backgroundColor: "#a05345"
    }
  }
})