import Header from "@/components/header.jsx";
import Footer from "@/components/footer.jsx";

import "@/app/globals.scss";

export const metadata = {
    title: "ZETECH GmbH",
    description: "Beratung, Miete, Verkauf und Service von Baumesstechnik.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
