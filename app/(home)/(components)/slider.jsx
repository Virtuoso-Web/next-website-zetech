"use client";

import Link from "next/link";

import { useState, useRef, useCallback, useEffect } from "react";

import { motion } from "framer-motion";

import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

const switches = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { ease: "linear", delay: 0.2, duration: 0.2 } },
};

export default function Slider({ products }) {
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
        <div className="hero-slider">
            <div className="title-box">
                <motion.h1 initial={"initial"} animate={"animate"} variants={switches} key={slide} className="title">
                    {products[slide].title}
                </motion.h1>
            </div>
            <div className="image-box">
                <div className="image-holder">
                    <motion.img src={products[slide].image} alt={products[slide].title} initial={"initial"} animate={"animate"} variants={switches} key={slide} loading="lazy" className="image" />
                </div>
            </div>
            <div className="link-box">
                <Link href={products[slide].link} className="link">
                    Zum Produkt
                </Link>
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
    );
}
