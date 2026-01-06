import { useState } from 'react';
import logo from '../assets/images/logo-ilmiopng.PNG'
import { BsList, BsX } from 'react-icons/bs';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleScroll = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            setIsOpen(false);
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return(
        <nav className='fixed top-0 left-0 w-full z-50 bg-gray-900/60 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-violet-900/20 transition-all duration-300'>
            <div className='max-w-7xl mx-auto px-6 sm:px-8'>

                <div className='flex lg:grid lg:grid-cols-3 items-center justify-between h-20'>

                    <div className='flex shrink-0 items-center lg:justify-self-start lg:pl-10'>
                        <a href="/" className='cursor-pointer flex items-center gap-2'>
                            <img src={logo} alt="Ilmio Logo" className='h-20 w-auto object-contain drop-shadow-[0_0_8px_rgba(139, 92, 246, 0.5)]' />
                        </a>
                    </div>

                    <div className='hidden lg:flex justify-center lg:justify-self-center'>
                        <div className='flex items-center gap-8'>
                            {['Inicio', 'Servicios', 'Evolución', 'Operación', 'Contacto'].map((item) => (
                                <a 
                                    key={item}
                                    href={`#${item.toLowerCase()}`} 
                                    onClick={(e) => handleScroll(e, item.toLowerCase())}
                                    className='text-gray-300 hover:text-white px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 hover:bg-violet-600/20 whitespace-nowrap'
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className='flex lg:hidden'>
                        <button onClick={() => setIsOpen(!isOpen)} className='inline-flex items-center justify-center p-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none transition-colors'>
                                {isOpen ? <BsX className='h-8 w-8' /> :<BsList className='h-8 w-8' />}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className='absolute top-full left-0 mt-2 w-full bg-gray-900/95 backdrop-blur-xl border-t border-white/10 shadow-2xl p-4 flex flex-col space-y-2 lg:hidden animate-in fade-in slide-in-from-top-5'>
                    {['Inicio', 'Servicios', 'Evolución', 'Operación', 'Contacto'].map((item) => (
                        <a 
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={(e) => handleScroll(e, item.toLowerCase())}
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