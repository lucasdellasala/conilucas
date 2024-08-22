import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full bg-[rgba(0,0,0,0.3)] p-4 z-10 flex justify-center items-center">
      <ul className="pl-6 flex justify-center space-x-8 text-white">
        <li>
          <Link href="" className="hover:text-gray-400">
            Home
          </Link>
        </li>
        <li>
          <Link href="#info" className="hover:text-gray-400">
            Info
          </Link>
        </li>
        <li>
          <Link href="#location" className="hover:text-gray-400">
            Ubicación
          </Link>
        </li>
        <li>
          <Link href="#dresscode" className="hover:text-gray-400">
            Dresscode
          </Link>
        </li>
        <li>
          <Link href="#response" className="hover:text-gray-400">
            Respuesta
          </Link>
        </li>
      </ul>
    </div>
  );
}
