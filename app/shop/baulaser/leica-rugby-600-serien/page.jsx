import Products from "@/app/shop/(components)/products.jsx";

const products = [
    {
        name: "Leica Rugby 610",
        link: "/shop/baulaser/leica-rugby-600-serien",
    },
    {
        name: "Leica Rugby 620",
        link: "/shop/baulaser/leica-rugby-600-serien",
    },
    {
        name: "Leica Rugby 640",
        link: "/shop/baulaser/leica-rugby-600-serien",
    },
    {
        name: "Leica Rugby 640 G",
        link: "/shop/baulaser/leica-rugby-600-serien",
    },
    {
        name: "Leica Rugby 680",
        link: "/shop/baulaser/leica-rugby-600-serien",
    },
];

export default function Page() {
    return <Products products={products} />;
}
