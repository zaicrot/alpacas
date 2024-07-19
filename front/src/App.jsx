import Main from './pages/Main'
import './App.css'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import Manage from './pages/Manage'
import Products from './pages/Products'
import Login from './pages/Login'
function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/products" element={<Products />} />
                    {/* <Route path="/products/:id" element={<Product />} /> */}
                    <Route path="/manage" element={<Manage />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
