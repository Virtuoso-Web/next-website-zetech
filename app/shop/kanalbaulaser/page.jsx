import Products from "@/app/shop/(components)/products.jsx";

const products = [
    {
        name: "Leica Piper 100",
        link: "/shop/kanalbaulaser",
        image: "/images/shop/kanalbaulaser/leica-piper-100-1.webp",
    },
    {
        name: "Leica Piper 100G",
        link: "/shop/kanalbaulaser",
        image: "/images/shop/kanalbaulaser/leica-piper-100-g-1.webp",
    },
    {
        name: "Leica Piper 200",
        link: "/shop/kanalbaulaser",
        image: "/images/shop/kanalbaulaser/leica-piper-200-1.webp",
    },
    {
        name: "Leica Piper 200G",
        link: "/shop/kanalbaulaser",
        image: "/images/shop/kanalbaulaser/leica-piper-200-g-1.webp",
    },
];

export default function Page() {
    return <Products products={products} />;
}
