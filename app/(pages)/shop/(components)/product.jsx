import Link from "next/link";

import { FaFilePdf } from "react-icons/fa";

export default function Product({ product }) {
    return (
        <div className="product-box">
            <h1 className="title">{product.name}</h1>
            <div className="gallery">
                <div className="big-image-holder">
                    <img src={product.image} alt={product.name} loading="lazy" className="image" />
                </div>
            </div>
            <div className="info-container">
                <div className="description">
                    <h2 className="headline">{product.headline}</h2>
                    <ul className="subliner-list">
                        {product.subliner?.map((subline, index) => (
                            <li key={index} className="list-item">
                                {subline.bullet ? <span className="point">{"•"}</span> : null}
                                {subline.subline}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="datasheet-list">
                    <h2 className="datasheet-title">Dokumente:</h2>
                    {product.datasheets?.map((sheet, index) => (
                        <Link href={sheet.path} target="_blank" key={index} className="datasheet-link">
                            <FaFilePdf className="icon" />
                            {sheet.type}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
