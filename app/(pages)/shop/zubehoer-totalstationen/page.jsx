import Products from "@/app/(pages)/shop/(components)/products.jsx";

import data from "@/app/(pages)/shop/zubehoer-totalstationen/data.json";

export const metadata = {
    title: "Zubehör Totalstationen",
};

export default function Page() {
    return <Products data={data} />;
}
