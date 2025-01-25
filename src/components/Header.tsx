import Link from 'next/link';

export default function Header() {
    return (
        <header className="py-4">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center">
                    <nav className="flex flex-wrap justify-center space-x-2 md:space-x-4">
                        <Link
                            href="/"
                            className="hover:text-gray-300 px-2 py-1 font-semibold">
                            <span>
                                Home
                            </span>
                        </Link>
                        <Link
                            href="https://github.com/aajinn"
                            className="hover:text-gray-300 px-2 py-1 font-semibold">
                            <span>
                                Github
                            </span>
                        </Link>
                        <Link
                            href="https://x.com/ChandyAjin"
                            className="hover:text-gray-300 px-2 py-1 font-semibold">
                            <span>
                                X
                            </span>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}

function NavLink({
    href,
    text,
}: {
    href: string;
    text: string;
}) {
    return (
        <Link
            href={href}
            className="hover:text-gray-300 px-2 py-1 font-semibold">
            {text}
        </Link>
    );
}
