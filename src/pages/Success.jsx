import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * Success Landing Page
 * Post-checkout gateway that cleanly informs the user to check their email
 * for the access link or instructions. Zero client-side DB transactions.
 */
export default function Success() {
  return (
    <div className="min-h-screen relative flex items-center justify-center bg-[#0b0f1a] text-white p-4 font-sans overflow-hidden">
      {/* Background Glows for Premium Tech Feel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-2/3 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

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
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="flex flex-col items-center justify-center">
          {/* Green Modern Check Icon */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full" />
            <div className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-green-500 to-emerald-400 rounded-full shadow-lg shadow-green-500/20 ring-4 ring-green-500/10">
              <Check className="w-7 h-7 text-white stroke-[3]" />
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
            Purchase Successful
          </h1>

          <p className="text-[#a0a5b1]/80 text-base sm:text-lg mb-6 leading-relaxed">
            Your PromptLab access has been provisioned securely.
          </p>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-4" />

          <p className="text-sm text-[#717888] mb-1 font-medium tracking-wide">
            We have sent your access details to your email inbox.
          </p>
          <p className="text-xs text-[#717888]/50 italic mb-8">
            Please use your email to log in through the access page.
          </p>

          {/* CTA Button */}
          <Link 
            to="/"
            className="group relative flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg shadow-blue-600/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            Access Dashboard
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}