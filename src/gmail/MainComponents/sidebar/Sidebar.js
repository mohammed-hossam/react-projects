import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import StarIcon from '@material-ui/icons/Star';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import SendIcon from '@material-ui/icons/Send';
import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined';
import InboxIcon from '@material-ui/icons/Inbox';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './sidebar.css';
import SidebarOption from './SidebarOption';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import { IconButton } from '@material-ui/core';
import { openSendMsg } from '../actions';
import { connect } from 'react-redux';

function Sidebar(props) {
  console.log(props);
  return (
    <div className="sidebar">
      <Button
        onClick={() => {
          props.openSendMsg();
        }}
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar__compose"
      >
        Compose
      </Button>

      <SidebarOption
        Icon={InboxIcon}
        text="inbox"
        number={'25'}
        selected={true}
      />
      <SidebarOption
        Icon={StarIcon}
        text="Starred"
        number={'25'}
        selected={false}
      />
      <SidebarOption
        Icon={AccessTimeOutlinedIcon}
        text="Snoozed"
        number={'25'}
        selected={false}
      />
      <SidebarOption
        Icon={LabelImportantIcon}
        text="Important"
        number={'25'}
        selected={false}
      />
      <SidebarOption
        Icon={SendIcon}
        text="Sent"
        number={'25'}
        selected={false}
      />
      <SidebarOption
        Icon={ExpandMoreIcon}
        text="More"
        number={''}
        selected={false}
      />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

// function mapStateToProps(state) {
//   console.log(state);
//   return { isOpen: state.sendMsgReducer.compose };
// }

export default connect(null, { openSendMsg })(Sidebar);
