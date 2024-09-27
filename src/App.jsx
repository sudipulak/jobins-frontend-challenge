import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from './components/layouts/layout'
import Dashboard from './pages/Dashboard'
import OrderManagement from './pages/OrderManagement'
import Brand from './pages/Brand'
import AddProduct from './pages/AddProduct'
import ProductList from './pages/ProductList'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index={true} element={<Dashboard />}></Route>
            <Route path="/order-management" element={<OrderManagement />}></Route>
            <Route path="/brand" element={<Brand />}></Route>
            <Route path="/add-product" element={<AddProduct />}></Route>
            <Route path="/product-list" element={<ProductList />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
