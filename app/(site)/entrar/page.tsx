"use client";

import { useEffect, useRef, useState } from "react";

const BACKEND_HEALTH_URL = "https://prontuario-back.onrender.com/health";
const FRONTEND_SIGNIN_URL = "https://sig-hovet.site/auth/signin";
const INTERVAL_SECONDS = 5;

type WakeUpStatus = "idle" | "checking" | "ready" | "unavailable" | "error";

function isBackendReady(payload: unknown): boolean {
  return (
    Array.isArray(payload) &&
    payload.length === 2 &&
    payload[0] === "up" &&
    payload[1] === "up"
  );
}

function useBackendWakeUp() {
  const [status, setStatus] = useState<WakeUpStatus>("idle");
  const [message, setMessage] = useState("Iniciando verificação do backend...");

  const inFlightRef = useRef(false);
  const attemptsRef = useRef(0);

  useEffect(() => {
    let cancelled = false;

    const checkBackend = async () => {
      if (inFlightRef.current || cancelled) return;

      inFlightRef.current = true;
      attemptsRef.current += 1;

      console.log(`Tentativa de health check do backend #${attemptsRef.current}`);

      setStatus("checking");
      setMessage("Tentando despertar o backend...");

      try {
        const response = await fetch(BACKEND_HEALTH_URL, {
          cache: "no-store",
        });

        if (response.status === 503) {
          console.log("Backend temporariamente indisponível.", {
            status: response.status,
            statusText: response.statusText,
          });

          setStatus("unavailable");
          setMessage("Backend temporariamente indisponível.");
          return;
        }

        const data = await response.json();

        if (response.status === 200 && isBackendReady(data)) {
          console.log("Backend pronto.", data);
          setStatus("ready");
          setMessage("Backend ativo.");
          return;
        }

        console.log("Backend ainda não está pronto.", {
          status: response.status,
          data,
        });

        setStatus("checking");
        setMessage("Backend ainda em suspensão. Tentando novamente...");
      } catch (error) {
        console.log("Backend sem resposta no momento.", error);

        setStatus("error");
        setMessage("Backend sem resposta no momento. Tentando novamente...");
      } finally {
        inFlightRef.current = false;
      }
    };

    checkBackend();

    const interval = setInterval(() => {
      checkBackend();
    }, INTERVAL_SECONDS * 1000);

    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  return {
    isReady: status === "ready",
    status,
    message,
  };
}

function useFrontendWakeUp() {
  const [status, setStatus] = useState<WakeUpStatus>("idle");
  const [message, setMessage] = useState("Iniciando verificação do frontend...");

  const inFlightRef = useRef(false);
  const attemptsRef = useRef(0);

  useEffect(() => {
    let cancelled = false;

    const checkFrontend = async () => {
      if (inFlightRef.current || cancelled) return;

      inFlightRef.current = true;
      attemptsRef.current += 1;

      console.log(`Tentativa de health check do frontend #${attemptsRef.current}`);

      setStatus("checking");
      setMessage("Tentando despertar o frontend...");

      try {
        const response = await fetch(FRONTEND_SIGNIN_URL, {
          method: "GET",
          cache: "no-store",
        });

        if (response.status === 503) {
          console.log("Frontend temporariamente indisponível.", {
            status: response.status,
            statusText: response.statusText,
          });

          setStatus("unavailable");
          setMessage("Frontend temporariamente indisponível.");
          return;
        }

        if (response.ok) {
          console.log("Frontend pronto.", {
            status: response.status,
            url: response.url,
          });

          setStatus("ready");
          setMessage("Frontend ativo.");
          return;
        }

        console.log("Frontend ainda não está pronto.", {
          status: response.status,
          statusText: response.statusText,
        });

        setStatus("checking");
        setMessage("Frontend ainda em suspensão. Tentando novamente...");
      } catch (error) {
        console.log(
          "Erro ao verificar frontend. Considerando disponível por provável bloqueio de CORS.",
          error,
        );

        setStatus("ready");
        setMessage("Frontend ativo.");
      } finally {
        inFlightRef.current = false;
      }
    };

    checkFrontend();

    const interval = setInterval(() => {
      checkFrontend();
    }, INTERVAL_SECONDS * 1000);

    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  return {
    isReady: status === "ready",
    status,
    message,
  };
}

function getStatusLabel(status: WakeUpStatus) {
  switch (status) {
    case "ready":
      return "Ativo";
    case "checking":
      return "Verificando";
    case "unavailable":
      return "Indisponível";
    case "error":
      return "Sem resposta";
    case "idle":
    default:
      return "Aguardando";
  }
}

export default function EntrarPage() {
  const backend = useBackendWakeUp();
  const frontend = useFrontendWakeUp();

  useEffect(() => {
    if (!backend.isReady || !frontend.isReady) return;

    console.log("Backend e frontend prontos. Redirecionando para o frontend...");

    window.location.href = FRONTEND_SIGNIN_URL;
  }, [backend.isReady, frontend.isReady]);

  const isSystemReady = backend.isReady && frontend.isReady;

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <section className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <div className="mx-auto mb-5 h-14 w-14 animate-spin rounded-full border-4 border-emerald-100 border-t-emerald-700" />

        <h1 className="text-2xl font-semibold tracking-tight text-emerald-900">
          Carregando o sistema
        </h1>

        <p className="mt-3 text-sm text-slate-600">
          {isSystemReady
            ? "Sistema pronto. Redirecionando..."
            : "Estamos preparando os serviços necessários para iniciar."}
        </p>

        <div className="mt-6 space-y-3 text-left">
          <div className="rounded-lg bg-slate-100 p-4 text-sm">
            <div className="flex items-center justify-between gap-4">
              <strong className="text-slate-800">Backend</strong>
              <span className="text-xs font-medium text-slate-500">
                {getStatusLabel(backend.status)}
              </span>
            </div>

            <p className="mt-2 text-slate-600">{backend.message}</p>
          </div>

          <div className="rounded-lg bg-slate-100 p-4 text-sm">
            <div className="flex items-center justify-between gap-4">
              <strong className="text-slate-800">Frontend</strong>
              <span className="text-xs font-medium text-slate-500">
                {getStatusLabel(frontend.status)}
              </span>
            </div>

            <p className="mt-2 text-slate-600">{frontend.message}</p>
          </div>
        </div>
      </section>
    </main>
  );
}