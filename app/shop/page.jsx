import Products from "@/app/shop/(components)/products.jsx";

import products from "@/app/shop/products.json";

export const metadata = {
    title: "Shop",
};

export default function Page() {
    return <Products products={products} />;
}
