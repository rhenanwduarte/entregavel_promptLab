import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { checkUserAuthorization } from '../lib/supabase'
import { Loader2 } from "lucide-react";

/**
 * ProtectedRoute
 * ──────────────
 * Checks if the user_email in localStorage is authorized
 */
export default function ProtectedRoute({ children }) {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let active = true;

    async function verifySecurity() {
      const email = localStorage.getItem('user_email');

      if (!email) {
        if (active) {
          setIsAuthorized(false);
          setIsChecking(false);
          navigate("/", { replace: true });
        }
        return;
      }

      const authorized = await checkUserAuthorization(email);

      if (active) {
        if (authorized) {
          setIsAuthorized(true);
        } else {
          localStorage.removeItem('user_email');
          setIsAuthorized(false);
          navigate("/", { replace: true });
        }
        setIsChecking(false);
      }
    }

    verifySecurity();

    return () => {
      active = false;
    };
  }, [navigate]);

  if (isChecking) {
    return (
      <div className="min-h-screen bg-[#0b0f1a] flex flex-col items-center justify-center p-4">
        <Loader2 className="w-10 h-10 text-blue-500 animate-spin mb-4" />
        <p className="text-[#8c94a3]/80 text-sm font-sans tracking-wide">
          Verifying authorization clearance...
        </p>
      </div>
    );
  }

  if (!isAuthorized) {
    return <Navigate to="/" replace />;
  }

  return children;
}
