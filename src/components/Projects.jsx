import rawContent from '../content/Projects.md?raw';
import { parseContent } from '../content/loader';

const { header: projectsHeader, projects, freelance: freelanceConfig } = parseContent(rawContent);

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
                        {projectsHeader.title}
                    </h1>
                    <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                        {projectsHeader.description}
                    </p>
                </div>

                {/* Projects */}
                {projects.map((project) => (
                    <div key={project.name} className="group relative bg-surface-light dark:bg-surface-dark rounded-xl border border-[#e5e7eb] dark:border-[#2a3441] p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                        {/* Project Header */}
                        <div className="flex items-start justify-between gap-4 mb-4 sm:mb-6">
                            <div>
                                <div className="flex items-center gap-2 sm:gap-3 mb-1">
                                    <span className="h-5 sm:h-6 w-1 bg-primary rounded-full"></span>
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#111418] dark:text-white">
                                        {project.name}
                                    </h3>
                                </div>
                                <p className="ml-4 text-sm text-slate-500 dark:text-slate-400">{project.company} · {project.role}</p>
                            </div>
                        </div>

                        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-4 sm:mb-6 max-w-2xl">
                            {project.description}
                        </p>

                        {/* Modules */}
                        <div className="flex flex-wrap gap-2 mb-5 sm:mb-6">
                            {project.modules.map((mod) => (
                                <span key={mod} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                                    {mod}
                                </span>
                            ))}
                        </div>

                        {/* Responsibilities */}
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                            {project.responsibilities.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400">
                                    <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">
                                        check_circle
                                    </span>
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

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
