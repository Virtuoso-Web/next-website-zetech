import Products from "@/app/shop/(components)/products.jsx";

const products = [
    {
        name: "Nedo Stative",
        link: "/shop/stative/nedo-stative",
    },
    {
        name: "Nestle Stative",
        link: "/shop/stative/nestle-stative",
    },
    {
        name: "Nestle Stativbeine",
        link: "/shop/stative/nestle-stativbeine",
    },
];

export default function Page() {
    return <Products products={products} />;
}
