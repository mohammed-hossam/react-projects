import React from 'react';
import './sidebarOption.css';

function SidebarOption({ Icon, text, number, selected }) {
  return (
    <div className={`sidebarOption ${selected && 'sidebarOption-active'}`}>
      <Icon />
      <h3>{text}</h3>
      <p>{number}</p>
    </div>
  );
}

export default SidebarOption;
