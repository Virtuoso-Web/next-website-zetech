import Products from "@/app/shop/(components)/products.jsx";

import products from "@/app/shop/zubehoer-totalstationen/products.json";

export default function Page() {
    return <Products products={products} />;
}
