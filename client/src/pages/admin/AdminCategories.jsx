import { useEffect, useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import api from "../../utils/api";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

 const AdminCategories =()=>{
  const [categories,setCategories]=useState([]);

  const loadCategories =()=>{
    api.get("/categories").then((res)=>setCategories(res.data))
  }
   useEffect(() => {
    loadCategories();
  }, []);

  const deleteCategory= async(id)=>{
    if(!confirm("Delete this category")) return

    try {
      await api.delete(`/categories/${id}`);
      toast.success("Category deleted");
      loadCategories()
    } catch (error) {
      toast.error("Failed to delete category")
    }
  };

  return(
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Categories</h1>
        <Link
           to="/admin/categories/new"
           className="bg-black text-white px-4 py-2 rounded-lg"
           >
            Add Category
           </Link>
      </div>
      <div className="bg-white p-6 rounded-xl shadow">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="py-3 text-left">Name</th>
              <th className="py-3 text-left">Image</th>
              <th className="py-3 text-left">Actions</th>
            </tr>
          </thead>
           <tbody>
            {categories.map((cat) => (
              <tr key={cat._id} className="border-b">
                <td className="py-3">{cat.name}</td>
                <td className="py-3">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="py-3 space-x-4">
                  <Link
                    to={`/admin/categories/${cat._id}`}
                    className="text-blue-600"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteCategory(cat._id)}
                    className="text-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </AdminLayout>
  )
}

export default AdminCategories;