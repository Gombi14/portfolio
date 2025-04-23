import React from 'react';
import { useEffect } from 'react';

fetch('http://localhost:3000/api/hello')
.then(res => res.json())
.then(data => console.log(data));


function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-blue-500">¡Hola desde React con Tailwind v4!</h1>
        <p className="text-gray-700 mb-2">Este es un ejemplo de texto con estilos de Tailwind.</p>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          ¡Botón estilizado!
        </button>
      </div>
    </div>
  );
}

export default App;