'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { IoClose, IoHomeOutline } from 'react-icons/io5';
import { FaBars, FaBook } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';

interface SidebarProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
    const router = useRouter();
    const pathname = usePathname();



    const navItems: Array<{
        icon: React.ReactNode;
        title: string;
        url?: string;
        action?: () => void;
    }> = [
            { icon: <IoHomeOutline />, title: 'หน้าแรก', url: '/dashboard' },
            { icon: <FaBook />, title: 'งานของฉัน', url: '/work' },
            { icon: <MdLogout />, title: 'ออกจากระบบ', url: '' },
        ];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsOpen(false);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [setIsOpen]);

    return (
        <div
            className={`bg-white text-black transition-all duration-300 ease-in-out text-sm border-2 rounded-md border-[rgba(0,0,0,0.08)] ${isOpen ? 'w-64' : 'w-16'
                }`}
        >
            <div className="p-3 flex justify-center items-center">
                <h1
                    className={`font-bold overflow-hidden transition-all duration-300 text-lg text-nowrap text-primary ${isOpen ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                     Classroom+
                </h1>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 rounded-lg"
                    aria-label="Toggle Sidebar"
                >
                    {isOpen ? (
                        <IoClose className="text-xl cursor-pointer" />
                    ) : (
                        <FaBars className="text-xl cursor-pointer" />
                    )}
                </button>
            </div>

            {/* Navigation */}
            <nav className="mt-0">
                {navItems.map((item) => (
                    <div key={item.title}>
                        {item.url ? (
                            <Link
                                href={item.url}
                                onClick={() => setIsOpen(false)}
                                className={`px-4 py-3 hover:bg-[#F3F5F7] cursor-pointer flex items-center ${pathname === item.url ? 'text-primary' : ''
                                    }`}
                            >
                                <span
                                    className={`ml-4 whitespace-nowrap overflow-hidden transition-all duration-300 flex items-center gap-2 ${isOpen ? 'w-32 opacity-100' : 'w-0 opacity-0'
                                        }`}
                                >
                                    {item.icon} {item.title}
                                </span>
                            </Link>
                        ) : (
                            <button
                                onClick={() => {
                                    item.action && item.action();
                                    setIsOpen(false);
                                }}
                                className="w-full text-left px-4 py-3 hover:bg-[#F3F5F7] cursor-pointer flex items-center"
                            >
                                <span
                                    className={`ml-4 whitespace-nowrap overflow-hidden transition-all duration-300 flex items-center gap-2 ${isOpen ? 'w-32 opacity-100' : 'w-0 opacity-0'
                                        }`}
                                >
                                    {item.icon} {item.title}
                                </span>
                            </button>
                        )}
                    </div>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;
