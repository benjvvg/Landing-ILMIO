import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo-ilmiopng.png'
import logomorado from '../assets/images/ilmiomorado.jpeg' 
import { BsList, BsX } from 'react-icons/bs';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <nav className='fixed top-0 left-0 w-full z-50 bg-gray-900/60 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-violet-900/20 transition-all duration-300'>
            <div className='max-w-7xl mx-auto px-6 sm:px-8'>
                <div className='flex items-center justify-between h-20'>
                    <div className='flex shrink-0 items-center'>
                        <Link to="/" className='cursor-pointer flex items-center gap-2'>
                            <img src={logo} alt="Ilmio Logo" className='h-21 w-auto object-contain drop-shadow-[0_0_8px_rgba(139, 92, 246, 0.5)]' />
                        </Link>
                    </div>
                    <div className='hidden md:block'>
                        <div className='flex items-center space-x-1'>
                            {['Inicio', 'Servicios', 'Nosotros', 'Contacto'].map((item) => (
                                <a 
                                    key={item}
                                    href={`#${item.toLowerCase()}`} 
                                    className='text-gray-300 hover:text-white px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(167,139,250,0.3)] border border-transparent hover:border-white/20'
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className='hidden md:block'>
                        <Link to="/contacto" className='bg-violet-600 hover:bg-violet-500 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-[0_0_20px_rgba(124,58,237,0.5)] hover:shadow-[0_0_30px_rgba(124,58,237,0.7)] border border-violet-400/50'>
                            Cotizar
                        </Link>
                    </div>
                    <div className='flex md:hidden'>
                        <button onClick={() => setIsOpen(!isOpen)} className='inline-flex items-center justify-center p-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none transition-colors'>
                                {isOpen ? <BsX className='h-8 w-8' /> :<BsList className='h-8 w-8' />}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className='absolute top-full left-0 mt-2 w-full bg-gray-900/90 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-4 flex flex-col space-y-2 md:hidden animate-in fade-in slide-in-from-top-5'>
                    {['Inicio', 'Servicios', 'Nosotros', 'Contacto'].map((item) => (
                        <a 
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={() => setIsOpen(false)} 
                            className='text-gray-300 hover:text-white hover:bg-violet-600/20 block px-4 py-3 rounded-xl text-center font-medium transition-colors'
                        >
                            {item}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    )
}

export default Navbar;