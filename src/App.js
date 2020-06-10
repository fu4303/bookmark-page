import React from 'react';
import './App.css';
import Learning from './Learning';
import CodingChallenges from './CodingChallenges'
import Documentation from './Documentation'
import Color from './Color'
import Image from './Image'

function App() {
  return (
    <div className="App">
      <Learning />
      <Documentation />
      <CodingChallenges />
      <Color />
      <Image />
    </div>
  );
}

export default App;