import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            {/* Animated background shapes */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-400 bg-opacity-30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-400 bg-opacity-30 rounded-full blur-3xl animate-pulse" />
            {/* Responsive content container */}
            <div className="relative z-10 flex flex-col items-center w-full max-w-2xl px-4 py-8 md:py-12 gap-4 md:gap-6 bg-white/10 dark:bg-gray-900/30 rounded-xl shadow-xl backdrop-blur-md mt-8 mb-20 md:mb-0">
                {/* Mascot Illustration */}
                <img 
                    src="https://cdn.pixabay.com/photo/2017/01/31/13/14/animal-2023924_1280.png" 
                    alt="Lost mascot" 
                    className="w-28 md:w-40 rounded-full shadow-xl border-4 border-white/40 dark:border-indigo-400 mb-2 animate-float"
                />
                {/* 404 Glowing Text */}
                <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.7)] dark:text-indigo-300 animate-bounce font-mono tracking-tight mb-1 text-center">404</h1>
                <p className="text-xl md:text-2xl font-bold text-white dark:text-indigo-100 mb-1 animate-fade-in font-playfair text-center">Oops! This page wandered off.</p>
                <p className="text-base md:text-lg text-white/90 dark:text-indigo-200 mb-2 animate-fade-in delay-100 max-w-lg text-center font-inter">
                    Our friendly mascot couldn&apos;t find the page you were looking for. Maybe it got lost in the art gallery? Let&apos;s help you get back on track!
                </p>
                {/* Call to Action */}
                <Link to="/" className="inline-block px-6 py-3 bg-white/90 dark:bg-indigo-700 text-indigo-700 dark:text-white hover:text-black font-bold rounded-full shadow-lg hover:scale-105 hover:bg-white transition-all duration-300 text-lg animate-fade-in delay-200 w-full md:w-auto text-center">
                    🏠 Back to Home
                </Link>
                {/* Helpful Links */}
                <div className="flex flex-col md:flex-row gap-3 w-full justify-center animate-fade-in delay-300">
                    <Link to="/albums" className="px-4 py-2 bg-white/70 dark:bg-indigo-800 text-indigo-700 dark:text-white rounded-lg shadow hover:bg-white/90 dark:hover:bg-indigo-600 transition-all font-semibold text-center">Explore Albums</Link>
                    <Link to="/blogs" className="px-4 py-2 bg-white/70 dark:bg-indigo-800 text-indigo-700 dark:text-white rounded-lg shadow hover:bg-white/90 dark:hover:bg-indigo-600 transition-all font-semibold text-center">Read Blogs</Link>
                    <Link to="/collections" className="px-4 py-2 bg-white/70 dark:bg-indigo-800 text-indigo-700 dark:text-white rounded-lg shadow hover:bg-white/90 dark:hover:bg-indigo-600 transition-all font-semibold text-center">View Collections</Link>
                </div>
            </div>
            {/* Footer message */}
            <div className="absolute bottom-4 left-0 right-0 text-center w-full text-white/70 dark:text-indigo-200 animate-fade-in delay-400 px-2">
                <p className="text-sm">Still lost? <a href="mailto:support@artymia.com" className="underline hover:text-white">Contact support</a> or try searching for what you need.</p>
                <p className="text-xs mt-1 italic">ArtyMia &mdash; Making the web beautiful, one page at a time.</p>
            </div>
            {/* Animations */}
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                }
                .animate-float { animation: float 3s ease-in-out infinite; }
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in { animation: fade-in 1s both; }
                .animate-fade-in.delay-100 { animation-delay: 0.1s; }
                .animate-fade-in.delay-200 { animation-delay: 0.2s; }
                .animate-fade-in.delay-300 { animation-delay: 0.3s; }
                .animate-fade-in.delay-400 { animation-delay: 0.4s; }
            `}</style>
        </div>
    );
};

export default ErrorPage;