"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "o mnie",
        path: "/o-mnie",
    },
    {
        name: "lookbook",
        path: "/lookbook",
    },
    {
        name: "kontakt",
        path: "/kontakt",
    },
];

const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className="flex items-center gap-12">
            {links.map((link, index) => {
                const isActive = link.path === pathname;
                return (
                    <Link
                        href={link.path}
                        key={index}
                        className={`${isActive ? "text-accent border-b-2 border-accent" : ""} font-secondary font-medium hover:text-accent transition-all tracking-widest uppercase`}
                    >
                        {link.name}
                    </Link>
                );
            })}
            <a
                href="mailto:example@email.com"
                className="font-secondary font-medium hover:text-accent transition-all tracking-widest uppercase"
            >
                example@email.com
            </a>
        </nav>
    );
};

export default Nav;
