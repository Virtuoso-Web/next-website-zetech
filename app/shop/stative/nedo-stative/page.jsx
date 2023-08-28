import Products from "@/app/shop/(components)/products.jsx";

const products = [
    {
        name: "Nedo Mittelschwere Aluminium Stative",
        link: "/shop/stative/nedo-stative",
    },
    {
        name: "Nedo Mittelschwere Kurbelstative",
        link: "/shop/stative/nedo-stative",
    },
    {
        name: "Nedo Schwere Kurbelstative",
        link: "/shop/stative/nedo-stative",
    },
];

export default function Page() {
    return <Products products={products} />;
}
