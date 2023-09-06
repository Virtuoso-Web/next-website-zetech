import Product from "@/app/shop/(components)/product.jsx";

const product = {
    name: "Leica AP20 AutoPole",
    images: [],
};

export default function Page() {
    return <Product product={product} />;
}
