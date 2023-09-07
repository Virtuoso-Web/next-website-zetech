"use client";

import Link from "next/link";

import { motion } from "framer-motion";

const scales = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { type: "spring", duration: 0.4 } },
};

export default function Services() {
    return (
        <div className="flex-grid">
            <motion.div initial={"hidden"} whileInView={"visible"} viewport={{ once: true, amount: 0.5 }} variants={scales} className="sub-flex-grid">
                <div className="title-box">
                    <h2 className="title">SHOP / PRODUKTE</h2>
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
            <motion.div initial={"hidden"} whileInView={"visible"} viewport={{ once: true, amount: 0.5 }} variants={scales} className="sub-flex-grid reversed">
                <div className="title-box">
                    <h2 className="title">DIENSTLEISTUNGEN / DATENAUFBEREITUNG</h2>
                </div>
                <div className="text-box">
                    <p className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos dicta nesciunt excepturi tenetur error necessitatibus nam sapiente placeat voluptates! Nesciunt accusantium animi hic neque perferendis, enim quasi corporis esse repudiandae.</p>
                    <Link href={"/dienstleistungen"} className="link">
                        Zur Übersicht
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
                    <Link href={"/"} className="link">
                        Zum Service
                    </Link>
                </div>
                <div className="image-box flex-end">
                    <div className="image-holder"></div>
                </div>
            </motion.div>
        </div>
    );
}
