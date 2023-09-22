import Products from "@/app/shop/(components)/products.jsx";

import products from "@/app/shop/linienlaser/products.json";

export const metadata = {
    title: "Linienlaser",
};

export default function Page() {
    return <Products products={products} />;
}
