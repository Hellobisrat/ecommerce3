import { useParams } from "react-router-dom";
import { productsData } from "../data/products.js";
import ProductGallery from "../components/ProductGallery";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import {fetchProduct} from '../store/productSlice.js'
const ProductDetails = () => {
   const { id } = useParams();
   const dispatch = useDispatch()
   const {selectedProduct:product}=useSelector((state)=>state.product)
   
   useEffect(()=>{
    dispatch(fetchProduct(id))
   },[dispatch,id])

  if (!product) {
    return <h1 className="text-2xl text-red-500">Product not found</h1>;
  }

  return (
  
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT: IMAGE */}
      <div>
        <ProductGallery images={[product.image, product.image, product.image]} />
      </div>

      

      {/* RIGHT: INFO */}
      <div>
        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

        <p className="text-2xl text-gray-700 mb-4">${product.price}</p>

        <p className="text-gray-600 mb-6">
          {product.description}
        </p>

        <button  className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );

}

export default ProductDetails