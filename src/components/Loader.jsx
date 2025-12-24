function Loader() {
    return (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-background-light dark:bg-background-dark">
            <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-primary animate-pulse"></span>
                <span className="h-2.5 w-2.5 rounded-full bg-primary animate-pulse [animation-delay:200ms]"></span>
                <span className="h-2.5 w-2.5 rounded-full bg-primary animate-pulse [animation-delay:400ms]"></span>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 tracking-wide">
                Loading system resources
            </p>
        </div>
    );
}

export default Loader;
