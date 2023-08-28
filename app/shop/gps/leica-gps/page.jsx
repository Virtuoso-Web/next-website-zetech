import Products from "@/app/shop/(components)/products.jsx";

const products = [
    {
        name: "Leica iCG 70",
        link: "/shop/gps/leica-gps",
    },
    {
        name: "Leica iCG 70T",
        link: "/shop/gps/leica-gps",
    },
    {
        name: "Leica iCG 160",
        link: "/shop/gps/leica-gps",
    },
];

export default function Page() {
    return <Products products={products} />;
}
