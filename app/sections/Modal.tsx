'use client'

import { useState, useEffect } from 'react'

export function Modal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const checkDate = () => {
      const now = new Date()
      const gmtMinus3 = new Date(now.toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' }))

      // Verifica si es el 28 de diciembre de 2024
      if (
        gmtMinus3.getFullYear() === 2024 &&
        gmtMinus3.getMonth() === 11 && // Mes de diciembre (0-indexado)
        gmtMinus3.getDate() === 28
      ) {
        setIsOpen(true)
      }
    }

    checkDate()
  }, [])

  return (
    <>
      {isOpen && (
        <div className="z-10 text-center text-black fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white bg-opacity-90 rounded-lg p-8 max-w-md w-full">
            <div className="flex justify-end items-start mb-4">
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <span className="sr-only">Cerrar</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <h2 className="text-2xl font-bold">¡HOY ES EL DÍA!</h2>
            <p className="mt-2">Te esperamos 18:30hs 💍</p>
            <p className="mb-4">(Ser puntuales por favor)</p>
            <a
              href="https://maps.app.goo.gl/gJCJngfTjWRXjnVHA"
              className="inline-block bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-900 transition duration-200"
            >
              Ubicación
            </a>
          </div>
        </div>
      )}
    </>
  )
}
