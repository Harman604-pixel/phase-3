import PropTypes from 'prop-types';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

// First define the component (using function declaration)
function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

// Then add propTypes
ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string,
    image: PropTypes.string
  }).isRequired
};

// Finally export as default
export default ProductCard;