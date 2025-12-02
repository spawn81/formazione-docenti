import React from "react";
import Presentation from "./Presentation";

export default function PresentationLayout() {
  return (
    <div className="flex flex-col min-h-screen p-4 bg-gray-50 bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full px-6 py-4 bg-white shadow-md">
        <div className="max-w-[1920px] mx-auto flex items-center justify-between">
          {/* Logo Sinistro - Scuola Italiana */}
          <div className="w-48 shrink-0 md:w-56 lg:w-64">
            <img
              src="/logo-scuola-italiana.png"
              alt="Scuola Italiana"
              className="object-contain w-auto h-12 md:h-14 lg:h-16"
            />
          </div>

          {/* Titolo Centrale */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2c5f7c] grow text-center px-4">
            Tecnologie e Didattica
          </h1>

          {/* Logo Destro - STEAM */}
          <div className="flex justify-end w-48 shrink-0 md:w-56 lg:w-64">
            <img
              src="/logo-steam.png"
              alt="STEAM"
              className="object-contain w-auto h-12 md:h-14 lg:h-16"
            />
          </div>
        </div>
      </header>

      {/* Main Content - Presentation */}
      <main className="pt-20 pb-16 grow md:pt-24 lg:pt-28 md:pb-20">
        <Presentation />
      </main>

      {/* Footer Bar */}
      <footer className="w-full bg-[#2c5f7c] text-white py-3 md:py-4 fixed bottom-0 left-0 right-0 z-50">
        <div className="max-w-[1920px] mx-auto px-6">
          <p className="text-sm text-center md:text-base lg:text-lg">
            <span className="font-semibold">Autori:</span> Gennaro Iaccarino e Leonardo Martino
          </p>
        </div>
      </footer>

    </div>
  );
}