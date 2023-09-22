import Product from "@/app/shop/(components)/product.jsx";

import products from "@/app/shop/empfaenger/products.json";

import { notFound } from "next/navigation";

export function generateMetadata({ params }) {
    const product = products.find((product) => product.slug === params.slug);

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
    const product = products.find((product) => product.slug === params.slug);

    if (!product) notFound();

    return <Product product={product} />;
}
