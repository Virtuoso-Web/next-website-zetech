import Products from "@/app/(pages)/shop/(components)/products.jsx";

import data from "@/app/(pages)/shop/nivelliere/data.json";

export const metadata = {
    title: "Nivelliere",
};

export default function Page() {
    return <Products data={data} />;
}
