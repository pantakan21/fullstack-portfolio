// Config Map - ส่วนที่ซ้ำกัน
const subProjects = [
    {
        name: "Manpower",
        description:
            "Manages staff assignments by showing who is responsible for each task and tracking workload distribution across the team.",
    },
    {
        name: "Adjust Level",
        description:
            "Provides a standardized template for evaluating and scoring projects based on predefined criteria.",
    },
    {
        name: "Sales Review Dashboard",
        description:
            "A dashboard designed to support sales operations by presenting key data and summaries for day-to-day decision support.",
    },
];
const roleConfig = {
    title: "Frontend Developer",
    responsibilities: [
        "Designed and structured frontend project architecture to support scalable and maintainable features.",
        "Designed feature-based modules with clear separation of responsibilities between components, services, and state management.",
        "Organized application state to reduce coupling and improve predictability across complex views and workflows.",
        "Worked with backend engineers to align API contracts, data structures, and edge cases before implementation.",
        "Refactored and standardized shared components to improve reuse, readability, and long-term maintainability.",
        "Collaborated with business analysts, UI/UX designers, and product managers to explore and propose practical solutions that best fit business requirements.",
    ],
};
const freelanceConfig = {
    title: "Freelance & Independent Work",
    description:
        "In addition to full-time work, I’ve taken on freelance and independent projects, focusing on frontend implementation and system clarity.",
    items: [
        "Built and customized frontend interfaces based on client requirements.",
        "Worked directly with clients to clarify scope, requirements, and technical constraints.",
        "Delivered maintainable solutions with clear structure.",
    ],
};

function Projects() {
    return (
        <section
            id="projects"
            className="w-full flex justify-center py-12 md:py-20 px-4 sm:px-6 lg:px-10 bg-background-light dark:bg-background-dark"
        >
            <div className="max-w-[1000px] w-full flex flex-col gap-8 sm:gap-12">
                {/* Header */}
                <div className="mb-10 sm:mb-14 max-w-3xl">
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium text-primary border border-primary/20 mb-3 sm:mb-4">
                        <span className="material-symbols-outlined !text-base sm:!text-lg">
                            code
                        </span>
                        <span>Projects</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111418] dark:text-white tracking-tight">
                        Internal Management System
                    </h1>
                    <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                        An internal system built to provide clear operational
                        visibility for the company.
                    </p>
                </div>

                {/* Sub Projects */}
                <div>
                    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                        <span className="h-5 sm:h-6 w-1 bg-primary rounded-full"></span>
                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#111418] dark:text-white">
                            Modules
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                        {subProjects.map((sub) => (
                            <div
                                key={sub.name}
                                className="group relative bg-surface-light dark:bg-surface-dark rounded-xl border border-[#e5e7eb] dark:border-[#2a3441] p-4 sm:p-6 shadow-sm hover:shadow-xl hover:shadow-primary/10 dark:hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                            >
                                {/* Gradient overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>

                                <div className="relative">
                                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                                        <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 text-primary group-hover:from-primary group-hover:to-primary/80 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:scale-110 shrink-0">
                                            <span className="material-symbols-outlined !text-lg sm:!text-xl">
                                                dashboard
                                            </span>
                                        </div>
                                        <h3 className="font-bold text-base sm:text-lg text-[#111418] dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors duration-300">
                                            {sub.name}
                                        </h3>
                                    </div>
                                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {sub.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Role */}
                <div className="group relative bg-surface-light dark:bg-surface-dark rounded-xl border border-[#e5e7eb] dark:border-[#2a3441] p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                        <span className="h-5 sm:h-6 w-1 bg-primary rounded-full"></span>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#111418] dark:text-white">
                            My Role & Responsibilities
                        </h3>
                    </div>

                    <p className="font-bold text-base sm:text-lg text-[#111418] dark:text-white mb-4 sm:mb-6">
                        {roleConfig.title}
                    </p>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                        {roleConfig.responsibilities.map((item, i) => (
                            <li
                                key={i}
                                className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400"
                            >
                                <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">
                                    check_circle
                                </span>
                                <span className="leading-relaxed">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Freelance */}
                <div className="group relative bg-surface-light dark:bg-surface-dark rounded-xl border border-[#e5e7eb] dark:border-[#2a3441] p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <span className="h-5 sm:h-6 w-1 bg-primary rounded-full"></span>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#111418] dark:text-white">
                            {freelanceConfig.title}
                        </h3>
                    </div>

                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-4 sm:mb-6 max-w-2xl">
                        {freelanceConfig.description}
                    </p>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                        {freelanceConfig.items.map((item, i) => (
                            <li
                                key={i}
                                className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400"
                            >
                                <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">
                                    check_circle
                                </span>
                                <span className="leading-relaxed">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Projects;
