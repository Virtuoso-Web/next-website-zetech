import "@/app/shop/style.scss";

import Navigation from "@/app/shop/(components)/navigation.jsx";

export const metadata = {
    title: "Shop",
};

export default function Layout({ children }) {
    return (
        <main className="shop-page">
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
                        {children}
                    </div>
                </div>
            </section>
        </main>
    );
}
