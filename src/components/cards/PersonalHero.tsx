import {useState, useEffect} from "react";

type Adjective = string;

const adjectives: Adjective[] = ["Clever", "Curious", "Ambitious", "Optimistic", "Determined"];

export default function PersonalHero () {
    const [activeIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex(prev => 
                    prev === adjectives.length-1 ? 0 : prev + 1
                );
                setIsAnimating(false);
            }, 150);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative flex flex-col h-full w-full p-8 md:p-12 lg:p-16 items-center justify-center rounded-2xl bg-gradient-to-br from-white via-gray-50 to-accent/5 dark:from-darkBg dark:via-darkBg dark:to-accent/10 border border-lightBorder dark:border-darkBorder overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
            
            {/* Decorative dots pattern */}
            <div className="absolute top-6 left-6 grid grid-cols-3 gap-2 opacity-20">
                {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-accent" />
                ))}
            </div>

            <div className="relative z-10 flex flex-col items-center space-y-6 md:space-y-8">
                <p className="font-sans-modern font-medium text-4xl md:text-5xl lg:text-6xl text-gray-500 dark:text-gray-400 tracking-tight">
                    Hello again,
                </p>

                <p className="font-sans-modern font-semibold text-4xl md:text-5xl lg:text-6xl text-gray-600 dark:text-gray-300 text-center leading-tight">
                    you can just call me{" "}
                    <span className="relative inline-block">
                        <span className="text-accent/70 font-bold font-serif-display text-5xl md:text-6xl lg:text-7xl">
                            Jessa
                        </span>
                        <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent/30 rounded-full" />
                    </span>
                </p>
                
                <div className="mt-4 md:mt-6 flex items-center gap-4 md:gap-5 bg-white/50 dark:bg-white/5 backdrop-blur-sm px-8 py-5 md:px-10 md:py-6 rounded-xl border border-gray-200/50 dark:border-white/10 shadow-sm">
                    <span className="font-sans-modern text-2xl md:text-4xl lg:text-5xl text-gray-500 dark:text-gray-400">
                        Jessa is
                    </span>
                    <div className="relative h-12 md:h-16 lg:h-20 overflow-hidden flex items-center min-w-[200px] md:min-w-[300px]">
                        <span 
                            key={activeIndex}
                            className={`font-serif-display italic text-3xl md:text-5xl lg:text-6xl text-accent transition-all duration-300 ${
                                isAnimating 
                                    ? 'opacity-0 translate-y-4' 
                                    : 'opacity-100 translate-y-0 animate-fade-in-up'
                            }`}
                        >
                            {adjectives[activeIndex]}
                        </span>
                    </div>
                </div>

                {/* Adjective indicator dots */}
                <div className="mt-4 md:mt-6 flex gap-3">
                    {adjectives.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                                i === activeIndex 
                                    ? 'bg-accent w-7' 
                                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-accent/50'
                            }`}
                            aria-label={`Show adjective ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}