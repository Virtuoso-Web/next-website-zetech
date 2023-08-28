import Products from "@/app/shop/(components)/products.jsx";

const products = [
    {
        name: "Leica Lino",
        link: "/shop/linienlaser/leica-lino",
    },
    {
        name: "Nestle Octoliner",
        link: "/shop/linienlaser",
    },
    {
        name: "Nestle Octoliner G",
        link: "/shop/linienlaser",
    },
];

export default function Page() {
    return <Products products={products} />;
}
