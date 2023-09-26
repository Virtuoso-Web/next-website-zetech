import Products from "@/app/(pages)/shop/(components)/products.jsx";

import products from "@/app/(pages)/shop/kanalbaulaser/products.json";

export const metadata = {
    title: "Kanalbaulaser",
};

export default function Page() {
    return <Products products={products} />;
}
