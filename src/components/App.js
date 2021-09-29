import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import '../css/App.css';

import Nav from './Nav';
import Header from './Header';
import Page from './Page';

const App = () => {
 
  return (
    <Router>
      <div className="App">
        <Nav />
        <Header />
        <Page />
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
