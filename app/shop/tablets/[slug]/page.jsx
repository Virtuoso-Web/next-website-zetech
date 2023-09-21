import Product from "@/app/shop/(components)/product.jsx";

import products from "@/app/shop/tablets/products.json";

import { notFound } from "next/navigation";

export default function Page({ params }) {
    const product = products.find((product) => product.slug === params.slug);

    if (!product) notFound();

    return <Product product={product} />;
}
