import React from 'react';
import Navbar from './components/Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Shared/Footer';

const App = () => {
  return (
    <div >
      <Navbar></Navbar>
      <div className='min-h-[calc(100vh-136px)]'><Outlet></Outlet></div>
      <Footer></Footer>
    </div>
  );
};

export default App;