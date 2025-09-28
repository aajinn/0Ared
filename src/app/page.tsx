"use client";

import React, { useMemo } from 'react';
import dynamic from 'next/dynamic';

const SectionCard = dynamic(() => import('@/src/components/SectionCard'), {
    loading: () => <div className="bg-white/90 border border-gray-200 rounded-2xl shadow-lg h-48 animate-pulse"></div>,
    ssr: false
});

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
            "Database Design",
            "Notion",
            "Slack",
            "MongoDB",
            "MySQL",

            "Docker",
            "Kubernetes",

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

    const componentSections = [
        {
            title: "layout & structure",
            icon: "🔧",
            items: [
                "responsive navbar with logo and nav links", "sticky header with shadow on scroll", "collapsible sidebar with icons and tooltips", "drawer menu for mobile", "footer with 3 column layout", "container with max-width and center alignment", "section with title and content", "grid with 4 columns and gap", "flex row with spacing between", "fullscreen hero section with bg image", "layout with header, sidebar, and main content"
            ],
        },
        {
            title: "ui components",
            icon: "🧩",
            items: [
                "card with image, title, text, and button", "button with hover effect and loading spinner", "modal with overlay and close button", "dropdown with animation", "tabs with active tab indicator", "accordion with icons and animation", "tooltip on hover with custom text", "badge with color and count", "stepper with progress indicator", "toast notification in bottom right", "alert box with success or error status", "progress bar with percentage", "slider with label and range", "carousel with autoplay and arrows"
            ],
        },
        {
            title: "forms",
            icon: "🖊️",
            items: [
                "login form with email and password fields", "signup form with confirm password", "form with input validation errors", "input field with label and placeholder", "textarea with auto resize", "checkbox with custom styling", "radio buttons with labels", "select dropdown with search", "multi-select with tags", "form with disabled state and loader", "form submission with API call", "reset button and clear fields", "floating label input fields"
            ],
        },
        {
            title: "data & api",
            icon: "🔁",
            items: [
                "api call using fetch in useEffect", "axios get request with loading state", "display fetched data in cards", "render list from api", "pagination buttons for api results", "infinite scroll with loading spinner", "filter api data by category", "search input to filter results", "handle 404 or api error state", "post form data to api endpoint", "update item with PUT request", "delete button with confirmation"
            ],
        },
        {
            title: "data & api (general use)",
            icon: "🔁",
            items: [
                "connect to api and fetch data",
                "display api data in card or table format",
                "show loading while fetching",
                "handle error if api fails",
                "search and filter through api results",
                "pagination with next/prev buttons",
                "infinite scroll with data loading",
                "send data to api with post request",
                "update existing data with put or patch",
                "delete data with confirmation",
                "revalidate or refresh data on action",
                "secure api requests with auth headers",
                "cache api data for performance",
                "use environment variables for api url",
                "organize all api calls in one file or hook",
            ],
        },
        {
            title: "mobile & views",
            icon: "📱",
            items: [
                "responsive layout using tailwind breakpoints", "hamburger menu for mobile", "mobile header with back button", "bottom tab bar with icons", "full-screen mobile drawer", "cards stacked vertically on mobile", "horizontal scrollable product list", "media queries with tailwind", "swipe gestures for mobile", "mobile-first navigation layout", "collapsible sections for smaller screens"
            ],
        },
        {
            title: "dashboard & stats",
            icon: "📊",
            items: [
                "dashboard layout with sidebar and content", "overview cards with icon, number, and label", "line chart using chart.js", "bar chart with dynamic data", "doughnut chart with legend", "data table with pagination", "sortable columns in table", "filter table rows by status", "stats card with trend icon", "activity feed component", "user performance chart", "real-time data with polling"
            ],
        },
        {
            title: "user & auth",
            icon: "👤",
            items: [
                "login page with redirect after auth", "register form with confirm password", "forgot password page with email input", "profile card with avatar, name, and bio", "settings page with input forms", "user list with role badges", "auth guard for private routes", "jwt token handling with localStorage", "logout button with redirect", "show user initials in avatar", "editable profile form"
            ],
        },
        {
            title: "themes & modes",
            icon: "🌗",
            items: [
                "dark mode toggle using tailwind", "auto-switch theme based on system", "light and dark theme button", "tailwind config with custom color palette", "themed background and text color", "useContext for theme switching", "icons change based on theme", "toggle between themes with animation", "save theme in localStorage", "apply theme globally with class"
            ],
        },
    ];

    return (
        <main className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-3 sm:px-4 md:px-6 py-8 md:py-12">
                <div className="max-w-7xl mx-auto">
                    {/* Hero Section */}
                    <div className="mb-10 md:mb-16 text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                            Ajin Varghese Chandy
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8">
                            <a href="mailto:careerajin@gmail.com" className="hover:underline inline-flex items-center">
                                careerajin@gmail.com
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                </svg>
                            </a>
                        </p>

                        {/* Experience Image */}
                        <div className="flex justify-center mb-8">
                            <img
                                src="/1.png"
                                alt="Experience and Skills Overview"
                                className="max-w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                            />
                        </div>
                    </div>



                    {/* Skills Section */}
                    <div className="mb-10 md:mb-16">
                        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                            {skills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className={`${skill.color} px-2 py-1 sm:px-3 rounded-full font-medium text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-default`}
                                >
                                    {skill.name}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Gallery Section */}
                    {/*
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
                        {componentSections.map((section) => (
                            <SectionCard
                                key={section.title}
                                title={section.title}
                                icon={section.icon}
                                items={section.items}
                            />
                        ))}
                    </div>
 */}
                </div>
            </div>
        </main>
    );
};

export default Home;
