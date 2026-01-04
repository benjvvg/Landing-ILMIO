import { BsEnvelopeAt, BsArrowRight } from 'react-icons/bs';

function Contacto() {
    return (
        <section id="contacto" className='py-24 px-4 relative z-10'>
            <div className='max-w-4xl mx-auto'>
                <div className='relative bg-lienar-to-br from-violet-900/40 to to-gray-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 text-center overflow-hidden shadow-2xl'>
                    <div className='absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-violet-500 to-trans opacity-50'></div>
                    <div className='absolute -top-24 -right-24 w-64 h-64 bg-violet-600/20 rounded-full blur-3xl pointer-events-none'></div>
                    <div className='absolute -bottom-24 -left-24 w-64 h-64 bg-fuchsia-600/20 rounded-full blur-3xl pointer-events-none'></div>

                    <div className='relative z-10'>
                        <h2 className='text-3xl md:text-5xl font-bold text-white mb-6'>
                            Hablemos de tu proyecto
                        </h2>
                        <p className='text-gray-300 text-lg mb-10 max-w-2xl mx-auto'>
                            Cúentanos tu proceso crítico. Te devolvemos una ruta tecnica clara para avanzar sin romper funcionalidades.
                        </p>
                        <div className='flex flex-col items-center gap-4'>
                            <a href="mailto:contacto@ilmio.tech?subject=Cotización%20Proyecto%20ILMIO">
                                <BsEnvelopeAt className='text-xl' />
                                <span>Solicitar Cotizacion</span>
                                <BsArrowRight className='group-hover:translate-x-1 transition-transform' />
                            </a>

                            <p className='text-sm text-gray-500 font-mono select-all'>
                                contacto@ilmio.tech
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacto;