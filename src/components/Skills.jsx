const skillsCards = [
    {
        icon: "web",
        title: "Frontend Technologies",
        description:
            "Core frontend languages, frameworks, and UI development skills.",
        skills: [
            "Angular",
            "TypeScript",
            "JavaScript",
            "Tailwind CSS",
            "HTML5 / CSS3",
        ],
    },
    {
        icon: "palette",
        title: "Frontend Design",
        description:
            "Building reusable, responsive, and maintainable UI components.",
        skills: [
            "Component-based Architecture",
            "Reusable Components",
            "Responsive UI Design",
            "Accessibility Awareness",
            "Global Configuration Management",
        ],
    },
    {
        icon: "dns",
        title: "Backend Integration",
        description:
            "Integrating frontend applications with backend services and APIs.",
        skills: [
            "REST API Consumption",
            "Request / Response Handling",
            "Authentication Token Handling (JWT)",
            "Error Handling & Status Codes",
        ],
    },
    {
        icon: "architecture",
        title: "Application Structure",
        description:
            "Organizing frontend codebases for scalability and maintainability.",
        skills: [
            "Feature-based Folder Structure",
            "Separation of Concerns",
            "Clean Code Practices",
        ],
    },
    {
        icon: "terminal",
        title: "Development Workflow",
        description:
            "Daily development workflow and debugging practices.",
        skills: [
            "Git",
            "Debugging with Browser DevTools",
            "API Debugging",
        ],
    },
    {
        icon: "groups",
        title: "Collaboration",
        description:
            "Collaborating with team members in a development environment.",
        skills: [
            "Requirement Discussion",
            "Participating in Code Reviews",
            "Technical Documentation",
        ],
    },
];

function Skills() {
    return (
        <section
            id="skills"
            className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)] px-4 sm:px-6 lg:px-10 py-12 md:py-20 bg-background-light dark:bg-background-dark"
        >
            <div className="flex flex-col max-w-[1100px] w-full gap-8 sm:gap-12">
                {/* Section Header */}
                <div className="mb-10 sm:mb-14 max-w-3xl">
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium text-primary border border-primary/20 mb-3 sm:mb-4">
                        <span className="material-symbols-outlined !text-base sm:!text-lg">
                            verified
                        </span>
                        <span>Expertise</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111418] dark:text-white tracking-tight">
                        Technical Skills & Focus Areas
                    </h1>
                    <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                        An overview of the technologies and practices I use to
                        build structured, maintainable, and scalable web
                        applications.
                    </p>
                </div>
                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {skillsCards.map((card, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col gap-4 sm:gap-5 rounded-xl border border-[#e5e7eb] dark:border-[#2a3441] bg-surface-light dark:bg-surface-dark p-4 sm:p-6 shadow-sm hover:shadow-xl hover:shadow-primary/10 dark:hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                        >
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            
                            <div className="relative flex items-center gap-3 sm:gap-4">
                                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 text-primary group-hover:from-primary group-hover:to-primary/80 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:scale-110 shrink-0">
                                    <span className="material-symbols-outlined !text-xl sm:!text-2xl">
                                        {card.icon}
                                    </span>
                                </div>
                                <h2 className="text-[#111418] dark:text-white text-lg sm:text-xl font-bold leading-tight group-hover:text-primary dark:group-hover:text-primary transition-colors duration-300">
                                    {card.title}
                                </h2>
                            </div>
                            <div className="relative flex flex-col gap-3">
                                <p className="text-[#617589] dark:text-gray-400 text-sm font-normal leading-relaxed">
                                    {card.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {card.skills.map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            className="inline-flex items-center rounded-md bg-gradient-to-r from-[#f0f2f4] to-[#f8f9fa] dark:from-[#2c3b4a] dark:to-[#1e2a35] px-3 py-1.5 text-xs font-semibold text-[#111418] dark:text-gray-200 border border-[#e0e4e8] dark:border-[#3a4a5a] hover:border-primary/50 hover:bg-primary/5 dark:hover:bg-primary/10 hover:text-primary dark:hover:text-primary transition-all duration-200 cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
