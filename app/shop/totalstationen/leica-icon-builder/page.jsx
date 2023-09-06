import Products from "@/app/shop/(components)/products.jsx";

const products = [
    {
        name: "Leica iCB 50",
        link: "/shop/totalstationen/leica-icon-builder",
        image: "/images/shop/totalstationen/leica-icb-50-1.webp",
    },
    {
        name: "Leica iCB 70",
        link: "/shop/totalstationen/leica-icon-builder",
        image: "/images/shop/totalstationen/leica-icb-70-1.webp",
    },
];

export default function Page() {
    return <Products products={products} />;
}
