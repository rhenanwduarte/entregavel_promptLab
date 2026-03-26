import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Access from "./pages/Access";
import Success from "./pages/Success";
import Dashboard from "./promptpack/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { testSupabaseConnection } from "./lib/supabaseTest";
import { supabase } from "./lib/supabase";

/**
 * PromptLab — Main View Controller
 */
function App() {
  useEffect(() => {
    const runTest = async () => {
      // ✅ TESTE 1 — conexão
      const result = await testSupabaseConnection();

      if (result.success) {
        console.log("✅ Supabase connected");
      } else {
        console.error("❌ Supabase error:", result.error);
      }

      // 🔥 TESTE 2 — INSERT REAL
      const { data, error } = await supabase.from("users").insert([
        {
          email: "teste@promptlab.com",
        },
      ]);

      console.log("INSERT RESULT:", data, error);
    };

    runTest();
  }, []);

  return (
    <Routes>
      {/* Access Gate */}
      <Route path="/" element={<Access />} />
      <Route path="/success" element={<Success />} />

      {/* Protected Area */}
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