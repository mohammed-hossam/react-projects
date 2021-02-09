import React, { Fragment } from 'react';
import Home from './Home';
import Modal from './Modal';
import Sidebar from './Sidebar';
import './App.css';

function App() {
  return (
    <Fragment>
      <Home />
      <Modal />
      <Sidebar />
    </Fragment>
  );
}

export default App;
