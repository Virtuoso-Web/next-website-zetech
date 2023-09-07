import Products from "@/app/shop/(components)/products.jsx";

const products = [
    {
        name: "Geomax 20H",
        link: "/shop/baulaser/geomax-laser",
        image: "/images/shop/baulaser/geomax-20-h-1.webp",
    },
    {
        name: "Geomax 20HV",
        link: "/shop/baulaser/geomax-laser",
        image: "/images/shop/baulaser/geomax-20-hv-1.webp",
    },
    {
        name: "Geomax 60DG",
        link: "/shop/baulaser/geomax-laser",
        image: "/images/shop/baulaser/geomax-60-dg-1.webp",
    },
    {
        name: "Geomax 60HG",
        link: "/shop/baulaser/geomax-laser",
        image: "/images/shop/baulaser/geomax-60-hg-1.webp",
    },
];

export default function Page() {
    return <Products products={products} />;
}
