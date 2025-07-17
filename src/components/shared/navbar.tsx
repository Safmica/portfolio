export function Navbar() {
  return (
    <nav className="w-full bg-transparent fixed z-10">
      <div className="max-w-7xl mx-auto px-6 py-10 flex items-center justify-between text-white font-outfit">
        <h1 className="text-xl font-bold">M. Safarudin P</h1>
        <ul className="flex gap-6 text-md font-bold">
          <li>
            <a href="#home" className="hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
