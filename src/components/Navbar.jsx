import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo-ilmiopng.png'
import logomorado from '../assets/images/ilmiomorado.jpeg' 
import { BsList, BsX } from 'react-icons/bs';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <nav className='fixed w-full z-50 top-0 bg-gray-900/80 backdrop-blur-md border-b border-gray-800'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    <div className='flex shrink-0'>
                        <Link to="/" className='cursor-pointer'>
                            <img src={logo} alt="Ilmio Logo" className='h-20 w-auto object-contain' />
                        </Link>
                    </div>
                    <div className='hidden md:block'>
                        <div className='ml-10 flex items-baseline space-x-4'>
                            <Link className='text-white hover:text-white hover:bg-fuchsia-700 px-3 py-2 rounded-md text-sm font-medium transition-all'>Inicio</Link>
                            <Link className='text-white hover:text-white hover:bg-fuchsia-700 px-3 py-2 rounded-md text-sm font-medium transition-all'>Nosotros</Link>
                        </div>
                    </div>
                    <div className='-mr-2 flex md:hidden'>
                        <button onClick={() => setIsOpen(!isOpen)} className='inline-flex items-center justify-center p-2 rounded-md text-shadow-violet-500 hover:text-white hover:bg-violet-700 focus:outline-none'>
                            {isOpen ? (
                                <BsX className='h-8 w-8' />
                            ) : (
                                <BsList className='h-8 w-8'/>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className='md:hidden bg-gray-900 border-b border-gray-800'>
                    <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                        <Link to='/' onClick={() => setIsOpen(false)} className='text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-all'>Inicio</Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar;