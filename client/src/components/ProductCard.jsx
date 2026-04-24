import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice.js";

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
     <button
        onClick={() => dispatch(addToCart(product))}
        className="mt-3 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
      >
         Add to Cart
      </button>
    </div>
  )
}

export default ProductCard