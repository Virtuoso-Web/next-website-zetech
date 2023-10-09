import Products from "@/app/(pages)/shop/(components)/products.jsx";

import data from "@/app/(pages)/shop/tablets/data.json";

export const metadata = {
    title: "Tablets",
};

export default function Page() {
    return <Products data={data} />;
}
