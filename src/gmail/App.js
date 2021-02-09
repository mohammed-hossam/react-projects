import React, { useEffect } from 'react';
import Header from './MainComponents/Header/Header';
import Sidebar from './MainComponents/sidebar/Sidebar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Mail from './MainComponents/mail/Mail';
import MailList from './MainComponents/mailList/MailList';
import './app.css';
import SendMail from './MainComponents/sendMail/SendMail';
import Login from './MainComponents/login/Login';
import { connect } from 'react-redux';
import { logIn } from './MainComponents/actions';
import { auth } from './MainComponents/firebase';
function App(props) {
  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        props.logIn({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
      {!props.user.loggedIn ? (
        <Route path="/">
          <Login />
        </Route>
      ) : (
        <div className="app">
          <Header />

          <div className="app__body">
            <Sidebar />
            <Switch>
              <Route exact path="/">
                <MailList />
              </Route>
              <Route>
                <Mail path="/mail" />
              </Route>
            </Switch>
          </div>
          <SendMail />
        </div>
      )}
    </BrowserRouter>
  );
}

function mapStateToProps(state, ownProps) {
  return { user: state.authReducer };
}

export default connect(mapStateToProps, { logIn })(App);
