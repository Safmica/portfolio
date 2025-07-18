export function Navbar() {
  return (
    <nav className="w-full bg-transparent fixed z-10">
      <div className="max-w-7xl mx-auto px-6 py-10 flex items-center justify-between text-white font-outfit">
        <h1 className="text-xl font-bold">M. Safarudin P</h1>
        <ul className="flex gap-6 text-md font-bold">
          <li>
            <a href="#home"   className="relative transition-colors duration-300 before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-0.5 before:bg-white before:transition-all before:duration-300 hover:before:w-full hover:before:left-0">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="relative transition-colors duration-300 before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-0.5 before:bg-white before:transition-all before:duration-300 hover:before:w-full hover:before:left-0">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="relative transition-colors duration-300 before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-0.5 before:bg-white before:transition-all before:duration-300 hover:before:w-full hover:before:left-0">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="relative transition-colors duration-300 before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-0.5 before:bg-white before:transition-all before:duration-300 hover:before:w-full hover:before:left-0">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
