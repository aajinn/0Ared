import React, { useMemo } from 'react';
import CardList from '@/src/components/CardList';

const Home = () => {
    // Memoize skills with random colors to prevent unnecessary re-renders
    const skills = useMemo(() => {
        const skillNames = [
            "Next.js",
            "React",
            "TypeScript",
            "Node.js",
            "Express.js",
            "Svelte",
            "JavaScript",
            "HTML/CSS",
            "Tailwind CSS",
            "Git",
            "Chrome Extensions",
            "Web Development",
            "API Development",
            "Database Design"
        ];
        const colorOptions = [
            "bg-blue-500 text-white",
            "bg-cyan-500 text-white",
            "bg-blue-600 text-white",
            "bg-green-600 text-white",
            "bg-gray-700 text-white",
            "bg-orange-500 text-white",
            "bg-yellow-500 text-black",
            "bg-red-500 text-white",
            "bg-teal-500 text-white",
            "bg-orange-600 text-white",
            "bg-purple-500 text-white",
            "bg-indigo-500 text-white",
            "bg-pink-500 text-white",
            "bg-emerald-600 text-white",
            "bg-violet-500 text-white",
            "bg-rose-500 text-white",
            "bg-sky-500 text-white",
            "bg-lime-500 text-black"
        ];
        return skillNames.map(name => ({
            name,
            color: colorOptions[Math.floor(Math.random() * colorOptions.length)]
        }));
    }, []);

    const webApps = [
        "pm.ared.dev - Project Management",
        "learn.ared.dev - Learning code",
        "bitpdfmaker.pro - PDF maker",
        "1oox.blog - AI blog maker"
    ];

    const chromeExtensions = [
        "Real-Time Internet Speed Monitor - 5 stars",
        "Floating todo app - 5 stars"
    ];

    return (
        <main className="min-h-screen bg-yellow-100">
            <div className="container mx-auto px-3 sm:px-4 md:px-6 py-8 md:py-12">
                <div className="max-w-4xl mx-auto">
                    {/* Hero Section */}
                    <div className="mb-10 md:mb-16 text-center md:text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                            Ajin Varghese Chandy
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-700 flex flex-col items-center md:block">
                            <a href="mailto:careerajin@gmail.com" className="hover:underline inline-flex items-center">
                                careerajin@gmail.com
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                </svg>
                            </a>
                        </p>
                    </div>

                    <div className="mb-8 md:mb-12 text-center md:text-left">
                        <p className="text-base sm:text-xl text-gray-800 italic">
                            &quot;In this AI era, you don&apos;t have to remember syntax, just <strong className='text-red-600'>keywords</strong>.&quot;
                        </p>
                    </div>

                    {/* Skills Section */}
                    <div className="mb-6 md:mb-8">
                        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center md:justify-start">
                            {skills.map((skill, index) => (
                                <div
                                    key={skill.name}
                                    className={`${skill.color} px-2 py-1 sm:px-3 rounded-full font-medium text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-default`}
                                >
                                    {skill.name}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Projects Section */}
                    <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
                        <CardList
                            title="Web Apps"
                            items={webApps}
                        />
                        <CardList
                            title="Chrome Extensions"
                            items={chromeExtensions}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
