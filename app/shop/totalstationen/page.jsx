import "@/app/shop/totalstationen/style.scss";

import Navigation from "@/app/shop/(components)/navigation.jsx";
import Products from "@/app/shop/(components)/products.jsx";

const products = [
    {
        name: "Leica Totalstationen",
        link: "/shop/totalstationen/leica-totalstationen",
    },
    {
        name: "Leica iCON Builder",
        link: "/shop/totalstationen",
    },
    {
        name: "Leica AP20",
        link: "/shop/totalstationen",
    },
];

export default function Page() {
    return (
        <main className="shop-totalstationen-page">
            <section className="intro-section">
                <div className="section-container">
                    <div className="flex-grid">
                        <h1 className="title">Finden Sie das passende Produkt</h1>
                        <p className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut vel tenetur molestias dolorum earum rerum odit reiciendis maiores ex unde voluptatibus, suscipit laboriosam rem nobis fugit! Hic similique dicta ducimus.</p>
                    </div>
                </div>
            </section>

            <section className="catalogue-section">
                <div className="section-container">
                    <div className="flex-grid">
                        <Navigation />
                        <Products products={products} />
                    </div>
                </div>
            </section>
        </main>
    );
}
