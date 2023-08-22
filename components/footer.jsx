import "@/components/footer.scss";

import Link from "next/link";

import { BiLogoInstagramAlt } from "react-icons/bi";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BsEnvelopeFill } from "react-icons/bs";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex-grid">
                    <nav className="footer-navigation">
                        <div className="nav-box">
                            <Link href={"/dienstleistungen"} prefetch={false} className="header-link">
                                Dienstleistungen / Datenaufbereitung
                            </Link>
                            <div className="sub-links-container">
                                <Link href={"/dienstleistungen"} prefetch={false} className="sub-link">
                                    Datenaufbereitung
                                </Link>
                                <Link href={"/dienstleistungen"} prefetch={false} className="sub-link">
                                    Bestandaufnahme
                                </Link>
                                <Link href={"/dienstleistungen"} prefetch={false} className="sub-link">
                                    Massenermittlung / Aufnahme
                                </Link>
                                <Link href={"/dienstleistungen"} prefetch={false} className="sub-link">
                                    Schulungen
                                </Link>
                            </div>
                        </div>
                        <div className="nav-box">
                            <Link href={"/"} prefetch={false} className="header-link">
                                Service / Werkstatt
                            </Link>
                            <div className="sub-links-container">
                                <Link href={"/"} prefetch={false} className="sub-link">
                                    Service
                                </Link>
                                <Link href={"/"} prefetch={false} className="sub-link">
                                    Werkstatt
                                </Link>
                            </div>
                        </div>
                        <div className="nav-box">
                            <Link href={"/shop"} prefetch={false} className="header-link">
                                Shop
                            </Link>
                            <div className="sub-links-container">
                                <Link href={"/shop/"} prefetch={false} className="sub-link">
                                    Totalstationen
                                </Link>
                                <Link href={"/shop/"} prefetch={false} className="sub-link">
                                    GPS
                                </Link>
                                <Link href={"/shop/"} prefetch={false} className="sub-link">
                                    Tablets
                                </Link>
                                <Link href={"/shop/"} prefetch={false} className="sub-link">
                                    Baulaser
                                </Link>
                                <Link href={"/shop/"} prefetch={false} className="sub-link">
                                    Kanalbaulaser
                                </Link>
                                <Link href={"/shop/"} prefetch={false} className="sub-link">
                                    Linienlaser
                                </Link>
                                <Link href={"/shop/"} prefetch={false} className="sub-link">
                                    Distanzmessgeräte
                                </Link>
                                <Link href={"/shop/"} prefetch={false} className="sub-link">
                                    Empfänger
                                </Link>
                                <Link href={"/shop/"} prefetch={false} className="sub-link">
                                    Nivelliere
                                </Link>
                                <Link href={"/shop/"} prefetch={false} className="sub-link">
                                    Stative
                                </Link>
                                <Link href={"/shop/"} prefetch={false} className="sub-link">
                                    Zubehör Totalstationen
                                </Link>
                                <Link href={"/shop/"} prefetch={false} className="sub-link">
                                    Zubehör GPS
                                </Link>
                            </div>
                        </div>
                        <div className="nav-box">
                            <Link href={"/downloads"} prefetch={false} className="header-link">
                                Downloads
                            </Link>
                            <div className="sub-links-container">
                                <Link href={"/downloads"} prefetch={false} className="sub-link">
                                    TeamViewer
                                </Link>
                            </div>
                        </div>
                        <div className="nav-box">
                            <Link href={"/kontakt"} prefetch={false} className="header-link">
                                Kontakt
                            </Link>
                            <div className="sub-links-container">
                                <p className="sub-text">Luzernerstrasse 88A</p>
                                <p className="sub-text">6014 Luzern</p>
                                <Link href={"/"} prefetch={false} className="sub-link">
                                    +41 41 250 32 02
                                </Link>
                                <Link href={"/"} prefetch={false} className="sub-link">
                                    zetech@gmx.ch
                                </Link>
                            </div>
                        </div>
                    </nav>
                    <div className="group-box">
                        <div className="open-hours-box">
                            <p className="title">Öffnungszeiten</p>
                            <p className="open-days">Montag {"-"} Freitag</p>
                            <div className="hours-box">
                                <p className="morning-hours">07.30 Uhr {"-"} 12.00 Uhr</p>
                                <p className="afternoon-hours">13.00 Uhr {"-"} 17.00 Uhr</p>
                            </div>
                        </div>
                        <div className="socials-box">
                            <Link href={"/"} prefetch={false} className="social-link">
                                <BiLogoInstagramAlt />
                            </Link>
                            <Link href={"/"} prefetch={false} className="social-link">
                                <BiLogoFacebookCircle />
                            </Link>
                            <Link href={"/"} prefetch={false} className="social-link">
                                <BsEnvelopeFill />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
