import { BsLinkedin, BsGithub, BsEnvelope } from "react-icons/bs"

function Footer() {
    return (
        <footer className="bg-black/80 backdrop-blur-xl border-t border-white/10 pt-16 pb-8 relative z-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid gird-cols-1 md:grid-cols-4 gap-12 mb-12">

                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-violet-500"></span>
                            ILMIO
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
                            <li><a href="#como" className="hover:text-violet-400 transition-colors">Metodología</a></li>
                            <li><a href="#contacto" className="hover:text-violet-400 transition-colors"></a>Contacto</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Conecta</h4>
                        <div className="flex gap-4 mb-6">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-violet-600 hover:text-white transition-all">
                                <BsLinkedin />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-violet-600 hover:text-white transition-all">
                                <BsGithub />
                            </a>
                            <a href="mailto:contacto@ilmio.tech" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-violet-600 hover:text-white transition-all">
                                <BsEnvelope />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>© {new Date().getFullYear()} ILMIO Tech. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
} 

export default Footer;
