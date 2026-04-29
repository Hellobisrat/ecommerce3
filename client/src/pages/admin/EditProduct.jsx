import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, fetchProduct } from "../../store/productSlice";
import { useParams, useNavigate } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";
import api from "../../utils/api";
import { toast } from "react-toastify";


const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { selectedProduct: product, categories } = useSelector(
    (state) => state.products
  );

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
    stock: "",
  });

  // Load product + categories
  useEffect(()=>{
    dispatch(fetchProduct(id));
    dispatch(fetchCategories())
  },[dispatch,id])

  // Fill form when product loads
  useEffect(() => {
    if (product) {
      setForm({
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.category?._id,
        image: product.image,
        stock: product.stock,
      });
    }
  }, [product]);

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      await api.put(`/products/${id}`,form);
      toast.success("Product updated successfully");
      navigate("/admin/products")
    } catch (error) {
      toast.error("Failed to update product")
      
    }
  }

  if(!product) return <p>Loading ...</p>

 
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Edit Product </h1>
      <form
         onSubmit={handleSubmit}
         className="space-y-4 bg-white p-6 rounded-xl shadow">
           <input
          type="text"
          placeholder="Name"
          className="w-full border px-4 py-2 rounded"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <textarea
          placeholder="Description"
          className="w-full border px-4 py-2 rounded"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
         <input
          type="number"
          placeholder="Price"
          className="w-full border px-4 py-2 rounded"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />

        <select
          className="w-full border px-4 py-2 rounded"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        >
          <option>Select Category</option>
          {categories.map((c) => (
            <option key={c._id} value={c._id}>
              {c.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Image URL"
          className="w-full border px-4 py-2 rounded"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />

        <input
          type="number"
          placeholder="Stock"
          className="w-full border px-4 py-2 rounded"
          value={form.stock}
          onChange={(e) => setForm({ ...form, stock: e.target.value })}
        />

        <button className="bg-black text-white px-6 py-3 rounded-lg">
          Save Changes
        </button>

         </form>
    </AdminLayout>
  )
}

export default EditProduct