import "@/app/(pages)/downloads/style.scss";

import Link from "next/link";

import { SiTeamviewer } from "react-icons/si";

export const metadata = {
    title: "Downloads",
};

export default function Page() {
    return (
        <main className="downloads-page">
            <section className="intro-section">
                <div className="section-container">
                    <div className="flex-grid">
                        <h1 className="title">Downloads</h1>
                        <p className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut vel tenetur molestias dolorum earum rerum odit reiciendis maiores ex unde voluptatibus, suscipit laboriosam rem nobis fugit! Hic similique dicta ducimus.</p>
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
                            <Link href={"https://www.teamviewer.com/de/products/remote/get-started/"} target="_blank" className="box">
                                <div className="logo-holder">
                                    <SiTeamviewer />
                                </div>
                                <div className="description">
                                    <h3 className="name">TeamViewer</h3>
                                    <p className="os">Web-Anwendung</p>
                                </div>
                            </Link>
                            <Link href={"https://www.teamviewer.com/de/download/windows/"} target="_blank" className="box">
                                <div className="logo-holder">
                                    <SiTeamviewer />
                                </div>
                                <div className="description">
                                    <h3 className="name">TeamViewer</h3>
                                    <p className="os">Windows</p>
                                </div>
                            </Link>
                            <Link href={"https://www.teamviewer.com/de/download/macos/"} target="_blank" className="box">
                                <div className="logo-holder">
                                    <SiTeamviewer />
                                </div>
                                <div className="description">
                                    <h3 className="name">TeamViewer</h3>
                                    <p className="os">MacOS</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
