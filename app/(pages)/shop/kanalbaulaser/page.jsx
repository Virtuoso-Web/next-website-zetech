import Products from "@/app/(pages)/shop/(components)/products.jsx";

import data from "@/app/(pages)/shop/kanalbaulaser/data.json";

export const metadata = {
    title: "Kanalbaulaser",
};

export default function Page() {
    return <Products data={data} />;
}
