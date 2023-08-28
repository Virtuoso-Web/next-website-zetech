import Products from "@/app/shop/(components)/products.jsx";

const products = [
    {
        name: "Leica CC80",
        link: "/shop/tablets",
    },
    {
        name: "Leica CC200",
        link: "/shop/tablets",
    },
];

export default function Page() {
    return <Products products={products} />;
}
