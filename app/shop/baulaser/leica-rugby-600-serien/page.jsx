import Products from "@/app/shop/(components)/products.jsx";

const products = [
    {
        name: "Leica Rugby 610",
        link: "/shop/baulaser/leica-rugby-600-serien",
        image: "/images/shop/baulaser/leica-rugby-610-1.webp",
    },
    {
        name: "Leica Rugby 620",
        link: "/shop/baulaser/leica-rugby-600-serien",
        image: "/images/shop/baulaser/leica-rugby-620-1.webp",
    },
    {
        name: "Leica Rugby 640",
        link: "/shop/baulaser/leica-rugby-600-serien",
        image: "/images/shop/baulaser/leica-rugby-640-1.webp",
    },
    {
        name: "Leica Rugby 640 G",
        link: "/shop/baulaser/leica-rugby-600-serien",
        image: "/images/shop/baulaser/leica-rugby-640-1.webp",
    },
    {
        name: "Leica Rugby 680",
        link: "/shop/baulaser/leica-rugby-600-serien",
        image: "/images/shop/baulaser/leica-rugby-680-1.webp",
    },
];

export default function Page() {
    return <Products products={products} />;
}
