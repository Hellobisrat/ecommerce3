import React from 'react'
import {Link} from 'react-router-dom'
import { ShoppingCart,User } from 'lucide-react'
const Navbar = () => {
  return (
    <nav className='bg-white shadow'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <Link to="/" className='text-2xl font-bold'>
        Ecommerce3 
        </Link>
        <div className='flex items-center gap-6'>
          <Link to="/products" className="hover:text-blue-600">
            Products
          </Link>

          <Link to="/cart" className="relative">
            <ShoppingCart  />
          </Link>

          <Link to="/login">
            <User />
          </Link>

        </div>
      </div>
      Navbar</nav>
  )
}

export default Navbar