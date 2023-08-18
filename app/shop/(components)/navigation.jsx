import Link from "next/link";

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

export default function Navigation() {
    return (
        <div className="nav-box">
            <h1 className="title">PRODUKTE KATALOG</h1>
            <nav className="navigation">
                {products.map((product, index) => (
                    <Link href={product.link} prefetch={false} className="link" key={index}>
                        {product.name}
                    </Link>
                ))}
            </nav>
        </div>
    );
}
