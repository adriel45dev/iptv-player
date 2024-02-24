"use client";
import { AppProps } from "next/app";
import { useEffect } from "react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Verifica se Service Workers são suportados
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            // Sucesso no registro do Service Worker
            console.log(
              "Service Worker registrado com sucesso:",
              registration.scope
            );
          })
          .catch((registrationError) => {
            // Falha no registro
            console.log(
              "Registro do Service Worker falhou:",
              registrationError
            );
          });
      });
    }
  }, []);

  return <Component {...pageProps} />;
};

export default MyApp;
