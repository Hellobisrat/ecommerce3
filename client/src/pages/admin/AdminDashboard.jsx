import AdminLayout from "../../layouts/AdminLayout";

export default AdminDashboard =()=>{
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">Products</div>
        <div className="bg-white p-6 rounded-xl shadow">Categories</div>
        <div className="bg-white p-6 rounded-xl shadow">Users</div>
      </div>
 
      
    </AdminLayout>
  )
}