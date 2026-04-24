import { useEffect, useState } from "react";
import api from "../utils/api";


const Myorders = () => {
  const [orders,setOrders]=useState([]);

  useEffect(()=>{
    api.get('/orders/my-orders').then((res)=>setOrders(res.data))
  },[])
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My order</h1>
      <div className="space-y-6">
        {orders.map((order)=>(
          <div key={order._id} className="bg-white p-6 rounded-xl shadow">
            <p className="font-semibold">Order ID:{order._id} </p>
            <p>Status:{order.status}</p>
            <p>Total:${order.total}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Myorders