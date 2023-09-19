import Product from "@/app/shop/(components)/product.jsx";

import products from "@/app/shop/nivelliere/products.json";

export default function Page({ params }) {
    const product = products.find((product) => product.slug === params.slug);

    return <Product product={product} />;
}
