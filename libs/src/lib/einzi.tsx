import { Route, Link } from 'react-router-dom';

import styled from 'tailwind';

const StyledEinzi = styled.div`
  color: pink;
`;

export function Einzi() {
  return (
    <StyledEinzi>
      <h1>Welcome to Einzi!</h1>

      <ul>
        <li>
          <Link to="/">libs/src/lib/einzi root</Link>
        </li>
      </ul>
      <Route
        path="/"
        element={<div>This is the libs/src/lib/einzi root route.</div>}
      />
    </StyledEinzi>
  );
}

export default Einzi;
