import Products from "@/app/(pages)/shop/(components)/products.jsx";

import data from "@/app/(pages)/shop/stative/data.json";

export const metadata = {
    title: "Stative",
};

export default function Page() {
    return <Products data={data} />;
}
