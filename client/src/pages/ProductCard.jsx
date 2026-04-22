import { Link } from "react-router-dom";


const ProductCard = ({product}) => {
  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition cursor-pointer">
    <Link to={`/products/${product.id}`}>
     <img
      src={product.image}
      alt={product.name}
      className="w-full h-48 object-cover rounded"
      />
      <h3 className="mt-4 font-medium">{product.name}</h3>
      <p className="text-gray-600">${product.price}</p>

    </Link>
    </div>
  )
}

export default ProductCard