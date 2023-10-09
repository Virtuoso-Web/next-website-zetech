import Product from "@/app/(pages)/shop/(components)/product.jsx";

import data from "@/app/(pages)/shop/empfaenger/data.json";

import { notFound } from "next/navigation";

export function generateMetadata({ params }) {
    const product = data.products.find((product) => product.slug === params.slug);

    if (!product) {
        return {
            title: "404",
        };
    } else {
        return {
            title: product.name,
        };
    }
}

export default function Page({ params }) {
    const product = data.products.find((product) => product.slug === params.slug);

    if (!product) notFound();

    return <Product product={product} />;
}
