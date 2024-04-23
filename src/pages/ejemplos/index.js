import React from 'react'
import Saludo from '@/components/Saludo'
import Card from '@/components/Card'
import Button from '@/components/Button'
import NavBar from '@/components/NavBar'
import ContactForm from '@/components/ContactForm'

function index() {
  return (
    <>



  <NavBar />

  <button class="mt-4 py-2 px-4 bg-blue-500 text-white">
  Click me
</button>

<h1 class="text-lg lg:text-2xl">
  Bienvenido a nuestro sitio web
</h1>

<h1 class="text-2xl font-bold text-gray-900">Hola Mundo</h1>
<p class="text-base text-gray-600">Bienvenido a nuestro sitio web.</p>


<div class="bg-blue-500 text-white p-5">
  Un div con fondo azul y texto blanco.
</div>


<button class="m-4 p-2 bg-green-500 text-white">
  Botón con margen y padding
</button>


<div class="flex justify-between items-center">
  <div>Inicio</div>
  <div>Contacto</div>
</div>


<nav class="flex items-center justify-between p-4 bg-gray-800 text-white">
  <div class="text-lg">Logo</div>
  <div>
    <a href="#" class="p-2">Inicio</a>
    <a href="#" class="p-2">Servicios</a>
    <a href="#" class="p-2">Contacto</a>
  </div>
</nav>


<form class="flex flex-col space-y-4">
  <input type="text" placeholder="Your Name" class="p-2 border border-gray-300 rounded" />
  <input type="email" placeholder="Your Email" class="p-2 border border-gray-300 rounded" />
  <button type="submit" class="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Submit</button>
</form>


<div class="max-w-sm rounded overflow-hidden shadow-lg p-5">
  <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Mountains</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </div>
  </div>


    <Saludo nombre="Alejandro" apellido="Lopez" />
    <Card>
    <h1> Título</h1>
    <p>Este es el contenido de la tarjeta</p>
    <p>Este es el contenido de la tarjeta</p>
    </Card>

<div className='p-5'>

<Button color="red">Warning</Button>
<Button color="blue">Submit</Button>
<Button color="green">Click</Button>
</div>

<div>

<ContactForm />
</div>

    </>


  )
}

export default index