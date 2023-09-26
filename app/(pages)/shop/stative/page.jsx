import Products from "@/app/(pages)/shop/(components)/products.jsx";

import products from "@/app/(pages)/shop/stative/products.json";

export default function Page() {
    return <Products products={products} />;
}
