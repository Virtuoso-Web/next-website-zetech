import "@/app/service/style.scss";

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
                        <p className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem consectetur maiores incidunt, quisquam pariatur fugit, cumque minima nesciunt odit numquam et voluptatum molestiae dolorem magni quas ad hic, sapiente quae facilis voluptates tempore! A aut perferendis ut, quo nam culpa molestias maxime, accusantium veritatis architecto dolore iste veniam fugit officiis.</p>
                    </div>
                </div>
            </section>

            <section className="workshop-about-section">
                <div className="section-container">
                    <h2 className="title">ZERTIFIZIERTE SERVICE WERKSTATT</h2>
                    <div className="image-holder"></div>
                    <div className="flex-grid">
                        <div className="image-box">
                            <div className="image-holder"></div>
                        </div>
                        <div className="text-box">
                            <p className="text">
                                Unsere Servicewerkstatt wird durch die Leica Geosystems AG strengen Richtlinien unterzogen und regelmässig kontrolliert. Technikerschulungen, Qualitätsmanagement, Referenzgeräte, Messwerkzeug und Werkstatteinrichtung unterliegen diesen Vorgaben, damit Ihre Geräte fachmännisch und präzise repariert und gewartet werden können.
                                <br></br>
                                <br></br>
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
                            <div className="list-group">
                                <h3 className="title">Unsere Werkstatt bietet Ihnen folgendes:</h3>
                                <ul className="list">
                                    <li className="list-item">
                                        <span className="arrow">{">"}</span>Reparaturen aller gängigen Marken
                                    </li>
                                    <li className="list-item">
                                        <span className="arrow">{">"}</span>Kalibrierungen mit Zertifikat
                                    </li>
                                    <li className="list-item">
                                        <span className="arrow">{">"}</span>Jahreskontrollen Ihrer Messgeräte
                                    </li>
                                </ul>
                            </div>
                            <div className="list-group">
                                <h3 className="title">Wir sind Ihre Anlaufstelle für folgende Geräte:</h3>
                                <ul className="list">
                                    <li className="list-item">
                                        <span className="arrow">{">"}</span>Leica iCON iCR60/65 Robotik-Totalstation
                                    </li>
                                    <li className="list-item">
                                        <span className="arrow">{">"}</span>Leica iCON iCR50/55 Robotik-Totalstation
                                    </li>
                                    <li className="list-item">
                                        <span className="arrow">{">"}</span>Leica iCON iCR70 Robotik-Totalstation
                                    </li>
                                    <li className="list-item">
                                        <span className="arrow">{">"}</span>Leica iCON iCR80 Robotik-Totalstation
                                    </li>
                                    <li className="list-item">
                                        <span className="arrow">{">"}</span>Leica Builder / Tachymeter
                                    </li>
                                    <li className="list-item">
                                        <span className="arrow">{">"}</span>Neigungslaser
                                    </li>
                                    <li className="list-item">
                                        <span className="arrow">{">"}</span>Horizontal-Vertikallaser
                                    </li>
                                    <li className="list-item">
                                        <span className="arrow">{">"}</span>Horizontallaser
                                    </li>
                                    <li className="list-item">
                                        <span className="arrow">{">"}</span>Innenausbaulaser
                                    </li>
                                    <li className="list-item">
                                        <span className="arrow">{">"}</span>Linienlaser
                                    </li>
                                    <li className="list-item">
                                        <span className="arrow">{">"}</span>Kanalbaulaser
                                    </li>
                                    <li className="list-item">
                                        <span className="arrow">{">"}</span>Nivelliere
                                    </li>
                                    <li className="list-item">
                                        <span className="arrow">{">"}</span>Distanzmessgeräte
                                    </li>
                                    <li className="list-item">
                                        <span className="arrow">{">"}</span>Empfänger
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="image-box">
                            <div className="image-holder"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="workshop-info-section">
                <div className="section-container">
                    <div className="flex-grid">
                        <div className="price-box">
                            <ul className="price-list">
                                <li className="price-item">Stundenansatz Laser/Nivelliere:</li>
                                <li className="price-item">106.- / H</li>
                            </ul>
                            <ul className="price-list">
                                <li className="price-item">Stundenansatz Tachymeter/Builder:</li>
                                <li className="price-item">150.- / H</li>
                            </ul>
                        </div>
                        <div className="text-box">
                            <p className="text">Für einen unkomplizierten Service- und Reparaturablauf fragen Sie uns nach unserem Abholservice und nach einem Mietgerät.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}