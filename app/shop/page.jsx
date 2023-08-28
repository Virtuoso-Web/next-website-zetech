import Products from "@/app/shop/(components)/products.jsx";

const products = [
    {
        name: "Totalstationen",
        link: "/shop/totalstationen",
    },
    {
        name: "GPS",
        link: "/shop/gps",
    },
    {
        name: "Tablets",
        link: "/shop/tablets",
    },
    {
        name: "Baulaser",
        link: "/shop/baulaser",
    },
    {
        name: "Kanalbaulaser",
        link: "/shop/kanalbaulaser",
    },
    {
        name: "Linienlaser",
        link: "/shop/linienlaser",
    },
    {
        name: "Distanzmessgeräte",
        link: "/shop/distanzmessgeraete",
    },
    {
        name: "Empfänger",
        link: "/shop/empfaenger",
    },
    {
        name: "Nivelliere",
        link: "/shop/nivelliere",
    },
    {
        name: "Stative",
        link: "/shop/stative",
    },
    {
        name: "Zubehör Totalstationen",
        link: "/shop/zubehoer-totalstationen",
    },
    {
        name: "Zubehör GPS",
        link: "/shop/zubehoer-gps",
    },
];

export default function Page() {
    return <Products products={products} />;
}
