import './App.css';
import React from 'react';
import { Router } from '@reach/router';

import Header from './components/Header';
import Buttons from './components/Buttons';
import Pong from './components/Pong';
import NoughtsAndCrosses from './components/NoughtsAndCrosses';

function App() {
  return (
    <div>
      <Header />
      <Buttons />
      <Router>
        <Pong path="/pong" />
        <NoughtsAndCrosses path="/noughts-and-crosses" />
      </Router>
    </div>
  );
}

export default App;
