import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar';
import { IconButton } from '@material-ui/core';
import gmailIcon from '../../../Gmail-Icon.jpg';
import './header.css';
import { connect } from 'react-redux';
import { logOut } from '../actions';
import { auth } from '../firebase';

function Header(props) {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src={gmailIcon} alt="gmailIcon" />
      </div>

      <div className="header__middle">
        <SearchIcon id="searchIcon" />
        <input type="text" placeholder="search here" />
        <ArrowDropDownIcon />
      </div>

      <div className="header__right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar
          src={props.userPhoto}
          onClick={() => {
            auth.signOut().then(() => {
              console.log(1234);
              props.logOut();
            });
          }}
        />
      </div>
    </div>
  );
}

// export default Header;

// src={props.userPhoto}
// onClick={() => {
//   auth.signOut().then(() => {
//     console.log(1234);
//     props.logOut();
//   });
// }}

function mapStateToProps(state, ownProps) {
  console.log(state.authReducer.data);
  return { userPhoto: state.authReducer.data?.photoURL };
}

export default connect(mapStateToProps, { logOut })(Header);
