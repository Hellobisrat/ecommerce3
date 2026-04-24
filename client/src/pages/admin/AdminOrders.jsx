import { useEffect, useState } from "react";
import api from "../../utils/api";
import AdminLayout from "../../layouts/AdminLayout";


const AdminOrders = () => {
  const [orders,setOrders]=useState([])
 
  useEffect(()=>{
    api.get('/orders').then((res)=>setOrders(res.data))
  },[])

  return (
    <AdminLayout>
     <h1 className="text-3xl font-bold mb-6">All Orders</h1>
     <div className="bg-white p-6 rounded-xl shadow">
      {orders.map((order)=>(
        <div key={order._id} className="border-b py-4">
          <p>User:{order.user.name}</p>
          <p>Total:${order.total}</p>
          <p>Status:{order.status}</p>
          </div>
      ))}
     </div>
    </AdminLayout>
  )
}

export default AdminOrders