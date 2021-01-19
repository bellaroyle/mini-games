import React from 'react';
import P5Wrapper from 'react-p5-wrapper';

import sketch from '../pong/sketch';

export default function Pong() {
  return (
    <div>
      <p>pong game</p>
      <P5Wrapper sketch={sketch}></P5Wrapper>
    </div>
  );
}
