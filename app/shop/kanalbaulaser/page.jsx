import Products from "@/app/shop/(components)/products.jsx";

const products = [
    {
        name: "Leica Piper Serien",
        link: "/shop/kanalbaulaser/leica-piper-serien",
    },
    {
        name: "Geomax Kanalbau Laser",
        link: "/shop/kanalbaulaser/geomax-kanalbau-laser",
    },
];

export default function Page() {
    return <Products products={products} />;
}
