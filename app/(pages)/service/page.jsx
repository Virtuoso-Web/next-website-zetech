import "@/app/(pages)/service/style.scss";

export const metadata = {
    title: "Service",
};

export default function Page() {
    return (
        <main className="service-page">
            <section className="intro-section">
                <div className="section-container">
                    <div className="flex-grid">
                        <h1 className="title">Service</h1>
                        <p className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut vel tenetur molestias dolorum earum rerum odit reiciendis maiores ex unde voluptatibus, suscipit laboriosam rem nobis fugit! Hic similique dicta ducimus.</p>
                    </div>
                </div>
            </section>

            <section className="workshop-about-section">
                <div className="section-container">
                    <h2 className="title">
                        ZERTIFIZIERTE
                        <br />
                        <span className="gradient">SERVICE WERKSTATT</span>
                    </h2>
                    <div className="image-holder">
                        <img src="/images/service/image-1.webp" alt="Service Werkstatt" loading="lazy" className="image" />
                    </div>
                    <div className="flex-grid">
                        <div className="image-box">
                            <div className="image-holder">
                                <img src="/images/service/image-2.webp" alt="Service Werkstatt" loading="lazy" className="image" />
                            </div>
                        </div>
                        <div className="text-box">
                            <p className="text">
                                Unsere Servicewerkstatt wird durch die Leica Geosystems AG strengen Richtlinien unterzogen und regelmässig kontrolliert. Technikerschulungen, Qualitätsmanagement, Referenzgeräte, Messwerkzeug und Werkstatteinrichtung unterliegen diesen Vorgaben, damit Ihre Geräte fachmännisch und präzise repariert und gewartet werden können.
                                <br />
                                <br />
                                Unsere <span className="bold">Servicewerkstatt und Servicetechniker</span> sind auf dem neusten Stand und bestens technisch ausgebildet.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="workshop-service-section">
                <div className="section-container">
                    <div className="flex-grid">
                        <div className="list-box">
                            <h3 className="title">Unsere Werkstatt bietet Ihnen folgendes:</h3>
                            <ul className="list">
                                <li className="list-item">
                                    <span className="point">{"•"}</span>Reparaturen aller gängigen Marken
                                </li>
                                <li className="list-item">
                                    <span className="point">{"•"}</span>Kalibrierungen mit Zertifikat
                                </li>
                                <li className="list-item">
                                    <span className="point">{"•"}</span>Jahreskontrollen Ihrer Messgeräte
                                </li>
                            </ul>
                        </div>
                        <div className="image-box">
                            <div className="image-holder">
                                <img src="/images/service/image-3.webp" alt="Service Werkstatt" loading="lazy" className="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="workshop-service-section">
                <div className="section-container">
                    <div className="flex-grid reversed">
                        <div className="image-box">
                            <div className="image-holder">
                                <img src="/images/service/image-4.webp" alt="Service Werkstatt" loading="lazy" className="image" />
                            </div>
                        </div>
                        <div className="list-box">
                            <h3 className="title">Wir sind Ihre Anlaufstelle für folgende Geräte:</h3>
                            <ul className="list">
                                <li className="list-item">
                                    <span className="point">{"•"}</span>Leica iCON iCR60/65 Robotik-Totalstation
                                </li>
                                <li className="list-item">
                                    <span className="point">{"•"}</span>Leica iCON iCR50/55 Robotik-Totalstation
                                </li>
                                <li className="list-item">
                                    <span className="point">{"•"}</span>Leica iCON iCR70 Robotik-Totalstation
                                </li>
                                <li className="list-item">
                                    <span className="point">{"•"}</span>Leica iCON iCR80 Robotik-Totalstation
                                </li>
                                <li className="list-item">
                                    <span className="point">{"•"}</span>Leica Builder / Tachymeter
                                </li>
                                <li className="list-item">
                                    <span className="point">{"•"}</span>Neigungslaser
                                </li>
                                <li className="list-item">
                                    <span className="point">{"•"}</span>Horizontal-Vertikallaser
                                </li>
                                <li className="list-item">
                                    <span className="point">{"•"}</span>Horizontallaser
                                </li>
                                <li className="list-item">
                                    <span className="point">{"•"}</span>Innenausbaulaser
                                </li>
                                <li className="list-item">
                                    <span className="point">{"•"}</span>Linienlaser
                                </li>
                                <li className="list-item">
                                    <span className="point">{"•"}</span>Kanalbaulaser
                                </li>
                                <li className="list-item">
                                    <span className="point">{"•"}</span>Nivelliere
                                </li>
                                <li className="list-item">
                                    <span className="point">{"•"}</span>Distanzmessgeräte
                                </li>
                                <li className="list-item">
                                    <span className="point">{"•"}</span>Empfänger
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="workshop-info-section">
                <div className="section-container">
                    <p className="text">Für einen unkomplizierten Service- und Reparaturablauf fragen Sie uns nach unserem Abholservice und nach einem Mietgerät.</p>
                </div>
            </section>
        </main>
    );
}
