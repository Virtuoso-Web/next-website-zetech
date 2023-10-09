import Products from "@/app/(pages)/shop/(components)/products.jsx";

import data from "@/app/(pages)/shop/baulaser/data.json";

export const metadata = {
    title: "Baulaser",
};

export default function Page() {
    return <Products data={data} />;
}
