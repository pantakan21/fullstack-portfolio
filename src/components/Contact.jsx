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
        icon: "phone",
        title: "Phone",
        description: "0921219001",
        actionText: "Call Me",
        href: "tel:0921219001",
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
                <div className="text-center max-w-3xl mb-10 sm:mb-14">
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium text-primary border border-primary/20 mb-3 sm:mb-4">
                        <span className="material-symbols-outlined !text-base sm:!text-lg">
                            mail
                        </span>
                        <span>Get In Touch</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111418] dark:text-white tracking-tight mb-3 sm:mb-4">
                        Let's Build Something Together
                    </h1>
                    <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed px-2">
                        I'm currently open to new opportunities. Whether you
                        have a question about my stack, a project idea, or just
                        want to say hi, I'll try my best to get back to you!
                    </p>
                </div>
                {/* Contact Grid */}
                <div className="w-full flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
                    {contactCards.map((card) => (
                        <a
                            key={card.title}
                            className="contact-card group relative flex flex-col items-center p-6 sm:p-8 bg-surface-light dark:bg-surface-dark rounded-xl border border-[#e5e7eb] dark:border-[#2a3441] shadow-sm hover:shadow-xl hover:shadow-primary/10 dark:hover:shadow-primary/20 transition-all duration-300 cursor-pointer hover:border-primary hover:-translate-y-2 overflow-hidden w-full sm:w-auto sm:min-w-[280px]"
                            href={card.href}
                            target="_blank"
                        >
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
                            
                            <div className="relative flex flex-col items-center text-center">
                                <div className="icon-container mb-3 sm:mb-4 size-12 sm:size-14 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-primary transition-all duration-300 group-hover:from-primary group-hover:to-primary/80 group-hover:text-white group-hover:scale-110 shadow-sm group-hover:shadow-md">
                                    <span className="material-symbols-outlined text-2xl sm:text-3xl">
                                        {card.icon}
                                    </span>
                                </div>
                                <h3 className="text-base sm:text-lg font-bold text-[#111418] dark:text-white mb-1 group-hover:text-primary dark:group-hover:text-primary transition-colors duration-300">
                                    {card.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mb-3 sm:mb-4">
                                    {card.description}
                                </p>
                                <span className="text-primary text-xs sm:text-sm font-semibold group-hover:underline">
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
