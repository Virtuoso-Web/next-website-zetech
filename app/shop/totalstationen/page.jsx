import Products from "@/app/shop/(components)/products.jsx";

const products = [
    {
        name: "Leica Totalstationen",
        link: "/shop/totalstationen/leica-totalstationen",
    },
    {
        name: "Leica iCON Builder",
        link: "/shop/totalstationen/leica-icon-builder",
    },
    {
        name: "Leica AP20",
        link: "/shop/totalstationen",
    },
];

export default function Page() {
    return <Products products={products} />;
}