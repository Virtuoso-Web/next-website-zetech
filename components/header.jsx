"use client";

import "@/components/header.scss";

import Link from "next/link";

import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
    const pathname = usePathname();
    const [active, setActive] = useState(false);

    const toggleActive = () => setActive((active) => !active);
    const removeActive = () => setActive(false);

    return (
        <header className="header">
            <div className="header-container">
                <nav className="navigation">
                    <Link href={"/"} className="logo-link" onClick={removeActive}>
                        <img src="/images/logo.svg" alt="Logo" loading="lazy" className="logo" />
                    </Link>
                    <div className={active ? "nav-list active" : "nav-list"}>
                        <Link href={"/"} className={pathname === "/" ? "nav-link first active" : "nav-link first"} onClick={removeActive}>
                            Home
                        </Link>
                        <Link href={"/dienstleistungen"} className={pathname.includes("/dienstleistungen") ? "nav-link active" : "nav-link"} onClick={removeActive}>
                            Dienstleistungen
                        </Link>
                        <Link href={"/service"} className={pathname.includes("/service") ? "nav-link active" : "nav-link"} onClick={removeActive}>
                            Service
                        </Link>
                        <Link href={"/shop"} className={pathname.includes("/shop") ? "nav-link active" : "nav-link"} onClick={removeActive}>
                            Shop
                        </Link>
                        <Link href={"/downloads"} className={pathname.includes("/downloads") ? "nav-link active" : "nav-link"} onClick={removeActive}>
                            Downloads
                        </Link>
                        <Link href={"/kontakt"} className={pathname.includes("/kontakt") ? "nav-link last active" : "nav-link last"} onClick={removeActive}>
                            Kontakt
                        </Link>
                    </div>
                    <div className={active ? "menu-burger active" : "menu-burger"} onClick={toggleActive}>
                        <div className="line-top"></div>
                        <div className="line-bot"></div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
