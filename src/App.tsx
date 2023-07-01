import React from 'react';
import { Footer, Header } from './component';
import { Market } from './pages';

import axios from 'axios';


function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className='main'>
        <Market />
      </main>
      <Footer />
    </div>
  );
}

export default App;
