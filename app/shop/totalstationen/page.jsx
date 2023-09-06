import Products from "@/app/shop/(components)/products.jsx";

const products = [
    {
        name: "Leica Totalstationen",
        link: "/shop/totalstationen/leica-totalstationen",
        image: "/images/shop/totalstationen/leica-icon-robot-70-1.webp",
    },
    {
        name: "Leica iCON Builder",
        link: "/shop/totalstationen/leica-icon-builder",
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
