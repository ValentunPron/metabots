import React from 'react';
import { Footer, Header, RobotPages } from './component';
import { Market } from './pages';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRobots } from './redux/slices/robots';


function App() {
  const dispatch: Function = useDispatch();

  React.useEffect(() => {
    dispatch(fetchRobots());
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <main className='main'>
        <div className='container'>
          <Routes>
            <Route path="/" element={<Market />} />
            <Route path='/robot/:id' element={<RobotPages />} />

            <Route path='*' element={<Market />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
