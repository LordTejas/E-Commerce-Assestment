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

  const Rating = ({ rating }) => {
    const filledStars = Math.floor(rating); // Number of filled stars
    const remainingStars = 5 - filledStars; // Number of remaining stars
  
    return (
      <span>
        {[...Array(filledStars)].map((_, index) => (
          <img key={index} src="star.png" alt="filled star" height='24px' width='24px' />
        ))}
        {[...Array(remainingStars)].map((_, index) => (
          <img key={index + filledStars} src="unstar.png" alt="unfilled star" height='24px' width='24px' />
        ))}
      </span>
    );
  }
  

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
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
          <span className="product-title">{name}</span>
          <Rating rating={rating} />
          </div>
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
