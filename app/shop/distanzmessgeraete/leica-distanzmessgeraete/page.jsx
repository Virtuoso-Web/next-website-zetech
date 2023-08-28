import Products from "@/app/shop/(components)/products.jsx";

const products = [
    {
        name: "Leica Distanzmessgerät 110",
        link: "/shop/distanzmessgeraete/leica-distanzmessgeraete",
    },
    {
        name: "Leica Distanzmessgerät 910",
        link: "/shop/distanzmessgeraete/leica-distanzmessgeraete",
    },
    {
        name: "Leica Distanzmessgerät D2",
        link: "/shop/distanzmessgeraete/leica-distanzmessgeraete",
    },
    {
        name: "Leica Distanzmessgerät D510",
        link: "/shop/distanzmessgeraete/leica-distanzmessgeraete",
    },
    {
        name: "Leica Distanzmessgerät X3",
        link: "/shop/distanzmessgeraete/leica-distanzmessgeraete",
    },
    {
        name: "Leica Distanzmessgerät X4",
        link: "/shop/distanzmessgeraete/leica-distanzmessgeraete",
    },
];

export default function Page() {
    return <Products products={products} />;
}
