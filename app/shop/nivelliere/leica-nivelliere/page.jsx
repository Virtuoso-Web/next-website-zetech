import Products from "@/app/shop/(components)/products.jsx";

const products = [
    {
        name: "Leica NA320",
        link: "/shop/nivelliere/leica-nivelliere",
    },
    {
        name: "Leica NA324",
        link: "/shop/nivelliere/leica-nivelliere",
    },
    {
        name: "Leica NA332",
        link: "/shop/nivelliere/leica-nivelliere",
    },
    {
        name: "Leica NA520",
        link: "/shop/nivelliere/leica-nivelliere",
    },
    {
        name: "Leica NA524",
        link: "/shop/nivelliere/leica-nivelliere",
    },
    {
        name: "Leica NA530",
        link: "/shop/nivelliere/leica-nivelliere",
    },
    {
        name: "Leica NA720",
        link: "/shop/nivelliere/leica-nivelliere",
    },
    {
        name: "Leica NA724",
        link: "/shop/nivelliere/leica-nivelliere",
    },
    {
        name: "Leica NA730 Plus",
        link: "/shop/nivelliere/leica-nivelliere",
    },
];

export default function Page() {
    return <Products products={products} />;
}
