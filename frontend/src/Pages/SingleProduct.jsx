import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function SingleProduct() {
  const {query, id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    fetch(`https://long-plum-coyote-gown.cyclic.app/products/${id}`)
      .then(response => response.json())
      .then(productData => setProduct(productData.data))
      .catch(error => console.error(error));
  }, [id]);
  function handleAddToCart() {
    // Add product to cart
  }

  function handleBuyNow() {
    // Navigate to checkout page with product
  }

  if (!product) {
    return         <img className="w-[50%] m-auto" src="https://ii1.pepperfry.com/img/grey.gif" alt="loading" />;
  }

  return (
    <div className="single-product">
      <div className="product-images">
        <img src={product[0].images[selectedImageIndex]} alt={product[0].title} />
        <div className="image-thumbnails">
          {product[0].images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={product[0].name}
              onClick={() => setSelectedImageIndex(index)}
              className={index === selectedImageIndex ? 'selected' : ''}
            />
          ))}
        </div>
      </div>
      <div className="product-details">
        <h1>{product[0].title}</h1>
        <p>{product[0].brand}</p>
        <h2>{product[0].mrp}</h2>
        <button onClick={handleAddToCart}>Add to Cart</button>
        <button onClick={handleBuyNow}>Buy Now</button>
      </div>
    </div>
  );
}
export default SingleProduct;