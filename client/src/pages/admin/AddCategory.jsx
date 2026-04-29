import { useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import api from "../../utils/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function AddCategory() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", image: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/categories", form);
      toast.success("Category created");
      navigate("/admin/categories");
    } catch (err) {
      toast.error("Failed to create category");
    }
  };

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Add Category</h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-xl shadow"
      >
        <input
          type="text"
          placeholder="Category Name"
          className="w-full border px-4 py-2 rounded"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="text"
          placeholder="Image URL"
          className="w-full border px-4 py-2 rounded"
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />

        <button className="bg-black text-white px-6 py-3 rounded-lg">
          Create Category
        </button>
      </form>
    </AdminLayout>
  );
}