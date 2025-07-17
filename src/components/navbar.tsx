export function Navbar() {
  return (
    <nav className="w-full bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">M. Safarudin P</h1>
        <ul className="flex gap-6 text-sm text-gray-600 font-medium">
          <li>
            <a href="#home" className="hover:text-black">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-black">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-black">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-black">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
