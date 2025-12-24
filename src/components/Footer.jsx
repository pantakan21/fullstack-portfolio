const footerConfig = {
    socials: [
        {
            label: "GitHub",
            icon: "code",
            href: "https://github.com/pantakan21",
        },

        {
            label: "Email",
            icon: "mail",
            href: "mailto:pantakan219@gmail.com",
        },
    ],
    copyright: {
        name: "Pantakan Rungwannarat",
        year: new Date().getFullYear(),
    },
    tagline:
        "Built with clarity, structure, and long-term maintainability in mind.",
};

function Footer() {
    const { socials, copyright, tagline } = footerConfig;

    return (
        <footer className="bg-white dark:bg-[#101922] border-t border-[#f0f2f4] dark:border-[#2a3441]">
            <div className="layout-container flex justify-center w-full px-4 lg:px-10 py-10">
                <div className="flex flex-col gap-6 text-center max-w-[960px] w-full items-center">
                    {/* Social Links */}
                    <div className="flex flex-wrap justify-center gap-6">
                        {socials.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                aria-label={item.label}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            >
                                <span className="material-symbols-outlined text-[#617589] group-hover:text-primary transition-colors text-[24px]">
                                    {item.icon}
                                </span>
                            </a>
                        ))}
                    </div>

                    {/* Footer Text */}
                    <div className="flex flex-col gap-1">
                        <p className="text-[#617589] text-base font-normal leading-normal">
                            © {copyright.year} {copyright.name}. All rights
                            reserved.
                        </p>
                        <p className="text-[#617589]/60 text-sm font-normal">
                            {tagline}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
