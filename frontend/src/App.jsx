import React from 'react';
import { useEffect } from 'react';
import Header from './components/header';
import Principal from './components/principal'
import Content from './components/content'

fetch('http://localhost:3000/api/hello')
.then(res => res.json())
.then(data => console.log(data));


function App() {
  return (
    <>
      <div className='flex flex-col text-white'>
        <Header></Header>
        <Principal></Principal>
        <Content></Content>
      </div>
    </>
  );
}

export default App;