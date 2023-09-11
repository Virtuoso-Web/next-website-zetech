import Products from "@/app/shop/(components)/products.jsx";

const products = [
    {
        name: "Geomax ZRD105",
        link: "/shop/empfaenger",
        image: "/images/shop/empfaenger/geomax-zrd-105-1.webp",
    },
    {
        name: "Geomax ZRD105B",
        link: "/shop/empfaenger",
        image: "/images/shop/empfaenger/geomax-zrd-105-b-1.webp",
    },
    {
        name: "Geomax ZRP105 Pro",
        link: "/shop/empfaenger",
        image: "/images/shop/empfaenger/geomax-zrp-105-pro-1.webp",
    },
    {
        name: "Geomax ZRC60 Fernbedienung",
        link: "/shop/empfaenger",
        image: "/images/shop/empfaenger/geomax-zrc-60-fernbedienung-1.webp",
    },
    {
        name: "Metor MTR-60RGL",
        link: "/shop/empfaenger",
        image: "/images/shop/empfaenger/metor-mtr-60-rgl-1.webp",
    },
    {
        name: "Metor MTR-90R",
        link: "/shop/empfaenger",
        image: "/images/shop/empfaenger/metor-mtr-90-r-1.webp",
    },
    {
        name: "Metor MTR-125",
        link: "/shop/empfaenger",
        image: "/images/shop/empfaenger/metor-mtr-125-1.webp",
    },
];

export default function Page() {
    return <Products products={products} />;
}
