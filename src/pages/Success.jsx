import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

/**
 * Success Page — Post-Purchase Confirmation
 * ───────────────────────────────────────
 * Handles automatic API call for purchase confirmation via email.
 */
function Success() {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const [status, setStatus] = useState("loading"); // loading, success, error

  useEffect(() => {
    async function confirmPurchase() {
      if (!email) {
        setStatus("error");
        return;
      }

      try {
        const response = await fetch("/api/purchase-confirmation", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        if (response.ok) {
          setStatus("success");
        } else {
          setStatus("error");
        }
      } catch (error) {
        console.error("Error confirming purchase:", error);
        setStatus("error");
      }
    }

    confirmPurchase();
  }, [email]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0f1115] text-white p-6 text-center">
      <div className="max-w-md w-full bg-[#1a1d24] p-10 rounded-xl border border-[#2d3139] shadow-2xl">
        {status === "loading" && (
          <>
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-white mx-auto mb-6"></div>
            <h1 className="text-xl font-medium mb-2">Processando...</h1>
            <p className="text-[#a0a5b1]">Validando seu acesso e enviando para o email.</p>
          </>
        )}

        {status === "success" && (
          <>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-500 mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-xl font-medium mb-2">Seu acesso foi enviado para seu email</h1>
            <p className="text-[#a0a5b1]">
              Um link de acesso foi enviado com sucesso para <span className="text-white">{email}</span>.
            </p>
          </>
        )}

        {status === "error" && (
          <>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500/20 text-red-500 mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h1 className="text-xl font-medium mb-2">Erro ao processar sua compra</h1>
            <p className="text-[#a0a5b1]">
              {!email 
                ? "Email ou parâmetros de compra ausentes na URL." 
                : "Não foi possível confirmar sua compra. Por favor, entre em contato com o suporte."}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Success;
