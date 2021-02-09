import React, { useContext } from 'react';
import { AppContext } from './AppProvider';
import logo from './logo.svg';
import { FaTimes } from 'react-icons/fa';
import { social, links } from './data';

function Sidebar() {
  const state = useContext(AppContext);
  return (
    <aside
      className={`${state.isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
    >
      <div className="sidebar-header">
        <img src={logo} className="logo" alt="coding addict" />
        <button className="close-btn" onClick={state.closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links-container">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons-container">
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;
