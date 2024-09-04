"use client";

import { useState, useEffect } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const headerClasses = `py-6 lg:py-8 bg-[#faf9f6] text-accent ${isScrolled ? 'shadow-md' : ''}`;

    return (
        <header className={`${headerClasses} z-50 fixed w-full top-0 left-0 transition-shadow duration-300`}>
            <div className="container flex justify-between items-center">
                <Link href="/">
                    <h1 className="uppercase text-lg tracking-widest font-secondary">
                        Małgorzata Bereżecka
                    </h1>
                </Link>

                <div className="hidden lg:flex items-center gap-8">
                    <Nav />
                </div>

                <div className="lg:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
};

export default Header;
