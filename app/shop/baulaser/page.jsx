import Products from "@/app/shop/(components)/products.jsx";

const products = [
    {
        name: "Leica Rugby 600 Serien",
        link: "/shop/baulaser/leica-rugby-600-serien",
    },
    {
        name: "Leica Rugby CLA-CTIVE",
        link: "/shop/baulaser",
    },
    {
        name: "Leica Rugby CLH",
        link: "/shop/baulaser",
    },
    {
        name: "Geomax Laser",
        link: "/shop/baulaser/geomax-laser",
    },
];

export default function Page() {
    return <Products products={products} />;
}
