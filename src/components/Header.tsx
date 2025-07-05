import Link from "next/link";

export default function Header() {
     return (
          <header className="py-6 bg-white/30 backdrop-blur-sm border-b border-gray-200/50">
               <div className="container mx-auto px-6">
                    <div className="flex flex-col items-start">
                         <nav className="flex flex-wrap space-x-6 md:space-x-8">
                              <Link
                                   href="https://github.com/aajinn"
                                   className="hover:text-gray-700 px-4 py-2 font-semibold text-gray-800 transition-colors duration-300 hover:bg-white/50 rounded-lg"
                              >
                                   <span>GitHub</span>
                              </Link>
                              <Link
                                   href="https://x.com/areddev"
                                   className="hover:text-gray-700 px-4 py-2 font-semibold text-gray-800 transition-colors duration-300 hover:bg-white/50 rounded-lg"
                              >
                                   <span>X (Twitter)</span>
                              </Link>
                         </nav>
                    </div>
               </div>
          </header>
     );
}

function NavLink({ href, text }: { href: string; text: string }) {
     return (
          <Link
               href={href}
               className="hover:text-gray-300 px-2 py-1 font-semibold"
          >
               {text}
          </Link>
     );
}
