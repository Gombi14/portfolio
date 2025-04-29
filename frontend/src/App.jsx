import React from 'react';
import { useEffect } from 'react';
import Header from './components/header';
import Principal from './pages/principal'
import Content from './pages/content'
import Tecnologias from './pages/tecnologias';

fetch('http://localhost:3000/api/hello')
.then(res => res.json())
.then(data => console.log(data));


function App() {
  return (
    <>
      <div className='flex flex-col text-white bg-[#000236]'>
        <Header></Header>
        <Principal></Principal>
        <Content></Content>
        <Tecnologias></Tecnologias>
      </div>
    </>
  );
}

export default App;