import React, { Profiler } from 'react';
import './App.css';
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Notifications from '../NotificationItem/Notifications.js';
import CourseList from '../CourseList/CourseList.js';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils.js';


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





class App extends React.Component {
  render() {
    const { isLoggedIn } = this.props;
    const notificationMessage = getLatestNotification();
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];
    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", html: notificationMessage }
    ];

    return (
      <>
        <Profiler id="App" onRender={onRenderCallback} >
          <Notifications displayDrawer={true} listNotifications={listNotifications} />
          <Header />
          {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
          <Footer />
        </Profiler>
      </>
    )
  }
}

App.defaultProps = {
  isLoggedIn: false,
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
}

export default App;

