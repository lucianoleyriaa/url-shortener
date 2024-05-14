import { LinkButton } from "@/components";

export default function Home() {
  return (
    <main className="px-4 md:px-20 text-gray-800 dark:text-gray-200 min-h-screen flex h-full flex-row justify-center">
      <div className="w-2/2 md:w-2/2 lg:w-3/4 xl:w-1/2 flex flex-col gap-8 my-32 md:my-48">
        <h1 className="text-center text-2xl md:text-4xl">Acorta tus enlaces y crea códigos QR en segundos</h1>
        <p className="text-center text-sm md:text-base">
          Convierte enlaces largos en cortos y agrega un toque interactivo con códigos QR personalizados. ¡Simplifica la 
          experiencia de tus usuarios y mejora tu estrategia de marketing digital con nuestra potente herramienta de generación 
          de enlaces y códigos QR!
        </p>
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
          <LinkButton 
            buttonText="Get Started"
            link="/shorten-link"
            styles="bg-gray-800 text-gray-100 w-full text-center sm:w-auto dark:bg-gray-100 dark:text-gray-800 dark:ring-0"
            icon={ <i className="fa-solid fa-arrow-right"></i> }
          />
          <LinkButton 
            buttonText="Create link"
            link="/shorten-link"
            styles="dark:bg-gray-800 dark:text-gray-100 bg-white text-gray-800 w-full text-center sm:w-auto ring-1 ring-inset ring-gray-500 dark:ring-gray-500"
            icon={ <i className="fa-solid fa-link"></i> }
          />
          <LinkButton 
            buttonText="Generate QR"
            link="/qr-generator"
            styles="dark:bg-gray-800 dark:text-gray-100 bg-white text-gray-800 w-full text-center sm:w-auto ring-1 ring-inset ring-gray-500 dark:ring-gray-500"
            icon={ <i className="fa-solid fa-qrcode"></i> }
          />
        </div>
      </div>
    </main>

  );
}
