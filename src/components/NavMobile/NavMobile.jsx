import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import RiotGamesLogo from '../../assets/Svg/RiotGamesLogo';
import ValorantLogo from '../../assets/Svg/ValorantLogo';

const NavMobile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleMenu = () => setIsOpen(!isOpen);

    const toggleDropdown = (menu) => {
        setActiveDropdown(activeDropdown === menu ? null : menu);
    };

    const menuItems = [
        { name: 'GAME INFO', hasDropdown: true },
        { name: 'MEDIA', hasDropdown: false },
        { name: 'NEWS', hasDropdown: false },
        { name: 'SUPPORT', hasDropdown: true },
        { name: 'OUR SOCIALS', hasDropdown: true },
        { name: 'ESPORTS', isExternal: true },
        { name: 'MERCH', isExternal: true },
        { name: 'CHAMPIONS OF CHAMPIONS', hasDropdown: false },
    ];

    return (
        <nav className="bg-[#111] text-white p-4 flex justify-between items-center relative z-29 border-b border-white/10">
            {/* Header Bar */}
            <div className="flex items-center gap-4">
                <div className="w-20 cursor-pointer hover:opacity-80 transition-opacity">
                    <RiotGamesLogo />
                </div>
                <div className="cursor-pointer hover:opacity-80 transition-opacity">
                    <ArrowDownIcon className="w-3 h-3 text-gray-400" />
                </div>
                <div className="w-8 cursor-pointer hover:opacity-80 transition-opacity">
                    <ValorantLogo />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
                    <GlobeIcon className="w-6 h-6" />
                </button>
                <button
                    onClick={toggleMenu}
                    className="p-2 bg-[#222] rounded-xl hover:bg-[#333] transition-colors"
                >
                    <BurgerIcon className="w-6 h-6" />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed inset-0 bg-[#111] z-50 flex flex-col h-screen overflow-y-auto"
                    >
                        {/* Overlay Header */}
                        <div className="flex justify-between items-center px-4 py-4 border-b border-white/10">
                            <div className="w-8">
                                <ValorantLogo />
                            </div>
                            <button
                                onClick={toggleMenu}
                                className="p-2 bg-[#222] rounded-full hover:bg-[#333] transition-colors"
                            >
                                <CloseIcon className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Search Bar */}
                        <div className="p-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full bg-[#222] text-gray-300 rounded-lg py-3 pl-10 pr-10 focus:outline-none focus:ring-1 focus:ring-gray-500"
                                />
                                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <CloseIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 cursor-pointer" />
                            </div>
                        </div>

                        {/* Menu Links */}
                        <div className="flex-1 px-4 pb-8">
                            {menuItems.map((item, index) => (
                                <div key={index} className="border-b border-white/5 last:border-none">
                                    <div
                                        className="flex justify-between items-center py-4 cursor-pointer hover:text-[#ff4655] transition-colors group"
                                        onClick={() => item.hasDropdown && toggleDropdown(item.name)}
                                    >
                                        <span className="font-bold tracking-wider text-sm">{item.name}</span>
                                        {item.hasDropdown && (
                                            <ArrowDownIcon
                                                className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                                            />
                                        )}
                                        {item.isExternal && (
                                            <ExternalLinkIcon className="w-3 h-3 text-gray-500 group-hover:text-[#ff4655]" />
                                        )}
                                    </div>

                                    {/* Dropdown Content Placeholder */}
                                    <AnimatePresence>
                                        {item.hasDropdown && activeDropdown === item.name && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden bg-[#1a1a1a] rounded-lg mb-2"
                                            >
                                                <div className="p-4 text-gray-400 text-sm">
                                                    Sub-menu content for {item.name}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}

                            {/* CTA Button */}
                            <div className="mt-8">
                                <button className="w-full bg-[#ff4655] text-white font-bold py-4 rounded-lg hover:bg-[#ff2b3d] transition-colors tracking-widest text-sm">
                                    PLAY NOW
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

// SVG Icons
const BurgerIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

const CloseIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const GlobeIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
        <circle cx="12" cy="12" r="10" strokeWidth={2} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
);

const SearchIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

const ArrowDownIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

const ExternalLinkIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
    </svg>
);

export default NavMobile;
