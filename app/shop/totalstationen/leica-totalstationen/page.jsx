import Products from "@/app/shop/(components)/products.jsx";

const products = [
    {
        name: "Leica iCON Robot 70",
        link: "/shop/totalstationen/leica-totalstationen",
        image: "/images/shop/totalstationen/leica-icon-robot-70-1.webp",
    },
    {
        name: "Leica iCON Robot 80",
        link: "/shop/totalstationen/leica-totalstationen",
        image: "/images/shop/totalstationen/leica-icon-robot-80-1.webp",
    },
];

export default function Page() {
    return <Products products={products} />;
}
