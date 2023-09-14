import Products from "@/app/shop/(components)/products.jsx";

import products from "@/app/shop/totalstationen/products.json";

export default function Page() {
    return <Products products={products} />;
}
