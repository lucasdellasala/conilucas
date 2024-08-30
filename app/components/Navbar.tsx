"use client";
import Link from "next/link";
import { Logo } from "./Logo";

export function Navbar() {
  return (
    <nav className="fixed bottom-0 md:top-0 md:bottom-auto left-0 w-full bg-[rgba(0,0,0,0.3)] p-4 z-10 text-sm sm:text-base md:text-xl lg:text-3xl">
      <ul className="grid grid-cols-5 gap-2 place-items-center">
        <li className="flex justify-center align-middle items-center">
          <Link href="#info" className="hover:text-gray-400">
            Info
          </Link>
        </li>
        <li className="flex justify-center align-middle items-center">
          <Link href="#location" className="hover:text-gray-400">
            Ubicación
          </Link>
        </li>
        <li className="flex justify-center align-middle items-center">
          <Link href="#home" className="hover:text-gray-400">
            <Logo className="fill-white animate-shake animate-twice h-12" />
          </Link>
        </li>
        <li className="flex justify-center align-middle items-center">
          <Link href="#dresscode" className="hover:text-gray-400">
            Dresscode
          </Link>
        </li>
        <li className="flex justify-center align-middle items-center">
          <Link href="#response" className="hover:text-gray-400">
            Agendar
          </Link>
        </li>
      </ul>
    </nav>
  );
}
