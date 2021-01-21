import React from 'react';
import { Link } from '@reach/router';

import { Button } from './miniComponents';

export default function Buttons() {
  return (
    <div>
      <Button>
        <Link to={'/'} style={{ textDecoration: 'none', color: '#000000' }}>
          Home
        </Link>
      </Button>
      <Button>
        <Link to={'/pong'} style={{ textDecoration: 'none', color: '#000000' }}>
          Pong
        </Link>
      </Button>
      <Button>
        <Link
          to={'/noughts-and-crosses'}
          style={{ textDecoration: 'none', color: '#000000' }}
        >
          Noughts & Crosses
        </Link>
      </Button>
    </div>
  );
}
