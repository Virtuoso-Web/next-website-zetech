import Products from "@/app/shop/(components)/products.jsx";

const products = [
    {
        name: "Leica iCON Robot 70",
        link: "/shop/totalstationen/leica-totalstationen",
    },
    {
        name: "Leica iCON Robot 80",
        link: "/shop/totalstationen/leica-totalstationen",
    },
];

export default function Page() {
    return <Products products={products} />;
}
