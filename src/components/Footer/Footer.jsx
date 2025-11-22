import React from 'react';
import Container from '../Containter';
import { colors } from '../../constants/colors';
import { motion } from 'motion/react';
import RiotGamesLogo from '../../assets/Svg/RiotGamesLogo';

const Footer = () => {
    const socialLinks = [
        { name: 'X', icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
        ) }, // Using Twitter icon as placeholder for X if specific X icon not available, or I can draw X
        { name: 'YouTube', icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
        ) },
        { name: 'Instagram', icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
        ) },
        { name: 'Facebook', icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
        ) },
        { name: 'Discord', icon: (
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gamepad-2"><line x1="6" x2="10" y1="12" y2="12"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="15" x2="15.01" y1="13" y2="13"/><line x1="18" x2="18.01" y1="11" y2="11"/><rect width="20" height="12" x="2" y="6" rx="2"/></svg>
        ) }, // Placeholder for Discord
    ];

    // Better X Icon
    const XIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    );

    // Better Discord Icon
    const DiscordIcon = () => (
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.086 2.157 2.419 0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.086 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z"/>
        </svg>
    );

    return (
        
            <Container className='flex items-center flex-col text-primary-background overflow-x-hidden bg-nav-background!'>
                {/* Top Bar */}

                <div className="w-full flex items-center justify-center bg-[#292929] h-17">
                    <a href="#" className="text-sm font-bold tracking-widest hover:text-gray-300 transition-colors uppercase FF-Mark">
                        Download Riot Mobile Companion App
                    </a>
                </div>

                {/* Social Icons */}
                <div className="w-full flex flex-col items-center justify-center gap-6 p-6 mb-10">
                <div className="flex gap-4">
                    {socialLinks.map((link, index) => (
                        <motion.a
                            key={index}
                            href="#"
                            whileHover={{ scale: 1.1, backgroundColor: "#333" }}
                            className="w-10 h-10 bg-[#292929] rounded-xl flex items-center justify-center text-white transition-colors cursor-pointer"
                        >
                            {link.name === 'X' ? <XIcon /> : link.name === 'Discord' ? <DiscordIcon /> : link.icon}
                        </motion.a>
                    ))}
                </div>

                {/* Riot Games Logo */}
                <div className="mt-4">
                     <RiotGamesLogo />
                </div>

                {/* Copyright */}
                <div className="text-center max-w-2xl px-4">
                    <p className="text-[#7e7e7e] text-sm leading-relaxed font-medium FF-Mark">
                        © 2020-2025 Riot Games, Inc. RIOT GAMES, VALORANT and any associated logos are trademarks, service marks, and/or registered trademarks of Riot Games, Inc.
                    </p>
                </div>

                {/* Legal Links */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 mt-2 items-center FF-Mark">
                    {['Privacy Notice', 'Terms of Service', 'Company Information', 'Cookie Preferences'].map((item, index) => (
                        <a 
                            key={index} 
                            href="#" 
                            className="text-white text-[11px] font-bold uppercase tracking-wider hover:bg-neutral-600/50 px-3 py-2 rounded-md transition-all duration-300 "
                        >
                            {item}
                        </a>
                    ))}
                </div>
                </div>
            </Container>
    );
};

export default Footer;
