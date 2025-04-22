import ProductCard from './ProductCard'; // Make sure this path is correct

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard 
          key={product.id} 
          product={product} 
        />
      ))}
    </div>
  );
}

export default ProductList;