"use client";

import "@/app/shop/(components)/navigation.scss";

import Link from "next/link";

import { useState } from "react";

const products = [
    {
        name: "Totalstationen",
        link: "/shop/totalstationen",
    },
    {
        name: "GPS",
        link: "/shop",
    },
    {
        name: "Tablets",
        link: "/shop",
    },
    {
        name: "Baulaser",
        link: "/shop",
    },
    {
        name: "Kanalbaulaser",
        link: "/shop",
    },
    {
        name: "Linienlaser",
        link: "/shop",
    },
    {
        name: "Distanzmessgeräte",
        link: "/shop",
    },
    {
        name: "Empfänger",
        link: "/shop",
    },
    {
        name: "Nivelliere",
        link: "/shop",
    },
    {
        name: "Stative",
        link: "/shop",
    },
    {
        name: "Zubehör Totalstationen",
        link: "/shop",
    },
    {
        name: "Zubehör GPS",
        link: "/shop",
    },
];

export default function Navigation() {
    const [active, setActive] = useState(false);

    const toggle = () => {
        setActive((active) => !active);
    };

    return (
        <div className="nav-box">
            <h1 className="title" onClick={toggle}>
                PRODUKTE KATALOG
                <span className={active ? "arrow active" : "arrow"}>{">"}</span>
            </h1>
            <nav className={active ? "navigation active" : "navigation"}>
                {products.map((product, index) => (
                    <Link href={product.link} prefetch={false} className="link" key={index}>
                        {product.name}
                    </Link>
                ))}
            </nav>
        </div>
    );
}
