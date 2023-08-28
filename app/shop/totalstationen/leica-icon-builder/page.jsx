import Products from "@/app/shop/(components)/products.jsx";

const products = [
    {
        name: "Leica iCB 50",
        link: "/shop/totalstationen/leica-icon-builder",
    },
    {
        name: "Leica iCB 70",
        link: "/shop/totalstationen/leica-icon-builder",
    },
];

export default function Page() {
    return <Products products={products} />;
}
