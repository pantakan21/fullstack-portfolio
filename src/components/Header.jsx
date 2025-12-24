// Navigation Configuration
const navigationConfig = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
];

function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#101922]/80 backdrop-blur-md border-b border-solid border-[#f0f2f4] dark:border-[#2a3441] px-4 lg:px-10 py-3 shadow-sm">
            <div className="layout-container flex justify-center w-full">
                <div className="flex items-center justify-between w-full max-w-[1280px]">
                    <div className="flex items-center gap-4 text-[#111418] dark:text-white">
                        <div className="flex items-center justify-center size-8 rounded bg-primary/10 text-primary">
                            <span className="material-symbols-outlined text-[24px]">
                                terminal
                            </span>
                        </div>
                        <h2 className="text-lg font-bold leading-tight tracking-tight">
                            Pantakan Rungwannarat
                        </h2>
                    </div>
                    <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
                        <nav className="flex items-center gap-9">
                            {navigationConfig.map((item) => (
                                <a
                                    key={item.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const sectionId = item.href.replace('#', '');
                                        const section = document.getElementById(sectionId);
                                        if (section) {
                                            section.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                    className="text-sm font-medium leading-normal hover:text-primary transition-colors cursor-pointer"
                                    href={item.href}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                        <button 
                            onClick={() => {
                                const contactSection = document.getElementById('contact');
                                if (contactSection) {
                                    contactSection.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary hover:bg-primary/90 transition-colors text-white text-sm font-bold leading-normal tracking-wide shadow-sm shadow-primary/20"
                        >
                            <span className="truncate">Let's Talk</span>
                        </button>
                    </div>
                    {/* Mobile Menu Icon */}
                    <div className="md:hidden flex items-center">
                        <button className="text-[#111418] dark:text-white">
                            <span className="material-symbols-outlined">
                                menu
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
