import Products from "@/app/shop/(components)/products.jsx";

import products from "@/app/shop/tablets/products.json";

export const metadata = {
    title: "Tablets",
};

export default function Page() {
    return <Products products={products} />;
}
