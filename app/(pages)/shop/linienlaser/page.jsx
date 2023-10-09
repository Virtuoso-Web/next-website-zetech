import Products from "@/app/(pages)/shop/(components)/products.jsx";

import data from "@/app/(pages)/shop/linienlaser/data.json";

export const metadata = {
    title: "Linienlaser",
};

export default function Page() {
    return <Products data={data} />;
}
