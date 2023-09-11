import "@/app/(home)/style.scss";

import Slider from "@/app/(home)/(components)/slider.jsx";
import Services from "@/app/(home)/(components)/services.jsx";

import Link from "next/link";

import { PiArrowArcRightBold } from "react-icons/pi";
import { MdOutlineWavingHand } from "react-icons/md";

const products = [
    {
        title: "Leica iCON Robot 70",
        image: "/images/home/leica-icon-robot-70.webp",
    },
    {
        title: "Leica iCON Robot 80",
        image: "/images/home/leica-icon-robot-80.webp",
    },
    {
        title: "Leica iCB 70",
        image: "/images/home/leica-icb-70.webp",
    },
    {
        title: "Leica iCON GPS 70T",
        image: "/images/home/leica-icon-gps-70.webp",
    },
    {
        title: "Leica iCON CC200",
        image: "/images/home/leica-icon-cc-200.webp",
    },
    {
        title: "Leica iCON CC80",
        image: "/images/home/leica-icon-cc-80.webp",
    },
    {
        title: "Leica AP20 AutoPole",
        image: "/images/home/leica-ap-20-autopole.webp",
    },
    {
        title: "Leica Rugby CLA-CTIVE",
        image: "/images/home/leica-rugby-cla-ctive.webp",
    },
    {
        title: "Geomax 60DG",
        image: "/images/home/geomax-60-dg.webp",
    },
];

export const metadata = {
    title: "Home",
};

export default function Page() {
    return (
        <main className="home-page">
            <section className="slider-section">
                <div className="section-container">
                    <Slider products={products} />
                </div>
            </section>

            <section className="hero-section">
                <img src="/images/home/construction-landscape.webp" alt="Hintergrund" loading="lazy" className="banner" />
                <div className="section-container">
                    <h1 className="title">
                        IHRE EXPERTEN IN SACHEN
                        <br />
                        <span className="gradient">BAUMESSTECHNIK</span>
                    </h1>
                </div>
            </section>

            <section className="services-section">
                <div className="section-container">
                    <h1 className="title">
                        UNSERE
                        <br />
                        <span className="gradient">FACHGEBIETE</span>
                    </h1>
                    <Services />
                </div>
            </section>

            <section className="about-section">
                <div className="section-container">
                    <div className="flex-grid">
                        <div className="image-box">
                            <div className="image-holder"></div>
                        </div>
                        <div className="title-box">
                            <h1 className="title">
                                WIR SIND IHR
                                <br />
                                <span className="gradient">STARKER PARTNER</span>
                            </h1>
                        </div>
                        <div className="sub-flex-grid">
                            <div className="description-box">
                                <h2 className="title">BESCHREIBUNG</h2>
                                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, illum earum deserunt unde obcaecati enim totam distinctio recusandae praesentium dicta explicabo, eum molestiae rem eveniet, consequatur eos porro natus soluta ab beatae ex vitae. Consequatur, impedit eius explicabo, veritatis modi cupiditate itaque ad doloremque illum natus earum, sunt quia ratione?</p>
                            </div>
                            <div className="description-box">
                                <h2 className="title">BESCHREIBUNG</h2>
                                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, illum earum deserunt unde obcaecati enim totam distinctio recusandae praesentium dicta explicabo, eum molestiae rem eveniet, consequatur eos porro natus soluta ab beatae ex vitae. Consequatur, impedit eius explicabo?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-section">
                <div className="section-container">
                    <div className="flex-grid">
                        <div className="text-box">
                            <h1 className="title">Zögern Sie nicht</h1>
                            <p className="text">und kontaktieren Sie uns bei allen Fragen oder Anliegen.</p>
                        </div>
                        <div className="icon-box">
                            <div className="hello-box">
                                <h1 className="title">Say Hello</h1>
                                <div className="icon-holder">
                                    <PiArrowArcRightBold className="icon" />
                                </div>
                            </div>
                            <Link href={"/kontakt"} className="icon-holder">
                                <MdOutlineWavingHand className="icon" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
