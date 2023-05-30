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

  const ProductImage = ({ src, key }) => {
    return (
      <div key={key} className="product-card-image">
        <img src={src} alt={`product-${key}`} />
      </div>
    );
  };

  return (
    <section id={id} className="product-card">
      <div className="product-images">
        {listOfImages && listOfImages.length !== 0 ? (
          <Carousel className="product-card-carousel">
            {listOfImages.map((image, index) => (
              <ProductImage src={image} key={index} />
            ))}
          </Carousel>
        ) : (
          <ProductImage src={"/product-placeholder.png"} key={0} />
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
