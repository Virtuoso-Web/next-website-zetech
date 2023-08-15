"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

import Link from "next/link";

import "@/components/header-style.scss";

export default function Header() {
    const pathname = usePathname();
    const [active, setActive] = useState(false);

    const toggleActive = () => setActive((active) => !active);
    const removeActive = () => setActive(false);

    return (
        <header className="header">
            <div className="header-container">
                <nav className="navigation">
                    <Link href={"/"} prefetch={false} className="logo-link" onClick={removeActive}>
                        <span className="company-name">ZETECH</span>
                        <span className="company-desc">Baumesstechnik GmbH</span>
                    </Link>
                    <div className={active ? "nav-list active" : "nav-list"}>
                        <Link href={"/"} prefetch={false} className={pathname === "/" ? "nav-link first active" : "nav-link first"} onClick={removeActive}>
                            Home
                        </Link>
                        <Link href={"/dienstleistungen"} prefetch={false} className={pathname.includes("/dienstleistungen") ? "nav-link active" : "nav-link"} onClick={removeActive}>
                            Dienstleistungen / Datenaufbereitung
                        </Link>
                        <Link href={"/"} prefetch={false} className={pathname.includes("/service") ? "nav-link active" : "nav-link"} onClick={removeActive}>
                            Service / Werkstatt
                        </Link>
                        <Link href={"/shop"} prefetch={false} className={pathname.includes("/shop") ? "nav-link active" : "nav-link"} onClick={removeActive}>
                            Shop
                        </Link>
                        <Link href={"/downloads"} prefetch={false} className={pathname.includes("/downloads") ? "nav-link active" : "nav-link"} onClick={removeActive}>
                            Downloads
                        </Link>
                        <Link href={"/kontakt"} prefetch={false} className={pathname.includes("/kontakt") ? "nav-link last active" : "nav-link last"} onClick={removeActive}>
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
