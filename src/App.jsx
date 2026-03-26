import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "./lib/supabase";
import Access from "./pages/Access";
import Success from "./pages/Success";
import Dashboard from "./promptpack/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

/**
 * PromptLab — Main View Controller
 * Production-ready version with Supabase Auth (JWT/RLS)
 */
function App() {
  const [session, setSession] = useState(null);
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    // 0. Legacy Auth Cleanup (Purging old email-based flags)
    localStorage.removeItem("promptlab_email");
    localStorage.removeItem("hasAccess");

    async function initAuth() {
      try {
        // 1. Complete PKCE flow if returning from Magic Link (code in URL)
        await supabase.auth.exchangeCodeForSession(window.location.href);
      } catch (err) {
        // Safe no-op: if no code is present, Supabase throws — we ignore it
        console.warn("PKCE exchange skipped or failed:", err.message);
      }

      // 2. Resolve final session state after potential code exchange
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      setIsInitializing(false);
    }

    initAuth();

    // 3. Listen for subsequent auth state changes (e.g. tab refocus, sign out)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setIsInitializing(false); // Safeguard
    });

    return () => subscription.unsubscribe();
  }, []);

  // 3. Routing awaits hydration to prevent infinite login loops
  if (isInitializing) {
    return (
      <div className="min-h-screen bg-[#0b0f1a] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-t-blue-500 border-r-blue-500 border-b-transparent border-l-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <Routes>
      {/* Access Gate (Magic Link Request) */}
      <Route path="/" element={<Access session={session} />} />

      {/* Success Page (After Purchase) */}
      <Route path="/success" element={<Success />} />

      {/* Protected Dashboard */}
      <Route
        path="/app"
        element={
          <ProtectedRoute session={session}>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* Fallback */}
      <Route path="*" element={<Access session={session} />} />
    </Routes>
  );
}

export default App;