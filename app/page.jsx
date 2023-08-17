"use client";

import Link from "next/link";

import { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { PiArrowArcRightBold } from "react-icons/pi";
import { MdOutlineWavingHand } from "react-icons/md";

import "@/app/style.scss";

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
        title: "Leica ICB 70",
        image: "/images/home/leica-icb-70.webp",
    },
    {
        title: "Leica iCON GPS 70",
        image: "/images/home/leica-icon-gps-70.webp",
    },
    {
        title: "Leica iCON CC 200",
        image: "/images/home/leica-icon-cc-200.webp",
    },
    {
        title: "Leica iCON CC 80",
        image: "/images/home/leica-icon-cc-80.webp",
    },
];

const switches = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { ease: "linear", delay: 0.2, duration: 0.2 } },
    exit: { opacity: 0, transition: { ease: "linear", duration: 0.2 } },
};

const scales = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { type: "spring", duration: 0.4 } },
};

let interval;

export default function Page() {
    const [slide, setSlide] = useState(0);

    const prev = () => {
        setSlide((slide) => (slide === 0 ? products.length - 1 : slide - 1));
    };

    const next = () => {
        setSlide((slide) => (slide === products.length - 1 ? 0 : slide + 1));
    };

    const jump = (i) => {
        setSlide(i);
    };

    useEffect(() => {
        interval = setInterval(next, 5000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const pause = () => {
        clearInterval(interval);
    };

    const play = () => {
        interval = setInterval(next, 5000);
    };

    return (
        <main className="home-page">
            <section className="slider-section">
                <img src="/images/bg-concrete.webp" alt="Hintergrund" className="bg-image" />
                <div className="section-container">
                    <div className="hero-slider" onPointerEnter={pause} onPointerLeave={play}>
                        <div className="text-box">
                            <AnimatePresence initial={false}>
                                <motion.h1 initial={"initial"} animate={"animate"} exit={"exit"} variants={switches} key={slide} className="title">
                                    {products[slide].title}
                                </motion.h1>
                            </AnimatePresence>
                        </div>
                        <div className="image-box">
                            <div className="image-holder">
                                <AnimatePresence initial={false}>
                                    <motion.img src={products[slide].image} alt={products[slide].title} initial={"initial"} animate={"animate"} exit={"exit"} variants={switches} key={slide} className="image" />
                                </AnimatePresence>
                            </div>
                        </div>
                        <div className="navigation-box">
                            <button className="icon-holder-prev" onClick={prev}>
                                <BsArrowLeft className="icon" />
                            </button>
                            <div className="dots">
                                {products.map((_, index) => (
                                    <button className={index === slide ? "dot active" : "dot"} key={index} onClick={() => jump(index)}></button>
                                ))}
                            </div>
                            <button className="icon-holder-next" onClick={next}>
                                <BsArrowRight className="icon" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="hero-section">
                <div className="section-container">
                    <Link href={"/shop"} className="link">
                        Zum Shop
                    </Link>
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
                    <div className="flex-grid">
                        <motion.div initial={"hidden"} whileInView={"visible"} viewport={{ once: true, amount: 0.5 }} variants={scales} className="sub-flex-grid">
                            <div className="title-box">
                                <h2 className="title">BERATUNG / VERKAUF</h2>
                            </div>
                            <div className="text-box">
                                <p className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos dicta nesciunt excepturi tenetur error necessitatibus nam sapiente placeat voluptates! Nesciunt accusantium animi hic neque perferendis, enim quasi corporis esse repudiandae.</p>
                                <Link href={"/"} prefetch={false} className="link">
                                    Mehr erfahren
                                </Link>
                            </div>
                            <div className="image-box flex-end">
                                <div className="image-holder"></div>
                            </div>
                        </motion.div>
                        <motion.div initial={"hidden"} whileInView={"visible"} viewport={{ once: true, amount: 0.5 }} variants={scales} className="sub-flex-grid reversed">
                            <div className="title-box">
                                <h2 className="title">DIENSTLEISTUNG / DATENAUFBEREITUNG</h2>
                            </div>
                            <div className="text-box">
                                <p className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos dicta nesciunt excepturi tenetur error necessitatibus nam sapiente placeat voluptates! Nesciunt accusantium animi hic neque perferendis, enim quasi corporis esse repudiandae.</p>
                                <Link href={"/dienstleistungen"} prefetch={false} className="link">
                                    Mehr erfahren
                                </Link>
                            </div>
                            <div className="image-box flex-start">
                                <div className="image-holder"></div>
                            </div>
                        </motion.div>
                        <motion.div initial={"hidden"} whileInView={"visible"} viewport={{ once: true, amount: 0.5 }} variants={scales} className="sub-flex-grid">
                            <div className="title-box">
                                <h2 className="title">SERVICE / WERKSTATT</h2>
                            </div>
                            <div className="text-box">
                                <p className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos dicta nesciunt excepturi tenetur error necessitatibus nam sapiente placeat voluptates! Nesciunt accusantium animi hic neque perferendis, enim quasi corporis esse repudiandae.</p>
                                <Link href={"/"} prefetch={false} className="link">
                                    Mehr erfahren
                                </Link>
                            </div>
                            <div className="image-box flex-end">
                                <div className="image-holder"></div>
                            </div>
                        </motion.div>
                    </div>
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
                            <motion.div initial={"hidden"} whileInView={"visible"} viewport={{ once: true, amount: 0.5 }} variants={scales} className="description-box">
                                <h2 className="title">BESCHREIBUNG</h2>
                                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, illum earum deserunt unde obcaecati enim totam distinctio recusandae praesentium dicta explicabo, eum molestiae rem eveniet, consequatur eos porro natus soluta ab beatae ex vitae. Consequatur, impedit eius explicabo, veritatis modi cupiditate itaque ad doloremque illum natus earum, sunt quia ratione?</p>
                            </motion.div>
                            <motion.div initial={"hidden"} whileInView={"visible"} viewport={{ once: true, amount: 0.5 }} variants={scales} className="description-box">
                                <h2 className="title">BESCHREIBUNG</h2>
                                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, illum earum deserunt unde obcaecati enim totam distinctio recusandae praesentium dicta explicabo, eum molestiae rem eveniet, consequatur eos porro natus soluta ab beatae ex vitae. Consequatur, impedit eius explicabo?</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="products-section">
                <div className="section-container">
                    <h1 className="title">
                        UNSERE BESTEN
                        <br />
                        <span className="gradient">PRODUKTE</span>
                    </h1>
                    <div className="flex-grid">
                        <div className="product-box">
                            <h2 className="title">Leica GPS</h2>
                            <div className="image-holder"></div>
                            <div className="image-navigator">
                                <motion.div initial={{ scale: 1 }} whileTap={{ scale: 1.1 }} className="icon-holder">
                                    <BsArrowLeft className="icon" />
                                </motion.div>
                                <div className="dots">
                                    <div className="dot active"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                </div>
                                <motion.div initial={{ scale: 1 }} whileTap={{ scale: 1.1 }} className="icon-holder">
                                    <BsArrowRight className="icon" />
                                </motion.div>
                            </div>
                            <Link href={"/shop/leica"} prefetch={false} className="link">
                                Produkt ansehen
                            </Link>
                        </div>
                        <div className="product-box">
                            <h2 className="title">Leica Total Station</h2>
                            <div className="image-holder"></div>
                            <div className="image-navigator">
                                <motion.div initial={{ scale: 1 }} whileTap={{ scale: 1.1 }} className="icon-holder">
                                    <BsArrowLeft className="icon" />
                                </motion.div>
                                <div className="dots">
                                    <div className="dot active"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                </div>
                                <motion.div initial={{ scale: 1 }} whileTap={{ scale: 1.1 }} className="icon-holder">
                                    <BsArrowRight className="icon" />
                                </motion.div>
                            </div>
                            <Link href={"/shop/leica"} prefetch={false} className="link">
                                Produkt ansehen
                            </Link>
                        </div>
                    </div>
                    <p className="text">Durchstöbern Sie unseren Shop und finden Sie ihr passendes Produkt.</p>
                    <p className="text">Wir sind Ihnen bei der Auswahl gerne behilflich.</p>
                    <Link href={"/shop"} prefetch={false} className="link">
                        Zum Shop
                    </Link>
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
                            <motion.div initial={"hidden"} whileInView={"visible"} viewport={{ once: true, amount: 0.5 }} variants={scales} className="motion-div">
                                <Link href={"/kontakt"} prefetch={false} className="icon-holder">
                                    <MdOutlineWavingHand className="icon" />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
