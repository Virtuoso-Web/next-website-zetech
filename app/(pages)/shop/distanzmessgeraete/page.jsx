import Products from "@/app/(pages)/shop/(components)/products.jsx";

import products from "@/app/(pages)/shop/distanzmessgeraete/products.json";

export const metadata = {
    title: "Distanzmessgeräte",
};

export default function Page() {
    return <Products products={products} />;
}
