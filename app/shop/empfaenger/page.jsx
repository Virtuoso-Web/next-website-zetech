import Products from "@/app/shop/(components)/products.jsx";

const products = [
    {
        name: "Geomax Empfänger",
        link: "/shop/empfaenger/geomax-empfaenger",
    },
    {
        name: "Metor MTR-60RGL",
        link: "/shop/empfaenger",
    },
    {
        name: "Metor MTR-90R",
        link: "/shop/empfaenger",
    },
    {
        name: "Metor MTR-125",
        link: "/shop/empfaenger",
    },
];

export default function Page() {
    return <Products products={products} />;
}
