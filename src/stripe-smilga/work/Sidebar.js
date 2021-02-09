import React, { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import sublinks from './data';
import { AppContext } from './context';

const Sidebar = () => {
  const state = useContext(AppContext);
  return (
    <div
      className={`${
        state.isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'
      }`}
    >
      <aside className="sidebar">
        <button className="close-btn" onClick={state.closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((el, index) => {
            return (
              <article key={index}>
                <h4>{el.page}</h4>
                <div className="sidebar-sublinks">
                  {el.links.map((el, index) => {
                    return (
                      <a key={index} href={el.url}>
                        {el.icon} {el.label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
