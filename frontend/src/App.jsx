import { Route, Routes } from "react-router-dom"
import HomePage from './Pages/HomePage'
import CreatPage from './Pages/CreatePage'
import Navbar from "./Components/Navbar"
import DeleteProduct from "./Pages/DeleteProduct"
import UpdateProduct from "./Pages/UpdateProduct"
import { useState } from "react"


function App() {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: ''
  })
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create' element={<CreatPage props={{ newProduct, setNewProduct }} />} />
        <Route path='/delete/:id' element={<DeleteProduct />} />
        <Route path='/update/:id' element={<UpdateProduct />} />
      </Routes>
    </div>
  )
}

export default App