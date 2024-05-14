import { Header } from "@/components";

export default function Home() {
  return (
    <>
      <Header />

      <main className="px-20 text-gray-800 dark:text-gray-200 min-h-screen flex h-full flex-row justify-center">
        <div className="w-1/2 flex flex-col gap-8 my-48">
          <h1 className="text-center text-4xl">Acorta tus enlaces y crea códigos QR en segundos</h1>
          <p className="text-center">
            Convierte enlaces largos en cortos y agrega un toque interactivo con códigos QR personalizados. ¡Simplifica la 
            experiencia de tus usuarios y mejora tu estrategia de marketing digital con nuestra potente herramienta de generación 
            de enlaces y códigos QR!
          </p>
          <div className="flex gap-6 items-center justify-center">
            <button className="px-3 py-2 rounded-lg ring-1 ring-inset dark:ring-gray-500">Getting started</button>
            <button className="px-3 py-2 rounded-lg ring-1 ring-inset dark:ring-gray-500">Make a test</button>
          </div>
        </div>
      </main>
    </>

  );
}
