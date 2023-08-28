import Products from "@/app/shop/(components)/products.jsx";

const products = [
    {
        name: "Geomax Zeta 125",
        link: "/shop/kanalbaulaser/geomax-kanalbau-laser",
    },
    {
        name: "Geomax Zeta 125G",
        link: "/shop/kanalbaulaser/geomax-kanalbau-laser",
    },
];

export default function Page() {
    return <Products products={products} />;
}
