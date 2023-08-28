import Products from "@/app/shop/(components)/products.jsx";

const products = [
    {
        name: "Leica Laser",
        link: "/shop/baulaser/leica-laser",
    },
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
    {
        name: "Nestle Laser",
        link: "/shop/baulaser/nestle-laser",
    },
];

export default function Page() {
    return <Products products={products} />;
}
