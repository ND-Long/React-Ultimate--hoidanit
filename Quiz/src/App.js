import './App.css';
import Header from './component/Header/Header';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

const App = () => {

  // useEffect(() => {
  //   document.title = 'Quiz';
  // }, []);
  return (
    <div className="app-container">
      {/* Header */}
      <div className='header-container'>
        <Header />
      </div>
      <div className='content-container'>

        {/* sidebar */}
        <div className='sidebav-container'>
        </div>

        {/* Content */}
        <div className='content'>
          <Outlet />
        </div>
      </div>

    </div >
  );
}

export default App;
