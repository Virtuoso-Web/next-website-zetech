import Products from "@/app/(pages)/shop/(components)/products.jsx";

import data from "@/app/(pages)/shop/empfaenger/data.json";

export const metadata = {
    title: "Empfänger",
};

export default function Page() {
    return <Products data={data} />;
}
