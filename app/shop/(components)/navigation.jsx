"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";
import { useState } from "react";

const products = [
    {
        name: "Totalstationen",
        link: "/shop/totalstationen",
    },
    {
        name: "GPS",
        link: "/shop/gps",
    },
    {
        name: "Tablets",
        link: "/shop/tablets",
    },
    {
        name: "Baulaser",
        link: "/shop/baulaser",
    },
    {
        name: "Kanalbaulaser",
        link: "/shop/kanalbaulaser",
    },
    {
        name: "Linienlaser",
        link: "/shop/linienlaser",
    },
    {
        name: "Distanzmessgeräte",
        link: "/shop/distanzmessgeraete",
    },
    {
        name: "Empfänger",
        link: "/shop/empfaenger",
    },
    {
        name: "Nivelliere",
        link: "/shop/nivelliere",
    },
    {
        name: "Stative",
        link: "/shop/stative",
    },
    {
        name: "Zubehör Totalstationen",
        link: "/shop/zubehoer-totalstationen",
    },
    {
        name: "Zubehör GPS",
        link: "/shop/zubehoer-gps",
    },
];

export default function Navigation() {
    const path = usePathname();
    const [active, setActive] = useState(false);

    const toggle = () => {
        setActive((active) => !active);
    };

    return (
        <div className="nav-box">
            <h1 className="title" onClick={toggle}>
                KATALOG
                <span className={active ? "arrow active" : "arrow"}>{">"}</span>
            </h1>
            <nav className={active ? "navigation active" : "navigation"}>
                <Link href={"/shop"} prefetch={false} className={path === "/shop" ? "link active" : "link"} key={-1}>
                    Übersicht
                </Link>
                {products.map((product, index) => (
                    <Link href={product.link} prefetch={false} className={path.includes(product.link) ? "link active" : "link"} key={index}>
                        {product.name}
                    </Link>
                ))}
            </nav>
        </div>
    );
}
