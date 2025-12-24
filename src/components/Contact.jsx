// Config Map - ส่วนที่ซ้ำกัน
const contactCards = [
    {
        icon: "mail",
        title: "Email",
        description: "pantakan219@gmail.com",
        actionText: "Send Message",
        href: "mailto:pantakan219@gmail.com",
    },
    {
        icon: "terminal",
        title: "GitHub",
        description: "Check my code",
        actionText: "View Repositories",
        href: "https://github.com/pantakan21",
    },
];

function Contact() {
    return (
        <section
            id="contact"
            className="flex-1 flex flex-col justify-center py-12 md:py-20 px-4 sm:px-6 lg:px-10 bg-background-light dark:bg-background-dark"
        >
            <div className="max-w-4xl mx-auto w-full flex flex-col items-center">
                {/* Section Header */}
                <div className="text-center max-w-3xl mb-14">
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary border border-primary/20 mb-4">
                        <span className="material-symbols-outlined !text-lg">
                            mail
                        </span>
                        <span>Get In Touch</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-[#111418] dark:text-white tracking-tight mb-4">
                        Let's Build Something Together
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                        I'm currently open to new opportunities. Whether you
                        have a question about my stack, a project idea, or just
                        want to say hi, I'll try my best to get back to you!
                    </p>
                </div>
                {/* Contact Grid */}
                <div className="w-full flex flex-wrap justify-center gap-6 mb-12">
                    {contactCards.map((card) => (
                        <a
                            key={card.title}
                            className="contact-card group relative flex flex-col items-center p-8 bg-surface-light dark:bg-surface-dark rounded-xl border border-[#e5e7eb] dark:border-[#2a3441] shadow-sm hover:shadow-xl hover:shadow-primary/10 dark:hover:shadow-primary/20 transition-all duration-300 cursor-pointer hover:border-primary hover:-translate-y-2 overflow-hidden w-full md:w-auto md:min-w-[280px]"
                            href={card.href}
                            target="_blank"
                        >
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
                            
                            <div className="relative flex flex-col items-center text-center">
                                <div className="icon-container mb-4 size-14 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-primary transition-all duration-300 group-hover:from-primary group-hover:to-primary/80 group-hover:text-white group-hover:scale-110 shadow-sm group-hover:shadow-md">
                                    <span className="material-symbols-outlined text-3xl">
                                        {card.icon}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-[#111418] dark:text-white mb-1 group-hover:text-primary dark:group-hover:text-primary transition-colors duration-300">
                                    {card.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                                    {card.description}
                                </p>
                                <span className="text-primary text-sm font-semibold group-hover:underline">
                                    {card.actionText}
                                </span>     
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );  
}

export default Contact;
