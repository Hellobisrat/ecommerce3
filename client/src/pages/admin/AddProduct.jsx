import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../store/productSlice";
import AdminLayout from "../../layouts/AdminLayout";
import api from "../../utils/api";
import { toast } from "react-toastify";



const AddProduct = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.products);

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
    stock: 0,
  });
  
  useEffect(()=>{
    dispatch(fetchCategories())
  },[dispatch])

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      await api.post('/products',form);
      toast.success("product created")
    } catch (error) {
      toast.error("Failed to create product")
    }
  }
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Add Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow">
        <input
          type="text"
          placeholder="Name"
          className="w-full border px-4 py-2 rounded"
          onChange={(e)=>setForm({...form,name:e.target.value})}
          />
          <textarea
            placeholder="Description"
            className="w-full border px-4 py-2 rounded"
            onChange={(e)=>setForm({...form,description:e.target.value})}
            />
            <input
            type="number"
            placeholder="Price"
            className="w-full border px-4 py-2 rounded "
            onChange={(e)=>setForm({...form,price:e.target.value})}
            />
            <select
              className="w-full border px-4 py-2 rounded"
              onChange={(e)=>setForm({...form,category:e.target.value})}
              >
                <option>Select Category</option>
                {categories.map((c)=>(
                    <option key={c._id} value={c._id}>
                      {c.name}
                    </option>
                  ))}
              </select>
              <input
          type="text"
          placeholder="Image URL"
          className="w-full border px-4 py-2 rounded"
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />

        <input
          type="number"
          placeholder="Stock"
          className="w-full border px-4 py-2 rounded"
          onChange={(e) => setForm({ ...form, stock: e.target.value })}
        />

        <button className="bg-black text-white px-6 py-3 rounded-lg">
          Create Product
        </button>

      </form>
    </AdminLayout>
  )
}

export default AddProduct