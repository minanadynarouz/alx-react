import React, { Profiler } from 'react';
import './App.css';
import Footer from './Footer/Footer.js';
import Header from './Header/Header.js';
import Login from './Login/Login.js';
import Notifications from './Notifications.js';
import CourseList from './CourseList/CourseList.js';
import PropTypes from 'prop-types';


const onRenderCallback = (
  id, // id of the Profiler tree
  phase, // "mount" or "update"
  actualDuration, // time spent rendering the committed update
  baseDuration, // estimated time to render the entire subtree without memoization
  startTime, // when React began rendering this update
  commitTime, // when React committed this update
  interactions // interactions that triggered this update
) => {
  console.log(`ID: ${id}, Phase: ${phase}, Actual Duration: ${actualDuration}`);
};

export default function App({ isLoggedIn }) {
  return (
    <>
      <Profiler id="App" onRender={onRenderCallback} >
        <Notifications displayDrawer={true} />
        <Header />
        {isLoggedIn ? <CourseList /> : <Login />}
        <Footer />
      </Profiler>
    </>
  )
}

App.defaultProps = {
  isLoggedIn: false,
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
}