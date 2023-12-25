//import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
    <h1>My Todo</h1>
    <div>
      <input type="text" id="newElement" placeholder='Add something to do.' />
      <button >Save</button>
    </div>
    <hr/>
    <div>
      <label clasName='elements'>
        <input type="checkbox" className='item'/>Install Node Js
        <button className='button'>Button</button>
        <hr />
        <input type="checkbox" className='item'/>Install angular CLI
        <button className='button'>Button</button>
        <hr />
        <input type="checkbox" className='item'/>Create new app
        <button className='button'>Button</button>
        <hr />
        <input type="checkbox" className='item'/>Serve app
        <button className='button'>Button</button>
        <hr />
        <input type="checkbox" className='item'/>Develop app
        <button className='button'>Button</button>
        <hr />
        <input type="checkbox" className='item'/>Deploy app
        <button className='button1'>Button</button>
      </label>
      
    </div>
    
    


      
    </>
  )
}

export default App
