import React from 'react';

import '../css/App.css';

import Nav from './Nav';
import Header from './Header';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Header />
      Welcome in the login screen
    </div>
  );
}

export default App;
