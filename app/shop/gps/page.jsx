import Products from "@/app/shop/(components)/products.jsx";

import products from "@/app/shop/gps/products.json";

export const metadata = {
    title: "GPS",
};

export default function Page() {
    return <Products products={products} />;
}
