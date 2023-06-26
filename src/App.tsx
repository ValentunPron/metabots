import React from 'react';
import { Header } from './component';
import { Market } from './pages';


function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className='main'>
        <Market />
      </main>
    </div>
  );
}

export default App;
