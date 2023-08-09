import Link from "next/link";

import { BiLogoInstagramAlt } from "react-icons/bi";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BsEnvelopeFill } from "react-icons/bs";

import "@/components/footer-style.scss";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex-grid">
                    <nav className="footer-navigation">
                        <div className="nav-box">
                            <Link href={"/dienstleistungen"} prefetch={false} className="header-link">
                                Dienstleistungen
                            </Link>
                            <div className="sub-links-container">
                                <Link href={"/dienstleistungen"} prefetch={false} className="sub-link">
                                    Beratung
                                </Link>
                                <Link href={"/dienstleistungen/#miete"} prefetch={false} className="sub-link">
                                    Miete
                                </Link>
                                <Link href={"/dienstleistungen/#verkauf"} prefetch={false} className="sub-link">
                                    Verkauf
                                </Link>
                                <Link href={"/dienstleistungen/#service"} prefetch={false} className="sub-link">
                                    Service
                                </Link>
                            </div>
                        </div>
                        <div className="nav-box">
                            <Link href={"/shop"} prefetch={false} className="header-link">
                                Shop
                            </Link>
                            <div className="sub-links-container">
                                <Link href={"/shop/androtec"} prefetch={false} className="sub-link">
                                    Androtec
                                </Link>
                                <Link href={"/shop/geomax"} prefetch={false} className="sub-link">
                                    Geomax
                                </Link>
                                <Link href={"/shop/leica"} prefetch={false} className="sub-link">
                                    Leica
                                </Link>
                                <Link href={"/shop/prismen"} prefetch={false} className="sub-link">
                                    Prismen
                                </Link>
                                <Link href={"/shop/theis"} prefetch={false} className="sub-link">
                                    Theis
                                </Link>
                                <Link href={"/shop/zubehoer"} prefetch={false} className="sub-link">
                                    Zubehör
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
