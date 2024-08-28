export default function Header() {
  return (
    <header className="py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-3xl md:text-4xl font-bold mb-4 md:mb-0">
            Ajin Varghese Chandy
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end md:space-x-4">
            <NavLink href="/" text="Home" />
            <NavLink href="/about" text="github" />
            <NavLink href="/projects" text="Projects" />
            <NavLink href="/contact" text="X" />
          </nav>
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, text }: { href: string; text: string }) {
  return (
    <a href={href} className="hover:text-gray-300 px-2 py-1 md:px-0 md:py-0">
      {text}
    </a>
  );
}
