import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";
import api from "../../utils/api";
import { toast } from "react-toastify";

export default function EditCategory() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", image: "" });

  useEffect(() => {
    api.get(`/categories`).then((res) => {
      const category = res.data.find((c) => c._id === id);
      if (category) setForm(category);
    });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/categories/${id}`, form);
      toast.success("Category updated");
      navigate("/admin/categories");
    } catch (err) {
      toast.error("Failed to update category");
    }
  };

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Edit Category</h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-xl shadow"
      >
        <input
          type="text"
          placeholder="Category Name"
          className="w-full border px-4 py-2 rounded"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="text"
          placeholder="Image URL"
          className="w-full border px-4 py-2 rounded"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />

        <button className="bg-black text-white px-6 py-3 rounded-lg">
          Save Changes
        </button>
      </form>
    </AdminLayout>
  );
}