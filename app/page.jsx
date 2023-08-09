"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { PiArrowArcRightBold } from "react-icons/pi";
import { MdOutlineWavingHand } from "react-icons/md";

import "@/app/style.scss";

const scales = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { type: "spring", duration: 0.4 } },
};

export default function Page() {
    return (
        <main className="home-page">
            <section className="hero-section">
                <img src="/images/background.webp" alt="Hintergrund" className="bg-image" />
                <div className="section-container">
                    <div className="flex-grid">
                        <div className="title-box">
                            <motion.h1 initial={{ opacity: 0, y: "5vh" }} animate={{ opacity: 1, y: 0, transition: { type: "spring", duration: 0.4 } }} className="title">
                                EXPERTEN IN SACHEN BAUMESSTECHNIK
                            </motion.h1>
                        </div>
                        <div className="text-box">
                            <motion.p initial={{ opacity: 0, y: "5vh" }} animate={{ opacity: 1, y: 0, transition: { type: "spring", duration: 0.4, delay: 0.2 } }} className="intro">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos mollitia nam voluptas dolor vel! Magni voluptatum cum perferendis illum corrupti. Lorem, ipsum dolor sit amet consectetur adipisicing elit?
                            </motion.p>
                            <motion.div initial={{ opacity: 0, y: "5vh" }} animate={{ opacity: 1, y: 0, transition: { type: "spring", duration: 0.4, delay: 0.4 } }} className="motion-div">
                                <Link href={"/shop"} prefetch={false} className="link">
                                    Produkte entdecken
                                </Link>
                            </motion.div>
                        </div>
                    </div>
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
                                <h2 className="title">BERATUNG</h2>
                            </div>
                            <div className="description-box">
                                <p className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos dicta nesciunt excepturi tenetur error necessitatibus nam sapiente placeat voluptates! Nesciunt accusantium animi hic neque perferendis, enim quasi corporis esse repudiandae.</p>
                                <Link href={"/dienstleistungen"} prefetch={false} className="link">
                                    Mehr erfahren
                                </Link>
                            </div>
                            <div className="image-box flex-end">
                                <div className="image-holder"></div>
                            </div>
                        </motion.div>
                        <div className="sub-flex-grid-container">
                            <motion.div initial={"hidden"} whileInView={"visible"} viewport={{ once: true, amount: 0.5 }} variants={scales} className="sub-flex-grid">
                                <div className="title-box">
                                    <h2 className="title">MIETE</h2>
                                </div>
                                <div className="description-box">
                                    <p className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos dicta nesciunt excepturi tenetur error necessitatibus nam sapiente placeat voluptates! Nesciunt accusantium animi hic neque perferendis, enim quasi corporis esse repudiandae.</p>
                                    <Link href={"/dienstleistungen/#miete"} prefetch={false} className="link">
                                        Mehr erfahren
                                    </Link>
                                </div>
                                <div className="image-box">
                                    <div className="image-holder"></div>
                                </div>
                            </motion.div>
                            <motion.div initial={"hidden"} whileInView={"visible"} viewport={{ once: true, amount: 0.5 }} variants={scales} className="sub-flex-grid">
                                <div className="title-box">
                                    <h2 className="title">VERKAUF</h2>
                                </div>
                                <div className="description-box">
                                    <p className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos dicta nesciunt excepturi tenetur error necessitatibus nam sapiente placeat voluptates! Nesciunt accusantium animi hic neque perferendis, enim quasi corporis esse repudiandae.</p>
                                    <Link href={"/dienstleistungen/#verkauf"} prefetch={false} className="link">
                                        Mehr erfahren
                                    </Link>
                                </div>
                                <div className="image-box">
                                    <div className="image-holder"></div>
                                </div>
                            </motion.div>
                        </div>
                        <motion.div initial={"hidden"} whileInView={"visible"} viewport={{ once: true, amount: 0.5 }} variants={scales} className="sub-flex-grid reversed">
                            <div className="title-box">
                                <h2 className="title">SERVICE</h2>
                            </div>
                            <div className="description-box">
                                <p className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos dicta nesciunt excepturi tenetur error necessitatibus nam sapiente placeat voluptates! Nesciunt accusantium animi hic neque perferendis, enim quasi corporis esse repudiandae.</p>
                                <Link href={"/dienstleistungen/#service"} prefetch={false} className="link">
                                    Mehr erfahren
                                </Link>
                            </div>
                            <div className="image-box flex-start">
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
