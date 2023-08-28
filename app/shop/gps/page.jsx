import Products from "@/app/shop/(components)/products.jsx";

const products = [
    {
        name: "Leica GPS",
        link: "/shop/gps/leica-gps",
    },
];

export default function Page() {
    return <Products products={products} />;
}
