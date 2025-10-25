// import { useState } from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Home from './pages/Home';
import Explore from './pages/Explore';
import GameDetails from './pages/GameDetails';
import AddGame from './pages/AddGame';
import './App.css'
import Navigation from './components/Navigation';
import { CartProvider } from "./context/CartContext";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <CartProvider> {/* ✅ wrap everything here */}
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/game/:id' element={<GameDetails />} />
          <Route path="/addGame" element={<AddGame />} /> {/* new route */}
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
