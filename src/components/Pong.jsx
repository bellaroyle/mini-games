import React, { useState } from 'react';
import P5Wrapper from 'react-p5-wrapper';

import sketch from '../pong/sketch';
import { Button } from './miniComponents';

export default function Pong() {
  const [play, setPlay] = useState(false);
  const handlePlay = () => {
    setPlay(true);
  };
  return (
    <div>
      <p>pong game</p>
      <Button onClick={handlePlay}>Play</Button>
      {play ? <P5Wrapper sketch={sketch}></P5Wrapper> : null}
    </div>
  );
}
