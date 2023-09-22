import Products from "@/app/shop/(components)/products.jsx";

import products from "@/app/shop/kanalbaulaser/products.json";

export const metadata = {
    title: "Kanalbaulaser",
};

export default function Page() {
    return <Products products={products} />;
}
