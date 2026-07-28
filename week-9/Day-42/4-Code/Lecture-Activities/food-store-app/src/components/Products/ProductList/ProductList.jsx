
import ProductCard from "../ProductCard/ProductCard"
import './ProductList.css'

const ProductList = ({ products }) => {
  return (
    <section className="product-list">
      <h2>Product List</h2>
      <hr />
         <div className="product-grid">
            {products.map((product)=> (<ProductCard key={product.id} product={product} />))}
         </div>
    </section>
  )
}

export default ProductList