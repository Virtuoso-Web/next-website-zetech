import Products from "@/app/(pages)/shop/(components)/products.jsx";

import products from "@/app/(pages)/shop/empfaenger/products.json";

export const metadata = {
    title: "Empfänger",
};

export default function Page() {
    return <Products products={products} />;
}
