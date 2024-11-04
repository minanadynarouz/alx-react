import './App.css';
import Footer from './Footer/Footer.js';
import Header from './Header/Header.js';
import Login from './Login/Login.js';
import Notifications from './Notifications.js';

export default function App() {
  return (
    <>
      <Notifications />
      <Header />
      <Login />
      <Footer />
    </>
  )
}