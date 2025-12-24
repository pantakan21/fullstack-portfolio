function Hero() {
    return (
        <section className="w-full flex justify-center py-12 lg:py-20 px-4 sm:px-10 bg-background-light dark:bg-background-dark">
            <div className="w-full max-w-[1280px]">
                <div className="@container">
                    <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-20 items-center">
                        {/* Text Content */}
                        <div className="flex flex-col gap-6 lg:w-1/2 items-start">
                            <div className="flex flex-col gap-4 text-left">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary w-fit">
                                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                    <span className="text-xs font-bold uppercase tracking-wider">
                                        Available for work
                                    </span>
                                </div>
                                <h1 className="text-[#111418] dark:text-white text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
                                    Hello, I'm{" "}
                                    <br className="hidden sm:block" />
                                    <span className="text-primary">
                                        Pantakan Rungwannarat
                                    </span>
                                </h1>
                                <h2 className="text-[#111418] dark:text-gray-200 text-xl sm:text-2xl font-bold leading-snug">
                                    Full-Stack Developer
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg font-normal leading-relaxed max-w-[600px]">
                                    A frontend-focused full-stack developer who
                                    builds maintainable and scalable web
                                    applications. I specialize in crafting
                                    clean, user-centric interfaces while
                                    collaborating closely with backend and
                                    system design to ensure performance,
                                    clarity, and long-term maintainability.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-4 mt-2 w-full sm:w-auto">
                                <button className="flex-1 sm:flex-none min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary hover:bg-blue-600 text-white text-base font-bold transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50">
                                    View Projects
                                </button>
                                <button className="flex flex-1 sm:flex-none min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-white dark:bg-[#1a2634] border border-[#e5e7eb] dark:border-[#2a3441] hover:bg-gray-50 dark:hover:bg-[#202e3d] text-[#111418] dark:text-white text-base font-bold transition-all gap-2 group">
                                    <span>Download Resume</span>
                                    <span className="material-symbols-outlined text-[20px]  transition-transform">
                                        download
                                    </span>
                                </button>
                            </div>
                            <div className="flex items-center gap-6 mt-4 text-slate-500 dark:text-slate-400">
                                {/* GitHub */}
                                <a
                                    href="https://github.com/pantakan21"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-primary transition-colors flex items-center gap-2"
                                >
                                    <span className="material-symbols-outlined">
                                        code
                                    </span>
                                    <span className="text-sm font-medium">
                                        GitHub
                                    </span>
                                </a>

                                {/* Email */}
                                <a
                                    href="mailto:pantakan219@gmail.com"
                                    className="hover:text-primary transition-colors flex items-center gap-2"
                                >
                                    <span className="material-symbols-outlined">
                                        mail
                                    </span>
                                    <span className="text-sm font-medium">
                                        Email
                                    </span>
                                </a>
                            </div>
                        </div>
                        {/* Hero Image/Visual */}
                        <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
                            <div className="relative w-full max-w-[500px] aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/50 dark:shadow-black/40 group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                                <div className="w-full h-full bg-center bg-no-repeat bg-cover transform group-hover:scale-105 transition-transform duration-700 bg-gradient-to-br from-primary/20 to-slate-200 dark:to-slate-800"></div>
                                {/* Floating tech badge */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
