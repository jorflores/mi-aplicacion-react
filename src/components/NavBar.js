import React, { useState } from 'react';

function Navbar() {
  // Estado para manejar la visibilidad del menú móvil
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">LOGO</div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Inicio</a>
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Sobre Nosotros</a>
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Servicios</a>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="mobile-menu-button">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Menú móvil, se muestra u oculta basado en el estado isOpen */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">Inicio</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">Sobre Nosotros</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">Servicios</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
