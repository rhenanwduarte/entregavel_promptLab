import { Routes, Route } from "react-router-dom";
import Access from "./pages/Access";
import Dashboard from "./promptpack/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

/**
 * PromptLab — Main View Controller
 * ────────────────────────────────
 * Handles the high-level routing for the entire application.
 * Note: /app is the protected deliverable dashboard.
 */
function App() {
  return (
    <Routes>
      {/* 
          1. Product Access Gate (Root)
          Handles identification and session unlocking.
      */}
      <Route path="/" element={<Access />} />

      {/* 
          2. Protected Deliverable
          Requires active "hasAccess" session in localStorage.
          This is the ONLY route for /app.
      */}
      <Route
        path="/app"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* 
          3. Fallback Route
          Seamlessly redirects any undefined paths back to the access gate.
      */}
      <Route path="*" element={<Access />} />
    </Routes>
  );
}

export default App;