import React from 'react';
import { Footer, Header, RobotPages } from './component';
import { Error, Main, Market, Policy, Team, TermsCorditions } from './pages';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchAuthMe } from './redux/slices/auth';

function App() {
  const dispatch: Function = useDispatch();

  React.useEffect(() => {
    dispatch(fetchAuthMe());
  })

  return (
    <div className="wrapper">
      <Header />
      <main className='main'>
        <div className='container'>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/market" element={<Market />} />
            <Route path='/market/:id' element={<RobotPages />} />
            <Route path='/terms-corditions' element={<TermsCorditions />} />
            <Route path='/policy' element={<Policy />} />
            <Route path='/team' element={<Team />} />

            <Route path='*' element={<Error />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
