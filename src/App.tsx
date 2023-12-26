//import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
    <h1>My Todo</h1>
    <div className='padreContenedor'>
      <input type="text" id="newElement" placeholder='Add something to do.' />
      <button className='butSave'>Save</button>
    </div>
    <hr/>
    <div className='contenedor'>
      <input type="checkbox" className='item' />
      <label for="item1">Install NodeJS</label>
      <button className='buton'>Summit</button>
    </div>
    <hr />
    <div className='contenedor'>
      <input type="checkbox" className='item' />
      <label for="item1">Instalar angular CLI</label>
      <button className='buton'>Summit</button>
    </div>
    <hr />
    <div className='contenedor'>
      <input type="checkbox" className='item' />
      <label for="item1">Create new app</label>
      <button className='buton'>Summit</button>
    </div>
    <hr />
    <div className='contenedor'>
      <input type="checkbox" className='item' />
      <label for="item1">Serve app</label>
      <button className='buton'>Summit</button>
    </div>
    <hr />
    <div className='contenedor'>
      <input type="checkbox" className='item' />
      <label for="item1">Develop app</label>
      <button className='buton'>Summit</button>
    </div>
    <hr />
    <div className='contenedor'>
      <input type="checkbox" className='item' />
      <label for="item1">Deploy app</label>
      <button className='buton'>Summit</button>
    </div>
     
    
    </>
  )
}

export default App
