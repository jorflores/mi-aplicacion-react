import axios from 'axios';
import { useState, useEffect } from 'react';

function ListaDeUsuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsuarios(response.data);
        console.log(response.data)
      })
      .catch(error => console.error('Error al obtener los datos:', error));
  }, []);

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-2xl mb-4'>Lista de Usuarios</h1>
      <ul>
        {usuarios.map(usuario => (
          <li key={usuario.id}>{usuario.name} - {usuario.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeUsuarios;
