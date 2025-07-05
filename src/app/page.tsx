import React from 'react';
import CardList from '@/src/components/CardList';

const Home = () => {
    const skills = [
        { name: "Next.js", color: "bg-blue-500 text-white" },
        { name: "React", color: "bg-cyan-500 text-white" },
        { name: "TypeScript", color: "bg-blue-600 text-white" },
        { name: "Node.js", color: "bg-green-600 text-white" },
        { name: "Express.js", color: "bg-gray-700 text-white" },
        { name: "Svelte", color: "bg-orange-500 text-white" },
        { name: "JavaScript", color: "bg-yellow-500 text-black" },
        { name: "HTML/CSS", color: "bg-red-500 text-white" },
        { name: "Tailwind CSS", color: "bg-teal-500 text-white" },
        { name: "Git", color: "bg-orange-600 text-white" },
        { name: "Chrome Extensions", color: "bg-purple-500 text-white" },
        { name: "Web Development", color: "bg-indigo-500 text-white" },
        { name: "API Development", color: "bg-pink-500 text-white" },
        { name: "Database Design", color: "bg-emerald-600 text-white" }
    ];

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
            <div className="container mx-auto px-6 py-12">
                <div className="max-w-4xl">
                    {/* Hero Section */}
                    <div className="mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Ajin Varghese Chandy
                        </h1>
                    </div>

                    {/* Skills Section */}
                    <div className="mb-8">
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className={`${skill.color} px-3 py-1 rounded-full font-medium text-xs md:text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-default`}
                                >
                                    {skill.name}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Projects Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
