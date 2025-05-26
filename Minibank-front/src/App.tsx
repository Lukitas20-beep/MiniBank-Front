// src/App.tsx
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login' // vamos criar em seguida
import Register from './pages/Register';
import Dashboard from './pages/user/Dashboard';
import ManagerDashboard from './pages/manager/ManagerDashboard'; //Gerente
import Transfers from './pages/user/Transfer';
import Others from './pages/user/Others';
import Payments from './pages/user/Payments';
import Cards from './pages/user/Cards';
import Lending from './pages/user/Lending';
import Extract from './pages/user/ Extract';
import LoanRequests from './pages/manager/LoanRequest';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/manager" element={<ManagerDashboard />} />
      <Route path="/pedidos-emprestimos" element={<LoanRequests />} />
      <Route path="/transferencias" element={<Transfers />} />
      <Route path="/outros" element={<Others />} />
      <Route path="/pagamentos" element={<Payments />} />
      <Route path="/cartoes" element={<Cards />} />
      <Route path="/emprestimos" element={<Lending />} />
      <Route path="/extrato" element={<Extract />} />
    </Routes>
  )
}

export default App;
