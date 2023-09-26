import Products from "@/app/(pages)/shop/(components)/products.jsx";

import products from "@/app/(pages)/shop/nivelliere/products.json";

export const metadata = {
    title: "Nivelliere",
};

export default function Page() {
    return <Products products={products} />;
}
