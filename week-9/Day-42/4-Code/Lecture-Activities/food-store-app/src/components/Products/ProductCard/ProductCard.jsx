import "./ProductCard.css"

const ProductCard = ({ product }) => {

    const {  
    name,
    description,
    price,
    category,
    stock} = product

  return (

    <div className={`${getStockStatus(stock)}`}>
      <h3>{name}</h3>
      <p>{description}</p>
        <p>${price.toFixed(2)}</p>
        <p>{category}</p>
        <p>{stock > 0 ? `In Stock: ${stock}` : "Out of Stock"}</p>
    </div>

  )
}

function getStockStatus(stock) {
      if (stock === 0) return "product-card out-of-stock";
  if (stock <= 10) return "product-card low-stock";
  return "product-card in-stock";
}

export default ProductCard