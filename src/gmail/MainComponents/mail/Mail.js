import React from 'react';
import { IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import LabelIcon from '@material-ui/icons/Label';
import EmailIcon from '@material-ui/icons/Email';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PrintIcon from '@material-ui/icons/Print';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import './mail.css';
import selectMailReducer from '../reducers/selectMailReducer';
function Mail({ mail }) {
  const history = useHistory();
  console.log(mail);

  return (
    <div className="mail">
      <div className="mail__settings">
        <div className="mail__settingsLeft">
          <IconButton
            onClick={() => {
              history.push('/');
            }}
          >
            <ArrowBackIcon />
          </IconButton>
          <IconButton>
            <MoveToInboxIcon />
          </IconButton>
          <IconButton>
            <ReportIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EmailIcon />
          </IconButton>
          <IconButton>
            <WatchLaterIcon />
          </IconButton>
          <IconButton>
            <AddCircleIcon />
          </IconButton>
          <IconButton>
            <LabelIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>

        <div className="mail__settingsRight">
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>
          <IconButton>
            <PrintIcon />
          </IconButton>
          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>

      <div className="mail__body">
        <div className="mail__bodyHeader">
          <h2>{mail.subject}</h2>
          <LabelImportantIcon className="labelIcon" />
          <p>{mail.title}</p>
          <p>{mail.time}</p>
        </div>
        <div className="mail__bodyMsg">
          <p>{mail.description}</p>
        </div>
      </div>
    </div>
  );
}
function mapStateToProps(state, ownProps) {
  return { mail: state.selectMailReducer };
}
export default connect(mapStateToProps, {})(Mail);
