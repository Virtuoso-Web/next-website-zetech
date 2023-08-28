import Products from "@/app/shop/(components)/products.jsx";

const products = [
    {
        name: "Leica Distanzmessgeräte",
        link: "/shop/distanzmessgeraete/leica-distanzmessgeraete",
    },
];

export default function Page() {
    return <Products products={products} />;
}
