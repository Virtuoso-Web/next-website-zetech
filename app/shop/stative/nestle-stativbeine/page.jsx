import Products from "@/app/shop/(components)/products.jsx";

const products = [
    {
        name: "Nestle Dreibeinstrebe P3-D",
        link: "/shop/stative/nestle-stativbeine",
    },
    {
        name: "Nestle Vermesserstabzubehör Minizweibeinstrebe",
        link: "/shop/stative/nestle-stativbeine",
    },
    {
        name: "Nestle Zweibeinstrebe Thumb-Release P2-T",
        link: "/shop/stative/nestle-stativbeine",
    },
    {
        name: "Nestle Zweibeinstrebe Universal",
        link: "/shop/stative/nestle-stativbeine",
    },
];

export default function Page() {
    return <Products products={products} />;
}
