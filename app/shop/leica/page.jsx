import Link from "next/link";

import "@/app/shop/leica/style.scss";

const products = [
    {
        name: "AP20",
        link: "/shop/leica",
    },
    {
        name: "Baggersteuerung",
        link: "/shop/leica",
    },
    {
        name: "CC80",
        link: "/shop/leica",
    },
    {
        name: "CC200",
        link: "/shop/leica",
    },
    {
        name: "Disto",
        link: "/shop/leica",
    },
    {
        name: "GPS",
        link: "/shop/leica",
    },
    {
        name: "iCON Builder",
        link: "/shop/leica",
    },
    {
        name: "Laser",
        link: "/shop/leica",
    },
    {
        name: "Lino",
        link: "/shop/leica",
    },
    {
        name: "Nivelliere",
        link: "/shop/leica",
    },
    {
        name: "Total Stationen",
        link: "/shop/leica",
    },
];

export default function Page() {
    return (
        <main className="leica-shop-page">
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
                                <Link href={"/shop/leica"} className="link">
                                    Leica
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
