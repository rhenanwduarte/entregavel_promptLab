import { Routes, Route } from "react-router-dom";
import Access from "./pages/Access";
import Dashboard from "./promptpack/Dashboard";

function App() {
  return (
    <Routes>
      {/* Página de entrada (gate de acesso) */}
      <Route path="/" element={<Access />} />

      {/* Área do produto (entregável real) */}
      <Route path="/app" element={<Dashboard />} />

      {/* Fallback (qualquer rota inválida volta pro início) */}
      <Route path="*" element={<Access />} />
    </Routes>
  );
}

export default App;