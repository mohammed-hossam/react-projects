import React from 'react';
import './mailListOption.css';

function MailListOption({ Icon, text, selected, color }) {
  return (
    <div
      className={`mailListOption ${selected && 'mailListOption-selected'}`}
      style={{ borderBottom: `3px solid ${selected && color}` }}
    >
      <Icon />
      <p>{text}</p>
    </div>
  );
}

export default MailListOption;
