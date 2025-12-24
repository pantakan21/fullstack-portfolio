 const experienceConfig = {
    header: {
      title: "Experience",
      description:
        "Hands-on experience building and maintaining frontend applications, with a strong focus on structure, usability, and collaboration.",
    },
  
    experiences: [
      {
        icon: "work",
        role: "Software Engineer",
        period: "2024 - Present",
        company: "INET",
        summary:
          "Worked on internal systems focusing on frontend structure, data-driven UI, and cross-team collaboration.",
        tech: [
          "Angular",
          "TypeScript",
          "RxJS",
          "REST APIs",
          "Tailwind CSS",
          "GitLab",
        ],
        isPrimary: true,
      },
      {
        icon: "code",
        role: "Web Master Support Trainee",
        period: "2023",
        company: "Tero Entertainment",
        summary:
          "Focused on system analysis and UI planning through diagrams, wireframes, and prototypes.",
        tech: ["Wireframing", "UI Prototyping", "Flowchart & DFD"],
      },
    ],
  
    education: {
      title: "Education",
      items: [
        {
          icon: "school",
          title: "Bachelor of Industrial Technology",
          subtitle: "King Mongkut's University of Technology North Bangkok",
          period: "2022 - 2024",
        },
      ],
    },
  };
  
function Experience() {
    const { header, experiences, education } = experienceConfig;

    return (
        <section
            id="experience"
            className="w-full flex justify-center py-12 md:py-20 px-4 sm:px-6 lg:px-10 bg-background-light dark:bg-background-dark"
        >
            <div className="w-full max-w-5xl">
                {/* Header */}
                <div className="mb-10 sm:mb-14 max-w-3xl">
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium text-primary border border-primary/20 mb-3 sm:mb-4">
                        <span className="material-symbols-outlined !text-base sm:!text-lg">
                            work
                        </span>
                        <span>Career Journey</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111418] dark:text-white tracking-tight">
                        {header.title}
                    </h1>
                    <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                        {header.description}
                    </p>
                </div>

                {/* Experience Timeline */}
                <div className="space-y-4 sm:space-y-6">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="group relative bg-surface-light dark:bg-surface-dark rounded-xl border border-[#e5e7eb] dark:border-[#2a3441] p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-xl hover:shadow-primary/10 dark:hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                        >
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>

                            <div className="relative">
                                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary group-hover:from-primary group-hover:to-primary/80 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:scale-110 shrink-0">
                                        <span className="material-symbols-outlined !text-xl sm:!text-2xl">
                                            {exp.icon}
                                        </span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#111418] dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors duration-300">
                                                {exp.role}
                                            </h3>
                                            {exp.isPrimary && (
                                                <span className="inline-flex items-center rounded-full bg-primary/10 px-2 sm:px-2.5 py-0.5 text-xs font-semibold text-primary border border-primary/20 shrink-0">
                                                    Current
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400 mt-1 sm:mt-2 font-medium">
                                            {exp.company} • {exp.period}
                                        </p>
                                    </div>
                                </div>

                                {exp.summary && (
                                    <p className="mt-4 sm:mt-6 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {exp.summary}
                                    </p>
                                )}

                                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-[#e5e7eb] dark:border-[#2a3441]">
                                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                        {exp.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="inline-flex items-center rounded-md bg-gradient-to-r from-[#f0f2f4] to-[#f8f9fa] dark:from-[#2c3b4a] dark:to-[#1e2a35] px-2 sm:px-3 py-1 sm:py-1.5 text-xs font-semibold text-[#111418] dark:text-gray-200 border border-[#e0e4e8] dark:border-[#3a4a5a] hover:border-primary/50 hover:bg-primary/5 dark:hover:bg-primary/10 hover:text-primary dark:hover:text-primary transition-all duration-200"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Education */}
                <div className="mt-12 sm:mt-20">
                    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                        <span className="h-5 sm:h-6 w-1 bg-primary rounded-full"></span>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#111418] dark:text-white">
                            {education.title}
                        </h2>
                    </div>

                    <div className="group bg-surface-light dark:bg-surface-dark rounded-xl border border-[#e5e7eb] dark:border-[#2a3441] p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        {education.items.map((edu, i) => (
                            <div key={i} className="flex items-start gap-3 sm:gap-4">
                                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary group-hover:from-primary group-hover:to-primary/80 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md shrink-0">
                                    <span className="material-symbols-outlined !text-xl sm:!text-2xl">
                                        {edu.icon}
                                    </span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-bold text-base sm:text-lg md:text-xl text-[#111418] dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors duration-300">
                                        {edu.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-1 sm:mt-2">
                                        {edu.subtitle}
                                    </p>
                                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-500 mt-1 font-medium">
                                        {edu.period}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
