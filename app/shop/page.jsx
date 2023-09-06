import Products from "@/app/shop/(components)/products.jsx";

const products = [
    {
        name: "Totalstationen",
        link: "/shop/totalstationen",
        image: "/images/shop/totalstationen/leica-icon-robot-70-1.webp",
    },
    {
        name: "GPS",
        link: "/shop/gps",
        image: "/images/shop/gps/leica-icon-gps-70-1.webp",
    },
    {
        name: "Tablets",
        link: "/shop/tablets",
        image: "/images/shop/tablets/leica-icon-cc-200-1.webp",
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
