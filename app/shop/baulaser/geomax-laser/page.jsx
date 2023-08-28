import Products from "@/app/shop/(components)/products.jsx";

const products = [
    {
        name: "Geomax 20H",
        link: "/shop/baulaser/geomax-laser",
    },
    {
        name: "Geomax 20HV",
        link: "/shop/baulaser/geomax-laser",
    },
    {
        name: "Geomax 60DG",
        link: "/shop/baulaser/geomax-laser",
    },
    {
        name: "Geomax 60HG",
        link: "/shop/baulaser/geomax-laser",
    },
];

export default function Page() {
    return <Products products={products} />;
}
