import Products from "@/app/(pages)/shop/(components)/products.jsx";

import products from "@/app/(pages)/shop/products.json";

export const metadata = {
    title: "Shop",
};

export default function Page() {
    return <Products products={products} />;
}
