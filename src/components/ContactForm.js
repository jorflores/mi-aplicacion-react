import React, { useState } from 'react';

function ContactForm() {
    // Estados para manejar los valores de los inputs
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');

    // Manejadores de eventos para actualizar los estados
    const handleNombreChange = (event) => {
        setNombre(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    // Función para manejar el envío del formulario
    const handleSubmit = (event) => {
        event.preventDefault();  // Prevenir el comportamiento de envío predeterminado del formulario
        console.log('Nombre:', nombre);
        console.log('Email:', email);
        // Aquí puedes añadir más lógica para enviar estos datos a un servidor, etc.
    };

    return (
      <div className="max-w-md mx-auto mt-10">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Nombre
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Tu nombre"
              value={nombre}
              onChange={handleNombreChange}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    );
}

export default ContactForm;
