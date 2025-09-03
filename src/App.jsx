import Header from './components/Header'
import Banner from './components/Banner'
import Button from './components/button'
import Toolbar from './components/Toolbar'
import Gallery from './components/Gallery'
import AddArray from './components/AddArray'
import DeleteArray from './components/DeleteArray'
import Guess from './components/Guess'
import Accordion from './components/Accordion'
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
      <AddArray />
      <DeleteArray />
      <Guess />
      <Accordion />
    </>
  )
}

export default App
