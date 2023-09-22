import Products from "@/app/shop/(components)/products.jsx";

import products from "@/app/shop/empfaenger/products.json";

export const metadata = {
    title: "Empfänger",
};

export default function Page() {
    return <Products products={products} />;
}
