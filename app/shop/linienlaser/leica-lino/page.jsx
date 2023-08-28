import Products from "@/app/shop/(components)/products.jsx";

const products = [
    {
        name: "Leica Lino L2",
        link: "/shop/linienlaser/leica-lino",
    },
    {
        name: "Leica Lino L2 Set",
        link: "/shop/linienlaser/leica-lino",
    },
    {
        name: "Leica Lino L2G",
        link: "/shop/linienlaser/leica-lino",
    },
    {
        name: "Leica Lino L2G Set",
        link: "/shop/linienlaser/leica-lino",
    },
    {
        name: "Leica Lino L2P5",
        link: "/shop/linienlaser/leica-lino",
    },
    {
        name: "Leica Lino L2P5G",
        link: "/shop/linienlaser/leica-lino",
    },
    {
        name: "Leica Lino L6G",
        link: "/shop/linienlaser/leica-lino",
    },
    {
        name: "Leica Lino L6G Set",
        link: "/shop/linienlaser/leica-lino",
    },
    {
        name: "Leica Lino L6R",
        link: "/shop/linienlaser/leica-lino",
    },
    {
        name: "Leica Lino L6R Set",
        link: "/shop/linienlaser/leica-lino",
    },
    {
        name: "Leica Lino P5 Set",
        link: "/shop/linienlaser/leica-lino",
    },
];

export default function Page() {
    return <Products products={products} />;
}