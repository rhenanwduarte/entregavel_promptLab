import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Access from "./pages/Access";
import Success from "./pages/Success";
import Dashboard from "./promptpack/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { supabase } from "./lib/supabase";

/**
 * PromptLab — Main View Controller
 */
function App() {
  useEffect(() => {
    // ─── PHASE 2: Deployment marker ───────────────────────────────────
    console.log("PROMPTLAB_PROD_BUILD_MARKER_V1");

    // ─── PHASE 3: Supabase validation ─────────────────────────────────
    const runSupabaseTest = async () => {
      console.log("SUPABASE_TEST_START");

      try {
        // Test 1 — connectivity (lightweight query)
        const { error: pingError } = await supabase
          .from("users")
          .select("count", { count: "exact", head: true });

        if (pingError) {
          console.error("SUPABASE_CONNECT_ERROR:", pingError.message);
        } else {
          console.log("SUPABASE_CONNECTED_OK");
        }

        // Test 2 — controlled insert
        const { error: insertError } = await supabase
          .from("users")
          .insert([{ email: "teste@promptlab.com" }]);

        if (insertError) {
          console.error("SUPABASE_INSERT_ERROR:", insertError.message);
        } else {
          console.log("SUPABASE_INSERT_OK");
        }
      } catch (err) {
        console.error("SUPABASE_FATAL:", err.message);
      }
    };

    runSupabaseTest();
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