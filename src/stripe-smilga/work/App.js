import React, { Fragment } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Sidebar from './Sidebar';
import Submenu from './Submenu';
import './App.css';
function App() {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Sidebar />
      <Submenu />
    </Fragment>
  );
}

export default App;
