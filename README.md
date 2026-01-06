#  ILMIO - Landing Page

> **Sistemas vivos en evolución.**
> Transformamos ideas en software escalable, automatización y arquitecturas robustas.

##  Descripción

Este repositorio contiene el código fuente de la **Landing Page oficial de ILMIO**.
El proyecto ha sido diseñado con un enfoque moderno, utilizando efectos visuales avanzados como **Glassmorphism** (efecto cristal) en la barra de navegacion y algunos componentes, gradientes dinámicos y fondos de video inmersivos para transmitir la identidad tecnológica de la agencia.

##  Tecnologías Utilizadas

El proyecto está construido con un stack moderno y optimizado para el rendimiento:

* **[React](https://react.dev/)**: Librería principal para la interfaz de usuario.
* **[Vite](https://vitejs.dev/)**: Entorno de desarrollo.
* **[Tailwind CSS](https://tailwindcss.com/)**: Framework de utilidades para un diseño responsivo y personalizado.
* **React Icons**: Para la iconografía vectorial (Bootstrap Icons).
* **React Simple Typewriter**: Efecto de escritura automática en el Hero.
* **React Router**: Para el ruteo entre distintos componentes.

##  Características Principales

* ** Diseño UI/UX Moderno**: Tema oscuro con acentos en violeta y fucsia, utilizando transparencias y desenfoques (Backdrop Blur).
* ** Sección de Contacto Inmersiva**: Fondo de video en loop (`.mp4`) con superposición de capas para mejorar la legibilidad.
* ** Responsivo**: Adaptado perfectamente a móviles, tablets y escritorio.
* ** Navegación Fluida**: Navbar con efectos de scroll suave (`smooth scroll`) hacia las secciones.
* ** Integración de Correo**: Botones de contacto configurados para abrir directamente el cliente de correo o Gmail.
* ** Sección de Arquitectura**: Tarjetas interactivas con efectos de iluminación al pasar el mouse (Hover Effects).


##  Estructura del Proyecto

```text
src/
├── assets/          # Imágenes, videos y recursos estáticos
├── components/      # Componentes de React (Hero, Navbar, Contacto, etc.)
│   ├── Arquitectura.jsx
│   ├── Contacto.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Metodologia.jsx
│   ├── Navbar.jsx
│   └── Servicios.jsx
├── App.jsx          # Componente principal que maneja las secciones
└── main.jsx         # Punto de entrada de la aplicación
