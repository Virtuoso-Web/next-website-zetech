"use client";

import products from "@/app/(pages)/shop/products.json";

import Link from "next/link";

import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
    const path = usePathname();
    const [active, setActive] = useState(false);

    const toggle = () => setActive((active) => !active);
    const close = () => setActive(false);

    return (
        <div className="nav-box">
            <h1 className="title" onClick={toggle}>
                KATALOG
                <span className={active ? "arrow active" : "arrow"}>{">"}</span>
            </h1>
            <nav className={active ? "navigation active" : "navigation"}>
                <Link href={"/shop"} className={path === "/shop" ? "link active" : "link"} key={-1} onClick={close}>
                    Übersicht
                </Link>
                {products.map((product, index) => (
                    <Link href={product.link} className={path.includes(product.link) ? "link active" : "link"} key={index} onClick={close}>
                        {product.name}
                    </Link>
                ))}
            </nav>
        </div>
    );
}
