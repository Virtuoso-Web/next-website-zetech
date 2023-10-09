import Products from "@/app/(pages)/shop/(components)/products.jsx";

import data from "@/app/(pages)/shop/data.json";

export const metadata = {
    title: "Shop",
};

export default function Page() {
    return <Products data={data} />;
}
