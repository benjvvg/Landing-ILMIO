import { BsEnvelope } from "react-icons/bs"
import icono from '../assets/images/favicon-96x96.png'

function Footer() {
    return (
        <footer className="bg-black/80 backdrop-blur-xl border-t border-white/10 pt-16 pb-8 relative z-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <img src={icono} alt="Icono ILMIO" className="h-10 w-auto object-contain" />
                            <span className="bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                                ILMIO
                            </span>
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                            Arquitectura de software, automatización y sistemas vivos.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Explorar</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-violet-400 transition-colors">Inicio</a></li>
                            <li><a href="#servicios" className="hover:text-violet-400 transition-colors">Servicios</a></li>
                            <li><a href="#evolución" className="hover:text-violet-400 transition-colors">Arquitectura</a></li>
                            <li><a href="#operación" className="hover:text-violet-400 transition-colors">Metodología</a></li>
                            <li><a href="#contacto" className="hover:text-violet-400 transition-colors">Contacto</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Conecta</h4>
                        <div className="flex gap-4 mb-6">
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contacto@ilmio.tech" target="_blank" rel='noopener noreferrer' className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-violet-600 hover:text-white transition-all">
                                <BsEnvelope />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>© {new Date().getFullYear()} ILMIO SPA - Sistemas vivos en evolución.</p>
                </div>
            </div>
        </footer>
    )
} 

export default Footer;
