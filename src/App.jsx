import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Access from "./pages/Access";
import Success from "./pages/Success";
import Dashboard from "./promptpack/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { testSupabaseConnection } from "./lib/supabaseTest";

/**
 * PromptLab — Main View Controller
 * ────────────────────────────────
 * Handles the high-level routing for the entire application.
 * Note: /app is the protected deliverable dashboard.
 */
function App() {
  useEffect(() => {
    const checkConnection = async () => {
      const result = await testSupabaseConnection();
      if (result.success) {
        console.log("✅ Supabase connected");
      } else {
        console.error("❌ Supabase error:", result.error);
      }
    };
    checkConnection();
  }, []);

  return (
    <Routes>
      {/* 
          1. Product Access Gate (Root)
          Handles identification and session unlocking.
      */}
      <Route path="/" element={<Access />} />
      <Route path="/success" element={<Success />} />

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