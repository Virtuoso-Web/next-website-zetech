export default function Product({ product }) {
    return (
        <div className="product-box">
            <h1 className="title">{product.name}</h1>
            <div className="gallery">
                <div className="big-image-holder">
                    <img src={product.image} alt={product.name} loading="lazy" className="image" />
                </div>
            </div>
        </div>
    );
}
