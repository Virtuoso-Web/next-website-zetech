import Link from "next/link";

import "@/app/dienstleistungen/style.scss";

export default function Page() {
    return (
        <main className="dienstleistungen-page">
            <section className="intro-section">
                <div className="section-container">
                    <div className="flex-grid">
                        <div className="title-box">
                            <h1 className="title">Auf Sie zugeschnittene Dienstleistungen</h1>
                        </div>
                        <div className="description-box">
                            <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem consectetur maiores incidunt, quisquam pariatur fugit, cumque minima nesciunt odit numquam et voluptatum molestiae dolorem magni quas ad hic, sapiente quae facilis voluptates tempore! A aut perferendis ut, quo nam culpa molestias maxime, accusantium veritatis architecto dolore iste veniam fugit officiis.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="consulting-section">
                <div className="section-container">
                    <div className="flex-grid">
                        <div className="title-box">
                            <h2 className="title">BERATUNG</h2>
                        </div>
                        <div className="sub-flex-grid">
                            <div className="title-box">
                                <h3 className="title">Titel</h3>
                            </div>
                            <div className="description-box">
                                <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id quo neque reprehenderit natus voluptatem pariatur, iusto magnam ex aliquid nemo cupiditate illo, saepe labore sit. Earum cumque ea perferendis mollitia libero rerum deleniti aspernatur excepturi quod accusantium magni, esse reiciendis ad, qui labore voluptas sunt, provident sint optio illo eveniet culpa laudantium enim. Rem ducimus corrupti totam, minus quaerat, tempore est ipsam laborum, commodi quam assumenda deserunt cupiditate similique labore repudiandae fugiat exercitationem amet nesciunt eligendi dolore. Quos delectus deserunt corrupti saepe veritatis debitis odit commodi, aspernatur quam minima quod perferendis laborum molestiae repellendus quidem, magni assumenda quaerat sequi. Corporis.</p>
                                <Link href={"/kontakt"} prefetch={false} className="link">
                                    LINK
                                </Link>
                            </div>
                            <div className="image-box">
                                <div className="image-holder"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="miete" aria-hidden="true"></div>
            </section>

            <section className="rent-section">
                <div className="section-container">
                    <div className="flex-grid">
                        <div className="title-box">
                            <h2 className="title">MIETE</h2>
                        </div>
                        <div className="sub-flex-grid">
                            <div className="title-box">
                                <h3 className="title">Titel</h3>
                            </div>
                            <div className="description-box">
                                <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id quo neque reprehenderit natus voluptatem pariatur, iusto magnam ex aliquid nemo cupiditate illo, saepe labore sit. Earum cumque ea perferendis mollitia libero rerum deleniti aspernatur excepturi quod accusantium magni, esse reiciendis ad, qui labore voluptas sunt, provident sint optio illo eveniet culpa laudantium enim. Rem ducimus corrupti totam, minus quaerat, tempore est ipsam laborum, commodi quam assumenda deserunt cupiditate similique labore repudiandae fugiat exercitationem amet nesciunt eligendi dolore. Quos delectus deserunt corrupti saepe veritatis debitis odit commodi, aspernatur quam minima quod perferendis laborum molestiae repellendus quidem, magni assumenda quaerat sequi. Corporis.</p>
                                <Link href={"/kontakt"} prefetch={false} className="link">
                                    LINK
                                </Link>
                            </div>
                            <div className="image-box">
                                <div className="image-holder"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="verkauf" aria-hidden="true"></div>
            </section>

            <section className="sell-section">
                <div className="section-container">
                    <div className="flex-grid">
                        <div className="title-box">
                            <h2 className="title">VERKAUF</h2>
                        </div>
                        <div className="sub-flex-grid">
                            <div className="title-box">
                                <h3 className="title">Titel</h3>
                            </div>
                            <div className="description-box">
                                <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id quo neque reprehenderit natus voluptatem pariatur, iusto magnam ex aliquid nemo cupiditate illo, saepe labore sit. Earum cumque ea perferendis mollitia libero rerum deleniti aspernatur excepturi quod accusantium magni, esse reiciendis ad, qui labore voluptas sunt, provident sint optio illo eveniet culpa laudantium enim. Rem ducimus corrupti totam, minus quaerat, tempore est ipsam laborum, commodi quam assumenda deserunt cupiditate similique labore repudiandae fugiat exercitationem amet nesciunt eligendi dolore. Quos delectus deserunt corrupti saepe veritatis debitis odit commodi, aspernatur quam minima quod perferendis laborum molestiae repellendus quidem, magni assumenda quaerat sequi. Corporis.</p>
                                <Link href={"/kontakt"} prefetch={false} className="link">
                                    LINK
                                </Link>
                            </div>
                            <div className="image-box">
                                <div className="image-holder"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="service" aria-hidden="true"></div>
            </section>

            <section className="service-section">
                <div className="section-container">
                    <div className="flex-grid">
                        <div className="title-box">
                            <h2 className="title">SERVICE</h2>
                        </div>
                        <div className="sub-flex-grid">
                            <div className="title-box">
                                <h3 className="title">Titel</h3>
                            </div>
                            <div className="description-box">
                                <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id quo neque reprehenderit natus voluptatem pariatur, iusto magnam ex aliquid nemo cupiditate illo, saepe labore sit. Earum cumque ea perferendis mollitia libero rerum deleniti aspernatur excepturi quod accusantium magni, esse reiciendis ad, qui labore voluptas sunt, provident sint optio illo eveniet culpa laudantium enim. Rem ducimus corrupti totam, minus quaerat, tempore est ipsam laborum, commodi quam assumenda deserunt cupiditate similique labore repudiandae fugiat exercitationem amet nesciunt eligendi dolore. Quos delectus deserunt corrupti saepe veritatis debitis odit commodi, aspernatur quam minima quod perferendis laborum molestiae repellendus quidem, magni assumenda quaerat sequi. Corporis.</p>
                                <Link href={"/kontakt"} prefetch={false} className="link">
                                    LINK
                                </Link>
                            </div>
                            <div className="image-box">
                                <div className="image-holder"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
