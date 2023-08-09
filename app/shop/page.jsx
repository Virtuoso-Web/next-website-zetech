import Link from "next/link";

import "@/app/shop/style.scss";

const products = [
    {
        name: "Androtec",
        link: "/shop/androtec",
    },
    {
        name: "Zubehör",
        link: "/shop/zubehoer",
    },
    {
        name: "Geomax",
        link: "/shop/geomax",
    },
    {
        name: "Leica",
        link: "/shop/leica",
    },
    {
        name: "Theis",
        link: "/shop/theis",
    },
    {
        name: "Prismen",
        link: "/shop/prismen",
    },
];

export default function Page() {
    return (
        <main className="shop-page">
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
                                <Link href={"/shop"} prefetch={false} className="link">
                                    Produkte
                                </Link>
                            </nav>
                        </div>
                        <div className="sub-flex-grid">
                            {products
                                .sort((a, b) => a.name.localeCompare(b.name))
                                .map((product, index) => (
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
