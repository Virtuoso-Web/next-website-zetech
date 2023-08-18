import Navigation from "@/app/shop/(components)/navigation.jsx";

import Link from "next/link";

import "@/app/shop/style.scss";

const products = [
    {
        name: "Totalstationen",
        link: "/shop",
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
        name: "Disto",
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

export default function Page() {
    return (
        <main className="shop-page">
            <section className="intro-section">
                <div className="section-container">
                    <div className="flex-grid">
                        <h1 className="title">Finden Sie das passende Produkt</h1>
                        <p className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut vel tenetur molestias dolorum earum rerum odit reiciendis maiores ex unde voluptatibus, suscipit laboriosam rem nobis fugit! Hic similique dicta ducimus.</p>
                    </div>
                </div>
            </section>

            <section className="catalogue-section">
                <div className="section-container">
                    <div className="flex-grid">
                        <Navigation />
                        <div className="products-box">
                            {products.map((product, index) => (
                                <Link href={product.link} prefetch={false} className="product" key={index}>
                                    <h2 className="title">{product.name}</h2>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
