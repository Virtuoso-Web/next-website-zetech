import Link from "next/link";

import { BsPersonFill } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import { BsEnvelopeFill } from "react-icons/bs";
import { BsGeoFill } from "react-icons/bs";

import "@/app/kontakt/style.scss";

const partners = [
    {
        name: "Alfred Zenklusen",
        area: "Beratung - Verkauf - Support",
    },
    {
        name: "Adrian Zenklusen",
        area: "Beratung - Verkauf - Support",
    },
    {
        name: "Claudio Zenklusen",
        area: "Service - Support",
    },
    {
        name: "Ivan Kafadar",
        area: "Service - Support",
    },
];

export const metadata = {
    title: "Kontakt",
};

export default function Page() {
    return (
        <main className="kontakt-page">
            <section className="intro-section">
                <div className="section-container">
                    <div className="flex-grid">
                        <h1 className="title">Zu jeder Zeit für Sie zur Stelle</h1>
                        <p className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem consectetur maiores incidunt, quisquam pariatur fugit, cumque minima nesciunt odit numquam et voluptatum molestiae dolorem magni quas ad hic, sapiente quae facilis voluptates tempore! A aut perferendis ut, quo nam culpa molestias maxime, accusantium veritatis architecto dolore iste veniam fugit officiis.</p>
                    </div>
                </div>
            </section>

            <section className="team-section">
                <div className="section-container">
                    <div className="flex-grid">
                        <div className="title-box">
                            <h2 className="title">Ihre Partner</h2>
                        </div>
                        <div className="sub-flex-grid">
                            {partners.map((partner, index) => (
                                <div className="partner-box" key={index}>
                                    <div className="image-holder"></div>
                                    <div className="box-group">
                                        <h3 className="name">{partner.name}</h3>
                                        <div className="area-group">
                                            <BsPersonFill />
                                            <p className="area">{partner.area}</p>
                                        </div>
                                        <div className="contact-group">
                                            <BsTelephoneFill />
                                            <Link href={"/"} className="contact-link">
                                                +41 79 123 45 67
                                            </Link>
                                        </div>
                                        <div className="contact-group">
                                            <BsEnvelopeFill />
                                            <Link href={"/"} className="contact-link">
                                                name@zetech.ch
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="form-section">
                <div className="section-container">
                    <div className="flex-grid">
                        <div className="title-box">
                            <h2 className="title">Sie haben Fragen? Wir haben Antworten.</h2>
                        </div>
                        <div className="sub-flex-grid-1">
                            <h3 className="title">Öffnungszeiten</h3>
                            <h4 className="open-days">Montag - Freitag</h4>
                            <div className="open-hours-box">
                                <p className="morning-hours">07.30 Uhr {"-"} 12.00 Uhr</p>
                                <p className="afternoon-hours">13.00 Uhr {"-"} 17.00 Uhr</p>
                            </div>
                        </div>
                        <div className="sub-flex-grid-2">
                            <div className="box-container">
                                <div className="box">
                                    <BsGeoFill className="icon" />
                                    <div className="box-group">
                                        <p>Luzernerstrasse 88A</p>
                                        <p>6014 Luzern</p>
                                    </div>
                                </div>
                                <div className="box">
                                    <BsTelephoneFill className="icon" />
                                    <Link href={"/"} className="contact-link">
                                        +41 41 250 32 02
                                    </Link>
                                </div>
                                <div className="box">
                                    <BsEnvelopeFill className="icon" />
                                    <Link href={"/"} className="contact-link">
                                        zetech@gmx.ch
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="sub-flex-grid-3">
                            <div className="map-box">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2718.442377502408!2d8.268957613173532!3d47.05117187102395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478fe4b4ce2a7e75%3A0xb7f3a29db42be61a!2sZetech%20Baumesstechnik%20GmbH!5e0!3m2!1sen!2sch!4v1689543824843!5m2!1sen!2sch" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="map"></iframe>
                            </div>
                            <div className="form-box">
                                <form action="" className="form">
                                    <div className="input-group">
                                        <label htmlFor="firma" className="input-label">
                                            Firma:
                                        </label>
                                        <input type="text" name="firma" id="firma" className="form-input" />
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="vorname" className="input-label">
                                            Vorname:
                                        </label>
                                        <input type="text" name="vorname" id="vorname" className="form-input" />
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="nachname" className="input-label">
                                            Nachname:
                                        </label>
                                        <input type="text" name="nachname" id="nachname" className="form-input" />
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="telefon" className="input-label">
                                            Telefon:
                                        </label>
                                        <input type="text" name="telefon" id="telefon" className="form-input" />
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="mail" className="input-label">
                                            E-Mail:
                                        </label>
                                        <input type="text" name="mail" id="mail" className="form-input" />
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="betreff" className="input-label">
                                            Betreff:
                                        </label>
                                        <input type="text" name="betreff" id="betreff" className="form-input" />
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="nachricht" className="input-label">
                                            Nachricht:
                                        </label>
                                        <textarea name="nachricht" id="nachricht" className="form-input-text"></textarea>
                                    </div>
                                    <div className="button-group">
                                        <button type="button" className="send-button">
                                            SENDEN
                                        </button>
                                        <button type="reset" className="reset-button">
                                            LÖSCHEN
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
