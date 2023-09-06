export default function Product({ product }) {
    return (
        <div className="product-box">
            <h1 className="title">{product.name}</h1>
            <div className="gallery">
                <div className="big-image-holder"></div>
                <div className="small-image-container">
                    {product.images.map((_, index) => (
                        <div className="small-image-holder" key={index}></div>
                    ))}
                </div>
            </div>
        </div>
    );
}
