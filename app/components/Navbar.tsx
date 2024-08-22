export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 p-4 z-10 flex justify-center items-center">
      <div className="flex justify-center items-center">
        <img src="./rings.svg" className="mx-auto h-16 animate-spin-slow " />
      </div>
      <ul className="flex justify-center space-x-8 text-white">
        <li>
          <a href="#hero" className="hover:text-gray-400">
            Sección 1
          </a>
        </li>
        <li>
          <a href="#info" className="hover:text-gray-400">
            Sección 2
          </a>
        </li>
        <li>
          <a href="#location" className="hover:text-gray-400">
            Sección 3
          </a>
        </li>
        <li>
          <a href="#dresscode" className="hover:text-gray-400">
            Sección 4
          </a>
        </li>
        <li>
          <a href="#response" className="hover:text-gray-400">
            Sección 5
          </a>
        </li>
      </ul>
    </nav>
  );
}
