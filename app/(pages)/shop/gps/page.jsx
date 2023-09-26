import Products from "@/app/(pages)/shop/(components)/products.jsx";

import products from "@/app/(pages)/shop/gps/products.json";

export const metadata = {
    title: "GPS",
};

export default function Page() {
    return <Products products={products} />;
}
