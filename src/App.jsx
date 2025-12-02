
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Instructions from './pages/Instructions'
function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/instrucoes" element={<Instructions/>} />

    </Routes>
    </BrowserRouter>

  )
    
}
export default App
