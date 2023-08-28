import Products from "@/app/shop/(components)/products.jsx";

const products = [
    {
        name: "Nestle Pulsar 25",
        link: "/shop/baulaser/nestle-laser",
    },
    {
        name: "Nestle Pulsar H",
        link: "/shop/baulaser/nestle-laser",
    },
    {
        name: "Nestle Pulsar HV-G",
        link: "/shop/baulaser/nestle-laser",
    },
    {
        name: "Nestle Pulsar HV-R",
        link: "/shop/baulaser/nestle-laser",
    },
];

export default function Page() {
    return <Products products={products} />;
}
