import { Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Servicios from './components/Servicios'
import Metodologia from './components/Metodologia';

function App() {
  return (
    <>
      <div className='bg-linear-to-b from-[#4c1d95] via-[#2e1065] to-gray-900 min-h-screen text-violet-400 scroll-smooth'>
        <Navbar />
          <Routes>
            <Route path='/' element={   
              <>
                <Hero />
                <Servicios />
                <Metodologia />
              </>
            } />
          </Routes>
      </div>
    </>
  );
};

export default App
