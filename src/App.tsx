import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import BudgetDetail from "./pages/BudgetDetail";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/login' element={<Login />} />
      <Route path='/budgets/:id' element={<BudgetDetail />} />
    </Routes>
  );
}

export default App;
