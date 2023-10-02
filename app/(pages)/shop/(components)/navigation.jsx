"use client";

import products from "@/app/(pages)/shop/products.json";

import Link from "next/link";

import { usePathname } from "next/navigation";

export default function Navigation() {
    const path = usePathname();

    return (
        <div className="nav-box">
            <h1 className="title">KATALOG</h1>
            <nav className="navigation">
                <Link href={"/shop"} className={path === "/shop" ? "link active" : "link"} key={-1}>
                    Übersicht
                </Link>
                {products.map((product, index) => (
                    <Link href={product.link} className={path.includes(product.link) ? "link active" : "link"} key={index}>
                        {product.name}
                    </Link>
                ))}
            </nav>
        </div>
    );
}
