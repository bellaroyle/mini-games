import './App.css';
import React from 'react';
import { Router } from '@reach/router';

import Header from './components/Header';
import Buttons from './components/Buttons';
import Pong from './components/Pong';

function App() {
  return (
    <div>
      <Header />
      <Buttons />
      <Router>
        <Pong path="/pong" />
      </Router>
    </div>
  );
}

export default App;
