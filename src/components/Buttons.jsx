import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const Button = styled.button`
  background-color: pink;
`;

export default function Buttons() {
  return (
    <div>
      <Button>
        <Link to={'/'}>Home</Link>
      </Button>
      <Button>
        <Link to={'/pong'}>Pong</Link>
      </Button>
      <Button>
        <Link to={'/noughts-and-crosses'}>Noughts & Crosses</Link>
      </Button>
    </div>
  );
}
