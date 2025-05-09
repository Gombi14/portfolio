import React from 'react';
import { useEffect, useState } from 'react';
import Header from './components/header';
import Principal from './pages/principal'
import Content from './pages/content'
import Tecnologias from './pages/tecnologias';
import Contact from './pages/contact'
import Proyectos from './pages/proyectos'
import Formacion from './pages/formacion';

fetch('http://localhost:3000/api/hello')
.then(res => res.json())
.then(data => console.log(data));


function App() {
  const [showContact, setShowContact] = useState(false);
  return (
    <>
      <div className='flex flex-col text-white bg-[#000236]'>
        <Header onContactClick={() => setShowContact(true)} />
        {showContact && <Contact onClose={() => setShowContact(false)} />}
        <Principal></Principal>
        <Content></Content>
        <Formacion></Formacion>
        <Tecnologias></Tecnologias>
        <Proyectos></Proyectos>
      </div>
    </>
  );
}

export default App;