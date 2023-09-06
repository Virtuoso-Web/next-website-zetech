import Products from "@/app/shop/(components)/products.jsx";

const products = [
    {
        name: "Leica CC200",
        link: "/shop/tablets",
        image: "/images/shop/tablets/leica-icon-cc-200-1.webp",
    },
    {
        name: "Leica CC170",
        link: "/shop/tablets",
        image: "/images/shop/tablets/leica-icon-cc-200-1.webp",
    },
    {
        name: "Leica CC80",
        link: "/shop/tablets",
        image: "/images/shop/tablets/leica-icon-cc-80-1.webp",
    },
];

export default function Page() {
    return <Products products={products} />;
}
