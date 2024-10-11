import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Content from './pages/Content'
import Home from './pages/Home'
import Header from './Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
     <Routes>
      <Route path='/about' element= {<About />}/>
      <Route path='/content' element= {<Content />}/>
      <Route path='/Home' element= {<Home />}/>
     </Routes>
    </>
  )
}

export default App
