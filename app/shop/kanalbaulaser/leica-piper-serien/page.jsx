import Products from "@/app/shop/(components)/products.jsx";

const products = [
    {
        name: "Leica Piper 100",
        link: "/shop/kanalbaulaser/leica-piper-serien",
    },
    {
        name: "Leica Piper 100G",
        link: "/shop/kanalbaulaser/leica-piper-serien",
    },
    {
        name: "Leica Piper 200",
        link: "/shop/kanalbaulaser/leica-piper-serien",
    },
    {
        name: "Leica Piper 200G",
        link: "/shop/kanalbaulaser/leica-piper-serien",
    },
];

export default function Page() {
    return <Products products={products} />;
}
