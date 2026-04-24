import React from 'react'
import { Link } from 'react-router-dom'
const AdminLayout = ({children}) => {
  return (
    <div className='min-h-screen grid grid-cols-1 md:grid-cols-5'>
    {/* Sidebar */}
    <aside className='bg-black text-white p-6 space-y-6 md:col-span-1'>
      <h2 className='text-2xl font-bold'>Admin Panel</h2>
      <nav className='space-y-4'>
        <Link to='/admin' className='block hover:text-gray-300'>Dashboard</Link>
         <Link to="/admin/products" className="block hover:text-gray-300">Products</Link>
          <Link to="/admin/categories" className="block hover:text-gray-300">Categories</Link>
          <Link to="/admin/users" className="block hover:text-gray-300">Users</Link>

      </nav>
    </aside>
      {/* Main Content */}
      <main className='p-8 md:col-span-4 bg-gray-100 min-h-screen '>
        {children}
      </main>
    </div>
  )
}

export default AdminLayout