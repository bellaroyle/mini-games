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
        <Link to={'/pong'}>play pong</Link>
      </Button>
    </div>
  );
}
