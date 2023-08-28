import Products from "@/app/shop/(components)/products.jsx";

const products = [
    {
        name: "Geomax ZRD105",
        link: "/shop/empfaenger/geomax-empfaenger",
    },
    {
        name: "Geomax ZRD105B",
        link: "/shop/empfaenger/geomax-empfaenger",
    },
    {
        name: "Geomax ZRP105 Pro",
        link: "/shop/empfaenger/geomax-empfaenger",
    },
    {
        name: "Geomax ZRC60 Fernbedienung",
        link: "/shop/empfaenger/geomax-empfaenger",
    },
];

export default function Page() {
    return <Products products={products} />;
}
