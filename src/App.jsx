import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddStudent from './Componenets/AddStudent'
import SearchStudent from './Componenets/SearchStudent'
import DeleteStudent from './Componenets/DeleteStudent'
import ViewStudent from './Componenets/ViewStudent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddStudent/>} />
        <Route path='/search' element={<SearchStudent/>} />
        <Route path='/delete' element={<DeleteStudent/>} />
        <Route path='/view' element={<ViewStudent/>} />

        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
