import Products from "@/app/shop/(components)/products.jsx";

import products from "@/app/shop/baulaser/products.json";

export const metadata = {
    title: "Baulaser",
};

export default function Page() {
    return <Products products={products} />;
}
