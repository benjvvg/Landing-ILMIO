import { Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <div className='bg-linear-to-b from-[#4c1d95] via-[#2e1065] to-gray-900 min-h-screen text-violet-400'>
        <Navbar />
          <Routes>
            <Route path='/' element={<Hero />} />
          </Routes>
      </div>
    </>
  );
};

export default App
