"use client";

import { useRef } from "react";

import { motion, useScroll } from "framer-motion";

export default function ScrollContainer({ children, classes }) {
    const reference = useRef(null);

    const { scrollYProgress } = useScroll({
        target: reference,
        offset: ["0.25 1", "1 1"],
    });

    return (
        <motion.div ref={reference} style={{ opacity: scrollYProgress }} className={classes}>
            {children}
        </motion.div>
    );
}
