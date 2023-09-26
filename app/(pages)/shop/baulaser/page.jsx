import Products from "@/app/(pages)/shop/(components)/products.jsx";

import products from "@/app/(pages)/shop/baulaser/products.json";

export const metadata = {
    title: "Baulaser",
};

export default function Page() {
    return <Products products={products} />;
}
