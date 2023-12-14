"use client"
import { Button } from "@nextui-org/react";

export default function CardPrice() {
  return (
    <>
      <div className="bg-gray-50 rounded-3xl p-12 shadow-lg hover:shadow-xl w-full border">
        <div className="flex flex-col items-center">
          <span>Comprar certificado digital</span>
          <span className="text-4xl font-extrabold m-0">
            e-CPF A3 Nuvem
          </span>
          <span className="text-green-200 font-extrabold">Vídeo Conferência</span>
        </div>
        <div className="flex items-center justify-center text-green-200 dark:text-white py-12">
          <span className="text-3xl font-semibold">R$</span>
          <span className="text-6xl font-extrabold tracking-tight">
            190,00
          </span>
          <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
            /ano
          </span>
        </div>
        <Button
          size="lg"
          className="bg-gradient-to-r from-green-200 to-green-300 text-white w-full"
        >
          Comprar agora
        </Button>
      </div>
    </>
  );
}
