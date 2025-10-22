
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { InstagramIcon, LinkedInIcon, YoutubeIcon, AdyaLogoIcon } from './Icons';

const Footer: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        alert('Thank you for your message!');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <footer id="contact" className="bg-gray-800 text-white pt-20">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <AnimatedSection>
                        <div className="flex items-center space-x-2 text-primary font-bold text-3xl mb-4">
                            <AdyaLogoIcon className="w-10 h-10" />
                            <span>Adya Digital</span>
                        </div>
                        <p className="text-gray-400 mb-6 max-w-md">
                            Your partner in digital excellence. Let's create something amazing together.
                        </p>
                        <p className="text-gray-300 mb-2">Email: <a href="mailto:info@adyadigital.com" className="text-primary hover:underline">info@adyadigital.com</a></p>
                        <div className="flex space-x-4 mt-6">
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300"><InstagramIcon className="w-6 h-6" /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300"><LinkedInIcon className="w-6 h-6" /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300"><YoutubeIcon className="w-6 h-6" /></a>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection>
                        <div className="bg-gray-700 p-8 rounded-20px">
                            <h3 className="text-2xl font-bold mb-6 text-white">Get in Touch</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full bg-gray-800 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-primary" required />
                                </div>
                                <div className="mb-4">
                                    <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full bg-gray-800 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-primary" required />
                                </div>
                                <div className="mb-6">
                                    <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} rows={4} className="w-full bg-gray-800 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-primary" required></textarea>
                                </div>
                                <button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-6 rounded-20px shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </AnimatedSection>
                </div>
                <div className="text-center text-gray-500 text-sm py-8 mt-16 border-t border-gray-700">
                    <p>&copy; {new Date().getFullYear()} Adya Digital. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
