import Products from "@/app/shop/(components)/products.jsx";

const products = [
    {
        name: "Leica Nivelliere",
        link: "/shop/nivelliere/leica-nivelliere",
    },
];

export default function Page() {
    return <Products products={products} />;
}
