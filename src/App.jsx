import { Routes, Route } from "react-router-dom";
import Access from "./pages/Access";
import Success from "./pages/Success";
import Dashboard from "./promptpack/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

/**
 * PromptLab — Main View Controller
 * Production-ready version (clean, no debug logs)
 */
function App() {
  return (
    <Routes>
      {/* Access Gate */}
      <Route path="/" element={<Access />} />

      {/* Success Page (after purchase / unlock) */}
      <Route path="/success" element={<Success />} />

      {/* Protected Dashboard */}
      <Route
        path="/app"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* Fallback */}
      <Route path="*" element={<Access />} />
    </Routes>
  );
}

export default App;