import Link from "next/link";

export default function Header() {
     return (
          <header className="bg-white shadow-md py-3 px-3 sm:py-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
               <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-0">
                    <Link href="/" className="font-bold text-lg sm:text-xl text-gray-900">Ajin</Link>
                    <Link href="/blog" className="ml-2 sm:ml-4 text-blue-600 hover:underline">Blog</Link>
                    <Link href="/projects" className="ml-2 sm:ml-4 text-blue-600 hover:underline">Projects</Link>
               </div>
               <nav className="flex flex-wrap gap-3 sm:gap-6 md:gap-8">
                    <Link
                         href="https://github.com/aajinn"
                         className="hover:text-gray-700 px-3 py-2 font-semibold text-gray-800 transition-colors duration-300 hover:bg-white/50 rounded-lg text-sm sm:text-base"
                    >
                         <span>GitHub</span>
                    </Link>
                    <Link
                         href="https://x.com/areddev"
                         className="hover:text-gray-700 px-3 py-2 font-semibold text-gray-800 transition-colors duration-300 hover:bg-white/50 rounded-lg text-sm sm:text-base"
                    >
                         <span>X (Twitter)</span>
                    </Link>
               </nav>
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
