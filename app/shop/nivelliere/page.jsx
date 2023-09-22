import Products from "@/app/shop/(components)/products.jsx";

import products from "@/app/shop/nivelliere/products.json";

export const metadata = {
    title: "Nivelliere",
};

export default function Page() {
    return <Products products={products} />;
}
