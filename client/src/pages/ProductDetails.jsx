import { useParams } from "react-router-dom";
import { productsData } from "../data/products.js";
import ProductGallery from "../components/ProductGallery";

const ProductDetails = () => {
   const { id } = useParams();
  const product = productsData.find((p) => p.id === Number(id));

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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is placeholder text until we connect real product descriptions from the backend.
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