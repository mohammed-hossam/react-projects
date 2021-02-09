import React, { useState, useRef, useEffect, useContext } from 'react';
import { AppContext } from './context';
const Submenu = () => {
  const state = useContext(AppContext);
  const submenuRef = useRef(null);
  const [columns, setColumns] = useState('col-2');

  useEffect(() => {
    submenuRef.current.style.left = `${state.btnLocation.centerBtnViewport}px`;
    submenuRef.current.style.top = `${state.btnLocation.bottomBtnViewport}px`;

    if (state.submenuData.links.length === 3) {
      setColumns('col-3');
    }
    if (state.submenuData.links.length > 3) {
      setColumns('col-4');
    }
  }, [state.btnLocation, state.submenuData.links]);

  return (
    <aside
      ref={submenuRef}
      className={`${state.isSubmenuOpen ? 'submenu show' : 'submenu'}`}
    >
      <section>
        <h4>{state.submenuData.page}</h4>
        <div className={`submenu-center ${columns}`}>
          {state.submenuData.links.map((link, index) => {
            const { url, icon, label } = link;
            return (
              <a key={index} href={url}>
                {icon}
                {label}
              </a>
            );
          })}
        </div>
      </section>
    </aside>
  );
};

export default Submenu;
