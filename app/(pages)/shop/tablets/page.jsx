import Products from "@/app/(pages)/shop/(components)/products.jsx";

import products from "@/app/(pages)/shop/tablets/products.json";

export const metadata = {
    title: "Tablets",
};

export default function Page() {
    return <Products products={products} />;
}
