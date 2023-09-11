import Products from "@/app/shop/(components)/products.jsx";

const products = [
    {
        name: "Leica Distanzmessgerät 110",
        link: "/shop/distanzmessgeraete",
        image: "/images/shop/distanzmessgeraete/leica-disto-110-1.webp",
    },
    {
        name: "Leica Distanzmessgerät 910",
        link: "/shop/distanzmessgeraete",
        image: "/images/shop/distanzmessgeraete/leica-disto-910-1.webp",
    },
    {
        name: "Leica Distanzmessgerät D2",
        link: "/shop/distanzmessgeraete",
        image: "/images/shop/distanzmessgeraete/leica-disto-d-2-1.webp",
    },
    {
        name: "Leica Distanzmessgerät D510",
        link: "/shop/distanzmessgeraete",
        image: "/images/shop/distanzmessgeraete/leica-disto-d-510-1.webp",
    },
    {
        name: "Leica Distanzmessgerät X3",
        link: "/shop/distanzmessgeraete",
        image: "/images/shop/distanzmessgeraete/leica-disto-x-3-1.webp",
    },
    {
        name: "Leica Distanzmessgerät X4",
        link: "/shop/distanzmessgeraete",
        image: "/images/shop/distanzmessgeraete/leica-disto-x-4-1.webp",
    },
];

export default function Page() {
    return <Products products={products} />;
}
