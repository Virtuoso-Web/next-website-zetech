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
        image: "/images/shop/baulaser/leica-rugby-cla-ctive-1.webp",
    },
    {
        name: "Kanalbaulaser",
        link: "/shop/kanalbaulaser",
        image: "/images/shop/kanalbaulaser/leica-piper-100-1.webp",
    },
    {
        name: "Linienlaser",
        link: "/shop/linienlaser",
    },
    {
        name: "Distanzmessgeräte",
        link: "/shop/distanzmessgeraete",
        image: "/images/shop/distanzmessgeraete/leica-disto-110-1.webp",
    },
    {
        name: "Empfänger",
        link: "/shop/empfaenger",
        image: "/images/shop/empfaenger/geomax-zrd-105-1.webp",
    },
    {
        name: "Nivelliere",
        link: "/shop/nivelliere",
        image: "/images/shop/nivelliere/leica-na-320-1.webp",
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
