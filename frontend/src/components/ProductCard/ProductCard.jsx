import "./ProductCard.css";
import Carousel from "../Carousel/Carousel";

const ProductCard = ({
  id,
  productId,
  name,
  brandName,
  description,
  quantity,
  rating,
  options,
  listOfImages,
}) => {

  options = [" ", ...options];

  const ProductImage = ({ src, id }) => {
    return (
      <div key={id} className="product-card-image">
        <img src={src} alt={`product-${id}`} />
      </div>
    );
  };

  return (
    <section key={productId} className="product-card">
      <div className="product-images">
        {listOfImages && listOfImages.length !== 0 ? (
          <Carousel className="product-card-carousel">
            {listOfImages.map((image, index) => (
              <ProductImage src={image} id={productId + index} />
            ))}
          </Carousel>
        ) : (
          <ProductImage src={"/product-placeholder.png"} id={productId + '0'} />
        )}
      </div>
      <div className="product-actions-area">
        <div className="product-header">
          <span className="product-title">{name}</span>
          <span className="product-subtitle">{brandName}</span>
          <span className="product-desc">{description.substring(0, 42)}</span>
        </div>
        <div className="product-actions">
          <span className="product-desc">In Stock: {quantity}</span>
          <select>
            {options.map((option, index) => {
              return <option key={index}>{option}</option>;
            })}
          </select>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
