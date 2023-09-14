import Products from "@/app/shop/(components)/products.jsx";

import products from "@/app/shop/stative/products.json";

export default function Page() {
    return <Products products={products} />;
}
