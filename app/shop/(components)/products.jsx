import Link from "next/link";

export default function Products({ products }) {
    return (
        <div className="products-box">
            {products.map((product, index) => (
                <Link href={product.link} prefetch={false} className="product" key={index}>
                    <h2 className="title">{product.name}</h2>
                </Link>
            ))}
        </div>
    );
}
