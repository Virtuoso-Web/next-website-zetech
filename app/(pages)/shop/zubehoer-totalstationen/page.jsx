import Products from "@/app/(pages)/shop/(components)/products.jsx";

import products from "@/app/(pages)/shop/zubehoer-totalstationen/products.json";

export default function Page() {
    return <Products products={products} />;
}
