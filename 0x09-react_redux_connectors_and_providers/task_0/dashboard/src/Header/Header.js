import logo from '../assets/logo.jpg';
import { StyleSheet, css } from 'aphrodite';


export default function Header() {
  return (
    <>
      <div className={css(styles.appHeader)} data-testid="header" >
        <img className={css(styles.appHeaderImg)} src={logo} alt="Holborten Logo" />
        <h1 className={css(styles.appHeaderH1)}>School dashboard</h1>
      </div >
      <hr className={css(styles.headerHr)} />
    </>
  )
}

const styles = StyleSheet.create({
  appHeader: {
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 1016px)': {
      flexDirection: 'column',
      alignItems: 'start',
    }
  },
  appHeaderH1: {
    color: 'rgb(237, 63, 63)',
    fontFamily: 'var(--font-fam)',
    '@media (max-width: 1016px)': {
      fontSize: '1.5rem',
    }
  },
  appHeaderImg: {
    width: '250px',
    '@media (max-width: 1016px)': {
      width: '150px',
    }
  },
  headerHr: {
    border: 'none',
    height: '3px',
    backgroundColor: 'rgb(237, 63, 63)',
    marginInline: '10px',
    '@media (max-width: 1016px)': {
      marginTop: '20%',
    }
  }
});
