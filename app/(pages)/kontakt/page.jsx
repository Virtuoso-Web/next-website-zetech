import "@/app/(pages)/kontakt/style.scss";

import team from "@/app/(pages)/kontakt/team.json";

import Link from "next/link";

import { BsTelephoneFill } from "react-icons/bs";
import { BsEnvelopeFill } from "react-icons/bs";
import { BsGeoFill } from "react-icons/bs";

export const metadata = {
    title: "Kontakt",
};

export default function Page() {
    return (
        <main className="kontakt-page">
            <section className="intro-section">
                <div className="section-container">
                    <div className="flex-grid">
                        <h1 className="title">Kontakt</h1>
                        <p className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut vel tenetur molestias dolorum earum rerum odit reiciendis maiores ex unde voluptatibus, suscipit laboriosam rem nobis fugit! Hic similique dicta ducimus.</p>
                    </div>
                </div>
            </section>

            <section className="team-section">
                <div className="section-container">
                    <div className="flex-grid">
                        <h2 className="title">
                            IHRE
                            <br />
                            <span className="gradient">ANSPRECHPARTNER</span>
                        </h2>
                        <div className="departments-container">
                            {team.map((department, index) => (
                                <div className="sub-flex-grid" key={index}>
                                    <h3 className="title">{department.department}</h3>
                                    <div className="partner-flex-grid">
                                        {department.members.map((member, index) => (
                                            <div className="partner-box" key={index}>
                                                <div className="image-holder"></div>
                                                <div className="box-group">
                                                    <h3 className="name">{member.name}</h3>
                                                    <div className="contact-group">
                                                        <div className="icon-holder">
                                                            <BsTelephoneFill className="icon" />
                                                        </div>
                                                        <Link href={"/kontakt"} className="contact-link">
                                                            {member.phone}
                                                        </Link>
                                                    </div>
                                                    <div className="contact-group">
                                                        <div className="icon-holder">
                                                            <BsEnvelopeFill className="icon" />
                                                        </div>
                                                        <Link href={"/kontakt"} className="contact-link">
                                                            {member.mail}
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
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
                            <h2 className="title">
                                Sie haben Fragen?
                                <br />
                                <span className="gradient">Wir haben Antworten.</span>
                            </h2>
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
                                    <div className="icon-holder">
                                        <BsGeoFill className="icon" />
                                    </div>
                                    <div className="box-group">
                                        <p>Luzernerstrasse 88A</p>
                                        <p>6014 Luzern</p>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="icon-holder">
                                        <BsTelephoneFill className="icon" />
                                    </div>
                                    <Link href={"/kontakt"} className="contact-link">
                                        +41 41 250 32 02
                                    </Link>
                                </div>
                                <div className="box">
                                    <div className="icon-holder">
                                        <BsEnvelopeFill className="icon" />
                                    </div>
                                    <Link href={"/kontakt"} className="contact-link">
                                        info@zetech.ch
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="sub-flex-grid-3">
                            <div className="map-box">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2718.442377502408!2d8.268957613173532!3d47.05117187102395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478fe4b4ce2a7e75%3A0xb7f3a29db42be61a!2sZetech%20Baumesstechnik%20GmbH!5e0!3m2!1sen!2sch!4v1689543824843!5m2!1sen!2sch" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Location" className="map"></iframe>
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
