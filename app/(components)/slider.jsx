"use client";

import { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

const switches = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { ease: "linear", delay: 0.2, duration: 0.2 } },
    exit: { opacity: 0, transition: { ease: "linear", duration: 0.2 } },
};

let interval;

export default function Slider({ products }) {
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
        interval = setInterval(next, 10000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const pause = () => {
        clearInterval(interval);
    };

    const play = () => {
        interval = setInterval(next, 10000);
    };

    return (
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
    );
}
