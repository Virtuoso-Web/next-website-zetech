import Products from "@/app/(pages)/shop/(components)/products.jsx";

import data from "@/app/(pages)/shop/distanzmessgeraete/data.json";

export const metadata = {
    title: "Distanzmessgeräte",
};

export default function Page() {
    return <Products data={data} />;
}
