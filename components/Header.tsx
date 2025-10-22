
import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon, AdyaLogoIcon } from './Icons';

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick: () => void }> = ({ href, children, onClick }) => (
    <a
        href={href}
        onClick={onClick}
        className="text-gray-700 hover:text-secondary transition-colors duration-300 font-medium px-3 py-2"
    >
        {children}
    </a>
);

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#services', label: 'Services' },
        { href: '#portfolio', label: 'Portfolio' },
        { href: '#testimonials', label: 'Testimonials' },
        { href: '#contact', label: 'Contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <a href="#home" className="flex items-center space-x-2 text-secondary font-bold text-2xl">
                       <AdyaLogoIcon className="w-8 h-8" />
                        <span>Adya Digital</span>
                    </a>
                    <nav className="hidden md:flex items-center space-x-2">
                        {navLinks.map((link) => (
                            <NavLink key={link.href} href={link.href} onClick={() => setIsOpen(false)}>{link.label}</NavLink>
                        ))}
                    </nav>
                    <a href="#contact" className="hidden md:inline-block bg-gradient-to-r from-primary to-secondary text-white font-bold py-2 px-6 rounded-20px shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-0.5">
                        Book Free Consultation
                    </a>
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
                            {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
                    <nav className="flex flex-col items-center py-4">
                        {navLinks.map((link) => (
                             <NavLink key={link.href} href={link.href} onClick={() => setIsOpen(false)}>{link.label}</NavLink>
                        ))}
                         <a href="#contact" onClick={() => setIsOpen(false)} className="mt-4 bg-gradient-to-r from-primary to-secondary text-white font-bold py-2 px-6 rounded-20px shadow-lg hover:shadow-xl transition-shadow duration-300">
                           Book Free Consultation
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
