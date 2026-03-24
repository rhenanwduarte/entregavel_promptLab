import { Navigate } from "react-router-dom";

/**
 * ProtectedRoute
 * ──────────────
 * Wraps any route that requires active premium access.
 *
 * Enforces:
 * - hasAccess === "true" in localStorage
 * - Otherwise redirects to "/" (Access gate)
 */
export default function ProtectedRoute({ children }) {
  const hasAccess = localStorage.getItem("hasAccess") === "true";

  if (!hasAccess) {
    return <Navigate to="/" replace />;
  }

  return children;
}
