"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

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

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className="mt-32 mb-20 text-center text-2xl">
                    <Link href="/">
                        <h1 className="uppercase text-3xl tracking-widest font-secondary font-semibold">
                            Małgorzata Bereżecka
                        </h1>
                    </Link>
                </div>
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => {
                        const isActive = link.path === pathname;
                        return (
                            <Link
                                href={link.path}
                                key={index}
                                className={`text-xl tracking-widest font-secondary hover:text-accent transition-all uppercase ${isActive ? "text-accent border-b-2 border-accent" : ""}`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                    <a
                        href="mailto:example@email.com"
                        className="uppercase hover:text-accent transition-all text-xl mt-10"
                    >
                        example@email.com
                    </a>
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
