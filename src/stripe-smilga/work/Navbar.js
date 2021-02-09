import React, { useContext } from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { AppContext } from './context';

const Navbar = () => {
  const state = useContext(AppContext);
  const { openSidebar, openSubmenu, closeSubmenu } = state;
  console.log(state);

  function displaySubmenu(e) {
    const btnText = e.target.textContent;
    //hena ana 3ayz 2geb center of btn wl bottom bta3o brdo
    //el object ele by7slo return mn functiongetBounding deh bykon feh el 2b3ad bat3t el element ele 3ndy ka width w height w kaman 2b3ado nsbtn ll viewport
    const BtnLocation = e.target.getBoundingClientRect();
    console.log(btnText);
    console.log(BtnLocation);
    const centerBtnViewport = BtnLocation.width / 2 + BtnLocation.left;
    const bottomBtnViewport = BtnLocation.bottom;
    //hena el mfrod lma 23ml open ll submenu tkon feha state gwaha el locations deh b7es lma tt8yr ysl rerender ll 7agat ele mo3dtma 3leha ele heya el mfrod hzbotha b7es tkon el submenu fh3ml passing ll locations deh ll submenu mn el state el kbera ele fe context file
    openSubmenu(btnText, { centerBtnViewport, bottomBtnViewport });
  }

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu();
    }
  };
  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="nav-logo" />
          <button onClick={openSidebar} className="btn toggle-btn">
            <FaBars />
          </button>
        </div>

        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>

        <button className="btn signin-btn">sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
