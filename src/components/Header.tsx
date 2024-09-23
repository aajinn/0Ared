export default function Header() {
  return (
    <header className="py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Ajin Varghese Chandy
          </div>
          <nav className="flex flex-wrap justify-center space-x-2 md:space-x-4">
            <NavLink href="/" text="Home" />
            <NavLink href="/projects" text="Projects" />
            <NavLink href="https://github.com/ARed99" text="Github" />
            <NavLink href="https://x.com/ChandyAjin" text="X" />
          </nav>
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, text }: { href: string; text: string }) {
  return (
    <a href={href} className="hover:text-gray-300 px-2 py-1">
      {text}
    </a>
  );
}
