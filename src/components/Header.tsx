import Link from "next/link";

export default function Header() {
     return (
          <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
               <div className="flex items-center gap-4">
                    <Link href="/" className="font-bold text-xl text-gray-900">Ajin</Link>
                    <Link href="/blog" className="ml-4 text-blue-600 hover:underline">Blog</Link>
               </div>
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
