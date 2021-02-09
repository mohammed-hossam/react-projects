import { Button } from '@material-ui/core';
import React from 'react';
import login from '../../gmaillogin.jpg';
import { provider, auth } from '../firebase';
import './login.css';
import { logIn } from '../actions';
import { connect } from 'react-redux';

function Login(props) {
  function handleLogin() {
    auth.signInWithPopup(provider).then((result) => {
      const user = result.user;
      console.log(user);
      props.logIn({
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      });
    });
  }

  return (
    <div className="login">
      <div className="login__container">
        <img src={login} alt="login gmail" />
        <Button color="primary" variant="contained" onClick={handleLogin}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default connect(null, { logIn })(Login);
