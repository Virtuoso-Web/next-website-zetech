import Link from "next/link";

import "@/app/shop/zubehoer/style.scss";

const products = [
    {
        name: "Laser Zubehör",
        link: "/shop/zubehoer",
    },
    {
        name: "Neigungsmesser",
        link: "/shop/zubehoer",
    },
    {
        name: "Fluchtstäbe",
        link: "/shop/zubehoer",
    },
    {
        name: "Fluchtstabstativ",
        link: "/shop/zubehoer",
    },
    {
        name: "Laser",
        link: "/shop/zubehoer",
    },
    {
        name: "Markiernägel",
        link: "/shop/zubehoer",
    },
    {
        name: "Mini-Prismen Set",
        link: "/shop/zubehoer",
    },
    {
        name: "Nivelliermesslatten",
        link: "/shop/zubehoer",
    },
    {
        name: "Prisma Leica Style GPR1",
        link: "/shop/zubehoer",
    },
    {
        name: "Prismenstäbe",
        link: "/shop/zubehoer",
    },
    {
        name: "Rechenhalter",
        link: "/shop/zubehoer",
    },
    {
        name: "Stativbeine",
        link: "/shop/zubehoer",
    },
    {
        name: "Stative",
        link: "/shop/zubehoer",
    },
    {
        name: "Vermessungsstäbe",
        link: "/shop/zubehoer",
    },
    {
        name: "Winkelmesser",
        link: "/shop/zubehoer",
    },
];

export default function Page() {
    return (
        <main className="zubehoer-shop-page">
            <section className="intro-section">
                <div className="section-container">
                    <div className="flex-grid">
                        <div className="title-box">
                            <h1 className="title">Finden Sie Ihr passendes Produkt</h1>
                        </div>
                        <div className="description-box">
                            <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem consectetur maiores incidunt, quisquam pariatur fugit, cumque minima nesciunt odit numquam et voluptatum molestiae dolorem magni quas ad hic, sapiente quae facilis voluptates tempore! A aut perferendis ut, quo nam culpa molestias maxime, accusantium veritatis architecto dolore iste veniam fugit officiis.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="catalogue-section">
                <div className="section-container">
                    <div className="flex-grid">
                        <div className="indicator-box">
                            <div className="title-box">
                                <h1 className="title">PRODUKTE KATALOG</h1>
                            </div>
                            <nav className="nav-box">
                                <Link href={"/shop"} className="link">
                                    Produkte
                                </Link>
                                <span className="arrow">{">"}</span>
                                <Link href={"/shop/zubehoer"} className="link">
                                    Zubehör
                                </Link>
                            </nav>
                        </div>
                        <div className="sub-flex-grid">
                            {products
                                .sort((a, b) => a.name.localeCompare(b.name))
                                .map((product, index) => (
                                    <Link href={product.link} className="product" key={index}>
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
