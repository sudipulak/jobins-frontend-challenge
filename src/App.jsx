import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from './components/layouts/layout'
import Dashboard from './pages/Dashboard'
import OrderManagement from './pages/OrderManagement'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index={true} element={<Dashboard />}></Route>
            <Route path="/order-management" element={<OrderManagement />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
