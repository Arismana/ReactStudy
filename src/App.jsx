import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Banner from './components/Banner'
import Button from './components/button'
import Toolbar from './components/Toolbar'
import Gallery from './components/Gallery'
// import './App.css '

function App() {

  const names = ["Mike","Sarah","James"]

  const flag = true

  return (
    <>
      <div>
        <Header />
        <Banner name = "jackeyLove" age = "24"/>
        <ul>
          {
            names.map(function(e,i){
              return <li key = {i.toString()}>{e}</li>
            })
          }
        </ul>
      </div>

      {flag?<div>show</div>:<div>hide</div>}

      <Button />
      <Toolbar />
      <Gallery />
    </>
  )
}

export default App
