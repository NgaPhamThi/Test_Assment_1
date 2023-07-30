import { Route, Routes } from "react-router-dom"
import './App.css'
import Homepage from "./pages/Homepage"
import Detail from "./pages/Detail"
import AddProduct from "./pages/Admin/AddProduct"
import UpdateProduct from "./pages/Admin/UpdateProduct"
import Product from "./pages/Admin/Product"
import { useEffect, useState } from "react"

function App() {
  const [product, setProduct] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [])
  const addProduct = (data) => {
    var options = {
      method: "POST",
      body: JSON.stringify(data)
    };
    fetch("http://localhost:3000/products", options)
      .then(res => res.json())
      .then(data => console.log(data))

  }

  return <div>
    <Routes>
      <Route path="/" element={<Homepage product={product} />} />
      <Route path="/detail/:id" element={<Detail product={product} />} />
      <Route path="/admin/product/add" element={<AddProduct addProduct={addProduct} />} />
      <Route path="/admin/product/:id/update" element={<UpdateProduct />} />
      <Route path="/admin/product" element={<Product product={product} />} />

    </Routes>

  </div>

}

export default App
