import Link from "next/link";

export default function Products({ products }) {
    return (
        <div className="products-box">
            {products.map((product, index) => (
                <div className="product" key={index}>
                    <h2 className="title">{product.name}</h2>
                    <Link href={product.link} className="image-holder">
                        <img src={product.image} alt={product.name} loading="lazy" className="image" />
                    </Link>
                </div>
            ))}
        </div>
    );
}
