import Products from "@/app/shop/(components)/products.jsx";

const products = [
    {
        name: "Leica iCG 70",
        link: "/shop/gps",
        image: "/images/shop/gps/leica-icon-gps-70-1.webp",
    },
    {
        name: "Leica iCG 70T",
        link: "/shop/gps",
        image: "/images/shop/gps/leica-icon-gps-70-1.webp",
    },
    {
        name: "Leica iCG 160",
        link: "/shop/gps",
        image: "/images/shop/gps/leica-icon-gps-160-1.webp",
    },
];

export default function Page() {
    return <Products products={products} />;
}
