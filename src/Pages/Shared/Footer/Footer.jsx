import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="relative w-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white pt-12 pb-6 px-4 mt-16 shadow-2xl z-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-8 md:gap-0">
                {/* Branding & CTA */}
                <div className="flex flex-col items-center md:items-start gap-3 mb-6 md:mb-0">
                    <Link to="/" className="text-3xl font-extrabold tracking-tight font-matemasie drop-shadow-lg hover:scale-105 transition-transform">ArtyMia</Link>
                    <p className="text-sm text-white/80 max-w-xs text-center md:text-left">Making the web beautiful, one masterpiece at a time.</p>
                    <Link to="/register" className="mt-2 inline-block px-6 py-2 bg-white/90 dark:bg-indigo-700 text-indigo-700 dark:text-white font-bold rounded-full shadow-lg hover:scale-105 hover:bg-white transition-all duration-300 text-base">Join the Community</Link>
                </div>
                {/* Navigation */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center md:items-start">
                    <div>
                        <h3 className="font-bold mb-2 text-lg">Explore</h3>
                        <ul className="space-y-1 text-white/90">
                            <li><Link to="/albums" className="hover:underline">Albums</Link></li>
                            <li><Link to="/collections" className="hover:underline">Collections</Link></li>
                            <li><Link to="/styles" className="hover:underline">Styles</Link></li>
                            <li><Link to="/genres" className="hover:underline">Genres</Link></li>
                            <li><Link to="/popular" className="hover:underline">Popular</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2 text-lg">Resources</h3>
                        <ul className="space-y-1 text-white/90">
                            <li><Link to="/blogs" className="hover:underline">Blogs</Link></li>
                            <li><Link to="/prompting" className="hover:underline">Prompting</Link></li>
                            <li><Link to="/blog-post-0001" className="hover:underline">Gradient Blog 1</Link></li>
                            <li><Link to="/blog-post-0002" className="hover:underline">Gradient Blog 2</Link></li>
                            <li><Link to="/blog-post-0003" className="hover:underline">Gradient Blog 3</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2 text-lg">Account</h3>
                        <ul className="space-y-1 text-white/90">
                            <li><Link to="/register" className="hover:underline">Register</Link></li>
                            <li><Link to="/login" className="hover:underline">Login</Link></li>
                        </ul>
                    </div>
                </div>
                {/* Social & Contact */}
                <div className="flex flex-col items-center md:items-end gap-3">
                    <h3 className="font-bold mb-2 text-lg">Connect</h3>
                    <div className="flex gap-4 mb-2">
                        <a href="mailto:support@artymia.com" className="hover:text-yellow-300" title="Email"><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0V8a4 4 0 00-8 0v4m8 0v4a4 4 0 01-8 0v-4" /></svg></a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300" title="Facebook"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200" title="LinkedIn"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.268h-3v-4.604c0-1.099-.021-2.513-1.531-2.513-1.531 0-1.767 1.197-1.767 2.434v4.683h-3v-9h2.881v1.233h.041c.401-.761 1.381-1.563 2.845-1.563 3.042 0 3.604 2.003 3.604 4.605v4.725z"/></svg></a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300" title="GitHub"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.304-.535-1.527.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.649.242 2.872.119 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a>
                    </div>
                    <span className="text-xs text-white/60">support@artymia.com</span>
                </div>
            </div>
            <div className="mt-10 border-t border-white/20 pt-4 text-center text-white/70 text-xs">
                &copy; {new Date().getFullYear()} ArtyMia. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;