import profileImage from '../assets/profilev2-image.png';
import resumePdf from '../assets/Resume.pdf';

const aboutConfig = {
    header: {
      badge: {
        icon: "person",
        label: "Profile",
      },
      title: "About Me",
      description:
        "A frontend-focused developer with a strong interest in system design and backend collaboration.",
    },
  
    bio: {
        title: "Frontend Developer",
        titleHighlight: "",
        paragraphs: [
          "Hi, I'm P — a frontend developer who builds interfaces by thinking in systems, not just screens. I specialize in turning complex requirements and messy data into clear, structured, and maintainable user experiences that teams can confidently build on.",
          "Beyond frontend implementation, I work closely with backend logic, APIs, and data constraints to ensure features behave predictably in real-world usage. I’m actively growing toward end-to-end ownership, eager to take on deeper backend responsibilities and contribute to building robust, scalable systems."
        ],
      },
        
    resume: {
      label: "Download Resume",
      icon: "download",
      url: "#",
    },
  
    philosophy: {
      title: "My Philosophy",
      cards: [
        {
          icon: "layers",
          title: "System-Oriented Thinking",
          description:
            "I focus on understanding how frontend features connect with backend logic and data flow, designing structures that scale and remain maintainable as systems evolve.",
        },
        {
          icon: "clean_hands",
          title: "Clear Structure over Clever Code",
          description:
            "I prioritize explicit responsibilities and readable structure over clever implementations, making both frontend and backend collaboration safer and easier.",
        },
        {
          icon: "groups",
          title: "Solution-Focused Collaboration",
          description:
            "I collaborate closely with BA, UI/UX, backend engineers, and product teams to explore practical solutions that balance usability, technical feasibility, and system constraints.",
        },
      ],
    },
  };
  
  
function About() {
    return (
        <section
            id="about"
            className="w-full flex justify-center pt-20 md:pt-24 pb-12 md:pb-20 px-4 sm:px-6 lg:px-10 bg-background-light dark:bg-background-dark"
        >
            <div className="w-full max-w-4xl space-y-12 sm:space-y-16">
                {/* Section Header */}
                <div className="mb-10 sm:mb-14 max-w-3xl">
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium text-primary border border-primary/20 mb-3 sm:mb-4">
                        <span className="material-symbols-outlined !text-base sm:!text-lg">
                            {aboutConfig.header.badge.icon}
                        </span>
                        <span>{aboutConfig.header.badge.label}</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111418] dark:text-white tracking-tight">
                        {aboutConfig.header.title}
                    </h1>
                    <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                        {aboutConfig.header.description}
                    </p>
                </div>
                {/* Main Bio Section */}
                <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-4 sm:p-6 md:p-8 shadow-sm border border-[#e5e7eb] dark:border-[#2a3441]">
                    <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-start">
                        {/* Profile Image */}
                        <div className="shrink-0 relative group mx-auto md:mx-0">
                            <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-700 shadow-lg rotate-1 hover:rotate-0 transition-transform duration-300 bg-gradient-to-br from-primary/20 to-slate-300 dark:to-slate-600">
                                <img 
                                    src={profileImage} 
                                    alt="Profile" 
                                    className="w-full h-full object-cover object-[center_20%]"
                                />
                            </div>
                        </div>
                        {/* Bio Content */}
                        <div className="flex-1 space-y-4 sm:space-y-6">
                            <div>
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight mb-3 sm:mb-4">
                                    {aboutConfig.bio.title}{" "}
                                    <span className="text-primary">
                                        {aboutConfig.bio.titleHighlight}
                                    </span>
                                </h2>
                                <div className="space-y-3 sm:space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
                                    {aboutConfig.bio.paragraphs.map((paragraph, index) => (
                                        <p key={index}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                            {/* Actions */}
                            <a 
                                href={resumePdf}
                                download="Resume.pdf"
                                className="flex items-center justify-center gap-2 h-11 sm:h-12 px-5 sm:px-6 bg-primary hover:bg-blue-600 text-white text-sm sm:text-base font-bold rounded-lg transition-all shadow-md hover:shadow-lg active:scale-95 w-full sm:w-auto"
                            >
                                <span className="material-symbols-outlined text-lg sm:text-xl">
                                    {aboutConfig.resume.icon}
                                </span>
                                <span>{aboutConfig.resume.label}</span>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Philosophy Cards (Grid) */}
                <div className="mt-12 sm:mt-16">
                    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                        <span className="h-5 sm:h-6 w-1 bg-primary rounded-full"></span>
                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#111418] dark:text-white">
                            {aboutConfig.philosophy.title}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                        {aboutConfig.philosophy.cards.map((card, index) => (
                            <div
                                key={index}
                                className="group relative bg-surface-light dark:bg-surface-dark rounded-xl border border-[#e5e7eb] dark:border-[#2a3441] p-4 sm:p-6 shadow-sm hover:shadow-xl hover:shadow-primary/10 dark:hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                            >
                                {/* Gradient overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
                                
                                <div className="relative">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 text-primary mb-4 group-hover:from-primary group-hover:to-primary/80 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:scale-110">
                                        <span className="material-symbols-outlined !text-2xl">
                                            {card.icon}
                                        </span>
                                    </div>
                                    <h4 className="font-bold text-lg mb-2 text-[#111418] dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors duration-300">
                                        {card.title}
                                    </h4>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                        {card.description}
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

export default About;
