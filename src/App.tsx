import React from 'react';
import { Footer, Header, RobotPages } from './component';
import { Cart, Error, Main, Market, Policy, Team, TermsCorditions } from './pages';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthMe } from './redux/slices/auth';
import { fetchCart } from './redux/slices/cart';

function App() {
  const dispatch: Function = useDispatch();
  const { authMe, cart } = useSelector((state: any) => {
    return {
      authMe: state.auth,
      cart: state.cart
    }
  })

  React.useEffect(() => {
    dispatch(fetchAuthMe());
    if (authMe) {
      dispatch(fetchCart());
    }
  }, [])


  return (
    <div className="wrapper">
      <Header authMe={authMe.data} cart={cart.items.length > 0 ? cart.items.length : 0} />
      <main className='main'>
        <div className='container'>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/market" element={<Market />} />
            <Route path='/market/:id' element={<RobotPages />} />
            <Route path='/terms-corditions' element={<TermsCorditions />} />
            <Route path='/policy' element={<Policy />} />
            <Route path='/team' element={<Team />} />
            <Route path='/cart' element={<Cart />} />

            <Route path='*' element={<Error />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
