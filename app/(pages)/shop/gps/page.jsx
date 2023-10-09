import Products from "@/app/(pages)/shop/(components)/products.jsx";

import data from "@/app/(pages)/shop/gps/data.json";

export const metadata = {
    title: "GPS",
};

export default function Page() {
    return <Products data={data} />;
}
