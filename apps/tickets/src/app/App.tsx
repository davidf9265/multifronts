import { Route, Routes, Link } from 'react-router-dom';
import { setStore } from 'einzi';

export function App() {
  const addTicketToCart = () => {
    console.log('Ticket added to cart');
    setStore({ ticket: 'ticket' });
  };
  return (
    <div>
      <button onClick={addTicketToCart}>Add to Cart</button>
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
