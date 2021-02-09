import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import { IconButton } from '@material-ui/core';
import './mailRow.css';
import { useHistory } from 'react-router-dom';
import { selectMail } from '../actions';
import { connect } from 'react-redux';

function MailRow({ id, title, subject, description, time, selectMail }) {
  const history = useHistory();
  return (
    <div
      onClick={() => {
        history.push('/mail');
        selectMail({ title, subject, description, time });
      }}
      className="mailRow"
    >
      <div className="mailRow__icons">
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantIcon />
        </IconButton>
        <h3>{title}</h3>
      </div>

      <div className="mailRow__msg">
        <h4>
          {subject}- <span>{description}</span>
        </h4>
      </div>

      <p>{time}</p>
    </div>
  );
}

export default connect(null, { selectMail })(MailRow);
