import Products from "@/app/shop/(components)/products.jsx";

const products = [
    {
        name: "Leica Rugby 600 Serien",
        link: "/shop/baulaser/leica-rugby-600-serien",
        image: "/images/shop/baulaser/leica-rugby-610-1.webp",
    },
    {
        name: "Leica Rugby CLA-CTIVE",
        link: "/shop/baulaser",
        image: "/images/shop/baulaser/leica-rugby-cla-ctive-1.webp",
    },
    {
        name: "Leica Rugby CLH",
        link: "/shop/baulaser",
        image: "/images/shop/baulaser/leica-rugby-clh-1.webp",
    },
    {
        name: "Geomax Laser",
        link: "/shop/baulaser/geomax-laser",
        image: "/images/shop/baulaser/geomax-60-dg-1.webp",
    },
];

export default function Page() {
    return <Products products={products} />;
}
