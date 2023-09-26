import Products from "@/app/(pages)/shop/(components)/products.jsx";

import products from "@/app/(pages)/shop/totalstationen/products.json";

export const metadata = {
    title: "Totalstationen",
};

export default function Page() {
    return <Products products={products} />;
}
