import { useEffect, useState } from "react";
import { Check, AlertCircle, Loader2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { saveUserToSupabase } from "../lib/saveUser";

export default function Success() {
  const [status, setStatus] = useState("loading"); // loading, success, error
  const [userEmail, setUserEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("Processing your purchase...");

  useEffect(() => {
    const sendAccess = async () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const email = params.get("email");

        if (email) {
          setUserEmail(email);
          
          // Persistence Trigger with Session Guard
          const hasSaved = sessionStorage.getItem("user_saved");
          if (!hasSaved) {
            saveUserToSupabase(email).then((res) => {
              if (res.success) {
                sessionStorage.setItem("user_saved", "true");
              }
            });
          }
        }

        if (!email) {
          setStatus("error");
          setErrorMessage("Error processing your purchase");
          return;
        }

        const response = await fetch(
          "https://app.promptlabpack.pro/api/purchase-confirmation",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
          }
        );

        if (!response.ok) {
          const text = await response.text();
          console.error("API ERROR:", text);
          setStatus("error");
          setErrorMessage("It was not possible to deliver your access");
          return;
        }

        setStatus("success");
      } catch (error) {
        console.error("FETCH ERROR:", error);
        setStatus("error");
        setErrorMessage("Error connecting to server");
      }
    };

    sendAccess();
  }, []);

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-[#0b0f1a] text-white p-4 font-sans overflow-hidden">
      {/* Background Glows for Premium Tech Feel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-2/3 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Embedded Animation Styles */}
      <style>{`
        @keyframes fade-scale-in {
          0% { opacity: 0; transform: scale(0.95) translateY(10px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-premium-in {
          animation: fade-scale-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* Main Container Card */}
      <div className="relative w-full max-w-md bg-[#121826]/70 backdrop-blur-2xl border border-white/5 shadow-2xl rounded-3xl p-8 sm:p-12 text-center animate-premium-in overflow-hidden">
        {/* Subtle top glare effect */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        {status === "loading" && (
          <div className="flex flex-col items-center justify-center py-4">
            <Loader2 className="w-10 h-10 text-blue-500 animate-spin mb-6" />
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2 tracking-tight">
              Processing your purchase...
            </h2>
            <p className="text-[#8c94a3]/60 text-sm sm:text-base">
              Please wait a moment while we set things up.
            </p>
          </div>
        )}

        {status === "success" && (
          <div className="flex flex-col items-center justify-center">
            {/* Green Modern Check Icon */}
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full" />
              <div className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-green-500 to-emerald-400 rounded-full shadow-lg shadow-green-500/20 ring-4 ring-green-500/10">
                <Check className="w-7 h-7 text-white stroke-[3]" />
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
              Access Delivered Successfully
            </h1>

            <p className="text-[#a0a5b1]/80 text-base sm:text-lg mb-6 leading-relaxed">
              Your private access has been successfully delivered to your email.
            </p>

            {userEmail && (
              <div className="inline-flex items-center justify-center bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6 shadow-inner">
                <span className="text-[#717888]/60 text-sm mr-2">Sent to:</span>
                <span className="font-medium text-white text-sm tracking-wide">
                  {userEmail}
                </span>
              </div>
            )}

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-4" />

            <p className="text-sm text-[#717888]/40 mb-1 font-medium tracking-wide">
              Please check your inbox (and spam folder if needed).
            </p>
            <p className="text-xs text-[#717888]/30 italic mb-8">
              This link may expire for security reasons.
            </p>

            {/* CTA Button */}
            <Link 
              to="/access"
              className="group relative flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg shadow-blue-600/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Open PromptLab
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        )}

        {status === "error" && (
          <div className="flex flex-col items-center justify-center py-4">
            {/* Red Error Icon */}
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full" />
              <div className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-red-500 to-rose-400 rounded-full shadow-lg shadow-red-500/20 ring-4 ring-red-500/10">
                <AlertCircle className="w-7 h-7 text-white" />
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight">
              {errorMessage}
            </h2>
            <p className="text-[#8c94a3]/60 text-sm sm:text-base leading-relaxed">
              It was not possible to deliver your access. Please try again or contact support.
            </p>
            
            <Link 
              to="/access"
              className="mt-8 text-sm text-[#717888] hover:text-white transition-colors flex items-center"
            >
              Return to login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}