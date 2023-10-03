"use client";

import Link from "next/link";

import { useState, useRef, useCallback, useEffect } from "react";

import { motion } from "framer-motion";

import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

const change = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { ease: "linear", delay: 0.2, duration: 0.2 } },
};

const reveal = {
    hidden: { y: "25%", opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", duration: 0.4 } },
};

export default function Content({ products }) {
    const timeout = useRef(null);
    const [slide, setSlide] = useState(0);

    const prev = () => {
        setSlide((slide) => (slide === 0 ? products.length - 1 : slide - 1));
    };

    const next = useCallback(() => {
        setSlide((slide) => (slide === products.length - 1 ? 0 : slide + 1));
    }, [products, slide]);

    const jump = (i) => {
        setSlide(i);
    };

    useEffect(() => {
        if (timeout.current) clearTimeout(timeout.current);

        timeout.current = setTimeout(() => {
            next();
        }, 10000);

        return () => clearTimeout(timeout.current);
    }, [next]);

    return (
        <>
            <section className="slider-section">
                <div className="section-container">
                    <div className="hero-slider">
                        <div className="title-box">
                            <motion.h1 initial={"initial"} animate={"animate"} variants={change} key={slide} className="title">
                                {products[slide].name}
                            </motion.h1>
                        </div>
                        <div className="image-box">
                            <div className="image-holder">
                                <motion.img src={products[slide].image} alt={products[slide].name} initial={"initial"} animate={"animate"} variants={change} key={slide} loading="lazy" className="image" />
                            </div>
                        </div>
                        <div className="link-box">
                            <Link href={products[slide].link} className="link">
                                Zum Produkt
                            </Link>
                        </div>
                        <div className="navigation-box">
                            <button aria-label="Previous" className="icon-holder-prev" onClick={prev}>
                                <BsArrowLeft className="icon" />
                            </button>
                            <div className="dots">
                                {products.map((_, index) => (
                                    <button aria-label="Jump" className={index === slide ? "dot active" : "dot"} key={index} onClick={() => jump(index)}></button>
                                ))}
                            </div>
                            <button aria-label="Next" className="icon-holder-next" onClick={next}>
                                <BsArrowRight className="icon" />
                            </button>
                        </div>
                    </div>
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
                    <motion.h1 initial={"hidden"} whileInView={"visible"} viewport={{ once: true, amount: 0.5 }} variants={reveal} className="title">
                        UNSERE
                        <br />
                        <span className="gradient">FACHGEBIETE</span>
                    </motion.h1>
                    <div className="flex-grid">
                        <motion.div initial={"hidden"} whileInView={"visible"} viewport={{ once: true, amount: 0.5 }} variants={reveal} className="sub-flex-grid">
                            <div className="title-box">
                                <h2 className="title">DIENSTLEISTUNGEN</h2>
                            </div>
                            <div className="text-box">
                                <p className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos dicta nesciunt excepturi tenetur error necessitatibus nam sapiente placeat voluptates! Nesciunt accusantium animi hic neque perferendis, enim quasi corporis esse repudiandae.</p>
                                <Link href={"/dienstleistungen"} className="link">
                                    Zur Übersicht
                                </Link>
                            </div>
                            <div className="image-box flex-end">
                                <div className="image-holder"></div>
                            </div>
                        </motion.div>
                        <motion.div initial={"hidden"} whileInView={"visible"} viewport={{ once: true, amount: 0.5 }} variants={reveal} className="sub-flex-grid reversed">
                            <div className="title-box">
                                <h2 className="title">SERVICE</h2>
                            </div>
                            <div className="text-box">
                                <p className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos dicta nesciunt excepturi tenetur error necessitatibus nam sapiente placeat voluptates! Nesciunt accusantium animi hic neque perferendis, enim quasi corporis esse repudiandae.</p>
                                <Link href={"/service"} className="link">
                                    Zum Service
                                </Link>
                            </div>
                            <div className="image-box flex-start">
                                <div className="image-holder"></div>
                            </div>
                        </motion.div>
                        <motion.div initial={"hidden"} whileInView={"visible"} viewport={{ once: true, amount: 0.5 }} variants={reveal} className="sub-flex-grid">
                            <div className="title-box">
                                <h2 className="title">SHOP</h2>
                            </div>
                            <div className="text-box">
                                <p className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos dicta nesciunt excepturi tenetur error necessitatibus nam sapiente placeat voluptates! Nesciunt accusantium animi hic neque perferendis, enim quasi corporis esse repudiandae.</p>
                                <Link href={"/shop"} className="link">
                                    Zum Shop
                                </Link>
                            </div>
                            <div className="image-box flex-end">
                                <div className="image-holder"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
