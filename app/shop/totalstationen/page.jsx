import Products from "@/app/shop/(components)/products.jsx";

const products = [
    {
        name: "Leica iCON Robot 70",
        link: "/shop/totalstationen",
        image: "/images/shop/totalstationen/leica-icon-robot-70-1.webp",
    },
    {
        name: "Leica iCON Robot 80",
        link: "/shop/totalstationen",
        image: "/images/shop/totalstationen/leica-icon-robot-80-1.webp",
    },
    {
        name: "Leica iCB 50",
        link: "/shop/totalstationen",
        image: "/images/shop/totalstationen/leica-icb-50-1.webp",
    },
    {
        name: "Leica iCB 70",
        link: "/shop/totalstationen",
        image: "/images/shop/totalstationen/leica-icb-70-1.webp",
    },
    {
        name: "Leica AP20 AutoPole",
        link: "/shop/totalstationen/leica-ap20-autopole",
        image: "/images/shop/totalstationen/leica-ap-20-autopole-1.webp",
    },
];

export default function Page() {
    return <Products products={products} />;
}
