import { Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Servicios from './components/Servicios'
import Metodologia from './components/Metodologia';
import Arquitectura from './components/Arquitectura';
import Contacto from './components/Contacto'
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className='relative w-full min-h-screen bg-gray-900 text-violet-400 overflow-hidden font-sans selection:bg-violet-500/30 selection:text-violet-200'>

        <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
          <div className="absolute inset-0 bg-linear-to-b from-[#4c1d95] via-[#2e1065] to-gray-900 opacity-90"></div>
          <div className="absolute top-[-10%] left-[-10%] w-125 h-125 bg-violet-600/40 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
          <div className="absolute top-[-10%] right-[-10%] w-125 h-125 bg-fuchsia-600/40 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[-20%] left-[20%] w-150 h-150 bg-blue-600/30 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000"></div>
        </div>

        <div className='relative z-10 felx flex-col min-h-screen'>
        <Navbar />
          <Routes>
            <Route path='/' element={   
              <main className='grow'>
                <Hero />
                <Servicios />
                <Arquitectura />
                <Metodologia />
                <Contacto />
                <Footer />
              </main>
            } />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App
