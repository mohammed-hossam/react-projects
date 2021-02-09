import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { AppContext } from './AppProvider';
function Home() {
  const state = useContext(AppContext);
  console.log(state);
  return (
    <main>
      <button onClick={state.openSidebar} className="sidebar-toggle">
        <FaBars />
      </button>
      <button onClick={state.openModal} className="modal-btn">
        show modal
      </button>
    </main>
  );
}

export default Home;
