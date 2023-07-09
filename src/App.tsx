import React from 'react';
import { Footer, Header, RobotPages } from './component';
import { Error, Market, Policy, TermsCorditions } from './pages';
import { Route, Routes } from 'react-router-dom';


function App() {


  return (
    <div className="wrapper">
      <Header />
      <main className='main'>
        <div className='container'>
          <Routes>
            <Route path="/" element={<Market />} />
            <Route path='/robot/:id' element={<RobotPages />} />
            <Route path='/terms-corditions' element={<TermsCorditions />} />
            <Route path='/policy' element={<Policy />} />

            <Route path='*' element={<Error />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
