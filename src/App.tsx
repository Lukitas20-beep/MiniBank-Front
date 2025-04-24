// src/App.tsx
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login' // vamos criar em seguida
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Transfers from './pages/Transfer';
import Others from './pages/Others';
import Payments from './pages/Payments';
import Cards from './pages/Cards';
import Lending from './pages/Lending';
import CurrentAccount from './pages/CurrentAcconut';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/transferencias" element={<Transfers />} />
      <Route path="/outros" element={<Others />} />
      <Route path="/pagamentos" element={<Payments />} />
      <Route path="/cartoes" element={<Cards />} />
      <Route path="/emprestimos" element={<Lending />} />
      <Route path="/conta" element={<CurrentAccount />} />
    </Routes>
  )
}

export default App;