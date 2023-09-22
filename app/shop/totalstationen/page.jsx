import Products from "@/app/shop/(components)/products.jsx";

import products from "@/app/shop/totalstationen/products.json";

export const metadata = {
    title: "Totalstationen",
};

export default function Page() {
    return <Products products={products} />;
}
