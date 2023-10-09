import Products from "@/app/(pages)/shop/(components)/products.jsx";

import data from "@/app/(pages)/shop/zubehoer-gps/data.json";

export const metadata = {
    title: "Zubehör GPS",
};

export default function Page() {
    return <Products data={data} />;
}
