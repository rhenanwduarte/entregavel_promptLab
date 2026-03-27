import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { checkUserAuthorization } from '../lib/supabase'
import { Loader2 } from "lucide-react";

/**
 * ProtectedRoute (JWT Verified + Dual Authorization Layer)
 * ──────────────
 * 1. Checks if a robust Supabase JWT Session exists.
 * 2. Asynchronously verifies if the JWT email exists in the `authorized_users` whitelist table.
 * 3. Kicks unverified accounts out, actively terminating their sessions.
 */
export default function ProtectedRoute({ session, children }) {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let active = true;

    async function verifyDualLayerSecurity() {
      // 1. JWT Authentication Guard
      if (!session) {
        if (active) {
          setIsAuthorized(false);
          setIsChecking(false);
        }
        return;
      }

      const email = session.user?.email;

      // Safety catch: JWT without email payload
      if (!email) {
        if (active) {
          console.warn("Unauthorized access attempt blocked.");
          await supabase.auth.signOut();
          setIsAuthorized(false);
          setIsChecking(false);
          navigate("/", { replace: true });
        }
        return;
      }

      // 2. Database Authorization Guard
      const authorized = await checkUserAuthorization(email);

      if (active) {
        if (authorized) {
          setIsAuthorized(true);
        } else {
          // If they authenticated but have no authorization rights (i.e. didn't pay),
          // aggressively log them out to destroy their JWT from the browser and send them to the gate.
          console.warn("Unauthorized access attempt blocked.");
          await supabase.auth.signOut();
          setIsAuthorized(false);
          navigate("/", { replace: true });
        }
        setIsChecking(false);
      }
    }

    verifyDualLayerSecurity();

    return () => {
      active = false;
    };
  }, [session, navigate]);

  if (isChecking) {
    return (
      <div className="min-h-screen bg-[#0b0f1a] flex flex-col items-center justify-center p-4">
        <Loader2 className="w-10 h-10 text-blue-500 animate-spin mb-4" />
        <p className="text-[#8c94a3]/80 text-sm font-sans tracking-wide">
          Verifying identity and authorization clearance...
        </p>
      </div>
    );
  }

  // Final fallback (typically handled by the hooks above, but safe to keep)
  if (!isAuthorized) {
    return <Navigate to="/" replace />;
  }

  return children;
}
