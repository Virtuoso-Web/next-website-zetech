import Products from "@/app/(pages)/shop/(components)/products.jsx";

import products from "@/app/(pages)/shop/linienlaser/products.json";

export const metadata = {
    title: "Linienlaser",
};

export default function Page() {
    return <Products products={products} />;
}
