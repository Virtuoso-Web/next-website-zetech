import "@/app/not-found.scss";

import Link from "next/link";

export default function NotFound() {
    return (
        <main className="not-found-page">
            <section className="not-found-section">
                <div className="section-container">
                    <h1 className="title">
                        <span className="number">404</span>
                        <br></br>Diese Seite konnte nicht gefunden werden.
                    </h1>
                    <Link href={"/"} className="link">
                        Zur Startseite
                    </Link>
                </div>
            </section>
        </main>
    );
}
