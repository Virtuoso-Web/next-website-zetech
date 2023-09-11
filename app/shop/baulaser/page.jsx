import Products from "@/app/shop/(components)/products.jsx";

const products = [
    {
        name: "Leica Rugby 610",
        link: "/shop/baulaser",
        image: "/images/shop/baulaser/leica-rugby-610-1.webp",
    },
    {
        name: "Leica Rugby 620",
        link: "/shop/baulaser",
        image: "/images/shop/baulaser/leica-rugby-620-1.webp",
    },
    {
        name: "Leica Rugby 640",
        link: "/shop/baulaser",
        image: "/images/shop/baulaser/leica-rugby-640-1.webp",
    },
    {
        name: "Leica Rugby 640 G",
        link: "/shop/baulaser",
        image: "/images/shop/baulaser/leica-rugby-640-1.webp",
    },
    {
        name: "Leica Rugby 680",
        link: "/shop/baulaser",
        image: "/images/shop/baulaser/leica-rugby-680-1.webp",
    },
    {
        name: "Leica Rugby CLA-CTIVE",
        link: "/shop/baulaser",
        image: "/images/shop/baulaser/leica-rugby-cla-ctive-1.webp",
    },
    {
        name: "Leica Rugby CLH",
        link: "/shop/baulaser",
        image: "/images/shop/baulaser/leica-rugby-clh-1.webp",
    },
    {
        name: "Geomax 20H",
        link: "/shop/baulaser",
        image: "/images/shop/baulaser/geomax-20-h-1.webp",
    },
    {
        name: "Geomax 20HV",
        link: "/shop/baulaser",
        image: "/images/shop/baulaser/geomax-20-hv-1.webp",
    },
    {
        name: "Geomax 60DG",
        link: "/shop/baulaser",
        image: "/images/shop/baulaser/geomax-60-dg-1.webp",
    },
    {
        name: "Geomax 60HG",
        link: "/shop/baulaser",
        image: "/images/shop/baulaser/geomax-60-hg-1.webp",
    },
];

export default function Page() {
    return <Products products={products} />;
}
