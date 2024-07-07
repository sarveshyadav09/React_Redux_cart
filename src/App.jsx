import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom';
import Cards from './components/Cards';
import CardsDetails from './components/CardsDetails';


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
          <Route path='/' element={<Cards/>}/>
          <Route path='/cart' element={<CardsDetails/>}/>

          
      </Routes>
    </>
  )
}

export default App
