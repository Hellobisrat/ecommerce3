import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/productSlice";
import AdminLayout from "../../layouts/AdminLayout";
import { Link } from "react-router-dom";

const AdminProducts = () => {
    const dispatch = useDispatch();
    const { items: products } = useSelector((state) => state.products);
    
    useEffect(()=>{
      dispatch(fetchProducts())
    },[dispatch])


  return (
    <AdminLayout>
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-3xl font-bold'>Products</h1>
        <Link
          to="/admin/products/new"
          className='bg-black text-white px-4 py-2 rounded-lg'
          >
          Add Product
          </Link>
      </div>
      <div className='bg-white p-6 rounded-xl shadow'>
        <table className='w-full'>
          <thead>
            <tr className='border-b'>
              <th className="py-3 text-left">Name</th>
              <th className="py-3 text-left">Price</th>
              <th className="py-3 text-left">Category</th>
              <th className="py-3 text-left">Actions</th>

            </tr>
          </thead>
          <tbody>
            {products.map((p)=>(
              <tr key={p._id} className='border-b'>
                <td className="py-3">{p.name}</td>
                <td className="py-3">${p.price}</td>
                <td className="py-3">{p.category?.name}</td>
                 <td className="py-3 space-x-3">
                  <Link
                    to={`/admin/products/${p._id}`}
                    className="text-blue-600"
                  >
                    Edit
                  </Link>
                  <button className="text-red-500">Delete</button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  )
}

export default AdminProducts