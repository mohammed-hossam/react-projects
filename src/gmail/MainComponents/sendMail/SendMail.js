import React, { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import './sendMail.css';
import { connect } from 'react-redux';
import { closeSendMsg } from '../actions';
import { db } from '../firebase';
import firebase from 'firebase';

function SendMail(props) {
  console.log(props);
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const formData = { to, subject, body };
    db.collection('mails').add({
      title: to,
      subject: subject,
      body: body,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    console.log(formData);
    props.closeSendMsg();
  }

  //!important note hena lazm el actions tege mn el props
  if (props.compose) {
    return (
      <div className="sendMail">
        <div className="sendMail__header">
          <h3>New Message</h3>
          <CloseIcon
            onClick={() => {
              props.closeSendMsg();
              console.log('exit');
            }}
          />
        </div>

        <form className="sendMail__body" onSubmit={handleSubmit}>
          <input
            placeholder="to"
            type="text"
            value={to}
            onChange={(e) => {
              setTo(e.target.value);
            }}
          />
          <input
            placeholder="subject"
            type="text"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          />
          <textarea
            placeholder="body"
            type="text"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />

          <div className="sendMail__options">
            <Button
              type="submit"
              className="sendMail__Button"
              variant="contained"
            >
              Send
            </Button>
          </div>
        </form>
      </div>
    );
  }
  return null;
}

function mapStateToProps(state) {
  console.log(state);
  return { compose: state.sendMsgReducer };
}

export default connect(mapStateToProps, { closeSendMsg })(SendMail);
