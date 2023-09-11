import Link from "next/link";

import { SiTeamviewer } from "react-icons/si";

import "@/app/downloads/style.scss";

export const metadata = {
    title: "Downloads",
};

export default function Page() {
    return (
        <main className="downloads-page">
            <section className="intro-section">
                <div className="section-container">
                    <div className="flex-grid">
                        <h1 className="title">Praktische Downloads</h1>
                        <p className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem consectetur maiores incidunt, quisquam pariatur fugit, cumque minima nesciunt odit numquam et voluptatum molestiae dolorem magni quas ad hic, sapiente quae facilis voluptates tempore! A aut perferendis ut, quo nam culpa molestias maxime, accusantium veritatis architecto dolore iste veniam fugit officiis.</p>
                    </div>
                </div>
            </section>

            <section className="teamviewer-section">
                <div className="section-container">
                    <div className="flex-grid">
                        <div className="title-box">
                            <h2 className="title">TeamViewer</h2>
                        </div>
                        <div className="sub-flex-grid">
                            <Link href={"/"} className="box">
                                <div className="logo-holder">
                                    <SiTeamviewer />
                                </div>
                                <div className="description">
                                    <h3 className="name">TeamViewer</h3>
                                    <p className="os">Web-Anwendung</p>
                                </div>
                            </Link>
                            <Link href={"/"} className="box">
                                <div className="logo-holder">
                                    <SiTeamviewer />
                                </div>
                                <div className="description">
                                    <h3 className="name">TeamViewer</h3>
                                    <p className="os">Windows</p>
                                </div>
                            </Link>
                            <Link href={"/"} className="box">
                                <div className="logo-holder">
                                    <SiTeamviewer />
                                </div>
                                <div className="description">
                                    <h3 className="name">TeamViewer</h3>
                                    <p className="os">Mac</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
