import Products from "@/app/shop/(components)/products.jsx";

import products from "@/app/shop/distanzmessgeraete/products.json";

export const metadata = {
    title: "Distanzmessgeräte",
};

export default function Page() {
    return <Products products={products} />;
}
