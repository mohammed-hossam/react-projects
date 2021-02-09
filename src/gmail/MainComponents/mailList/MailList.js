import React, { useEffect, useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { IconButton } from '@material-ui/core';
import RedoIcon from '@material-ui/icons/Redo';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SettingsIcon from '@material-ui/icons/Settings';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import './mailList.css';
import MailListOption from './MailListOption';
import PeopleIcon from '@material-ui/icons/People';
import InboxIcon from '@material-ui/icons/Inbox';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import MailRow from './MailRow';
import { db } from '../firebase';

function MailList() {
  const [mails, setMails] = useState([]);

  useEffect(() => {
    db.collection('mails')
      .orderBy('timestamp', 'desc')
      .onSnapshot((querySnapshot) => {
        const allMails = querySnapshot.docs.map((doc) => {
          return { id: doc.id, data: doc.data() };
        });
        console.log(allMails);
        setMails(allMails);
      });
  }, []);

  return (
    <div className="mailList">
      <div className="mailList__settings">
        <div className="mailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="mailList__settingsRight">
          <IconButton>
            <SettingsIcon />
          </IconButton>
          <IconButton>
            <ArrowLeftIcon />
          </IconButton>
          <IconButton>
            <ArrowRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardIcon />
          </IconButton>
        </div>
      </div>

      <div className="mailList__options">
        <MailListOption
          Icon={InboxIcon}
          text="Primary"
          selected={true}
          color="red"
        />
        <MailListOption
          Icon={PeopleIcon}
          text="Social"
          selected={false}
          color="blue"
        />
        <MailListOption
          Icon={LocalOfferIcon}
          text="Promotions"
          selected={false}
          color="green"
        />
      </div>

      <div className="mailList__body">
        {mails.map((el) => {
          return (
            <MailRow
              key={el.id}
              title={el.data.title}
              subject={el.data.subject}
              description={el.data.body}
              time={new Date(el.data.timestamp?.seconds * 1000).toUTCString()}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MailList;
