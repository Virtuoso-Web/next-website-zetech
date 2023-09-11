import Products from "@/app/shop/(components)/products.jsx";

const products = [
    {
        name: "Leica NA320",
        link: "/shop/nivelliere",
        image: "/images/shop/nivelliere/leica-na-320-1.webp",
    },
    {
        name: "Leica NA324",
        link: "/shop/nivelliere",
        image: "/images/shop/nivelliere/leica-na-324-1.webp",
    },
    {
        name: "Leica NA332",
        link: "/shop/nivelliere",
        image: "/images/shop/nivelliere/leica-na-332-1.webp",
    },
    {
        name: "Leica NA520",
        link: "/shop/nivelliere",
        image: "/images/shop/nivelliere/leica-na-500-1.webp",
    },
    {
        name: "Leica NA524",
        link: "/shop/nivelliere",
        image: "/images/shop/nivelliere/leica-na-500-1.webp",
    },
    {
        name: "Leica NA530",
        link: "/shop/nivelliere",
        image: "/images/shop/nivelliere/leica-na-500-1.webp",
    },
    {
        name: "Leica NA720",
        link: "/shop/nivelliere",
        image: "/images/shop/nivelliere/leica-na-700-1.webp",
    },
    {
        name: "Leica NA724",
        link: "/shop/nivelliere",
        image: "/images/shop/nivelliere/leica-na-700-1.webp",
    },
    {
        name: "Leica NA730 Plus",
        link: "/shop/nivelliere",
        image: "/images/shop/nivelliere/leica-na-700-1.webp",
    },
];

export default function Page() {
    return <Products products={products} />;
}
