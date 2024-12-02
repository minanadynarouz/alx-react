import React, { Component, useEffect, useRef, useState } from 'react'
import Notifications from '../Notifications/Notifications.js'
import { getLatestNotification } from '../utils.js'
import Login from '../Login/Login.js'
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'
import CourseList from '../CourseList/CourseList.js'
import BodySection from '../BodySection/BodySection.js'
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom.js'
import propTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';



// implement class components
class App extends Component {
  constructor() {
    super();
    this.state = {
      displayDrawer: false,
    }
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }
  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }
  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  // class function to check if component is mounted
  componentDidMount() {
    window.addEventListener('keydown', this.keyDownHandler);
  }

  // class function to check if component is unmounted
  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDownHandler);
  }

  // class function to check if ctrl-h is pressed
  keyDownHandler = (e) => {
    if (e.keyCode === 72 && e.ctrlKey) {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  render() {
    // assign props to local variables
    const { isLoggedIn } = this.props;

    const listCourses = [
      { id: 1, name: 'ES6', credit: '60' },
      { id: 2, name: 'Webpack', credit: '20' },
      { id: 3, name: 'React', credit: '40' }
    ]

    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, html: { __html: getLatestNotification() }, type: "urgent" }
    ]

    return (
      <div className="App">
        <Notifications listNotifications={listNotifications} displayDrawer={true} handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer} />
        <Header />
        <div className="App-body">
          {isLoggedIn
            ?
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
            :
            <BodySectionWithMarginBottom title="Login in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          }
          <BodySection title="News from the School"><p>Boring random text</p></BodySection>
        </div>
        <div className={css(styles.hr, styles.appFooter)}>
          <Footer />
        </div>
      </div>
    )
  }
}


App.defaultProps = {
  isLoggedIn: false,
  logOut: () => { console.log('logOut function console log for testing') }
}

App.propTypes = {
  isLoggedIn: propTypes.bool,
  logOut: propTypes.func,
}

const styles = StyleSheet.create({
  hr: {
    border: 'none',
    height: "4px",
    backgroundColor: 'rgb(237, 63, 63)',
    marginLeft: "10px",
    marginRight: "10px",
  },
  appFooter: {
    fontStyle: 'italic',
    fontSize: '1.2rem',
    textAlign: 'center',
    fontFamily: '"PT Serif", serif'
  }


})

export default App