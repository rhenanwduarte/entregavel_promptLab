import { useEffect, useState } from "react";

export default function Success() {
  const [message, setMessage] = useState("Processando sua compra...");

  useEffect(() => {
    const sendAccess = async () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const email = params.get("email");

        if (!email) {
          setMessage("Erro ao processar sua compra");
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
          setMessage("Erro ao enviar acesso");
          return;
        }

        setMessage("Seu acesso foi enviado para seu email");
      } catch (error) {
        console.error("FETCH ERROR:", error);
        setMessage("Erro ao conectar com o servidor");
      }
    };

    sendAccess();
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0b0f1a",
        color: "white",
        fontSize: "20px",
        textAlign: "center",
        padding: "20px",
      }}
    >
      {message}
    </div>
  );
}