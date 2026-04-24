import { useState,useEffect } from 'react'
import ProductCard from '../components/ProductCard';
import {productsData} from '.../data/products.js'
import { useDispatch } from 'react-redux';
import {fetchProducts} from '../store/productSlice.js'
import ProductCard from '../components/ProductCard';

useEffect(()=>{
  dispatchEvent(fetchProducts())

},[dispatch])
const Products = () => {
  const [sort,setSort]=useState("default");

    const sortedProducts = [...productsData].sort((a, b) => {
    if (sort === "price-low") return a.price - b.price;
    if (sort === "price-high") return b.price - a.price;
    if (sort === "name-asc") return a.name.localeCompare(b.name);
    if (sort === "name-desc") return b.name.localeCompare(a.name);
    return 0;
  });


  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
      {/* Sidebar */}
      <aside className='md:col-span-1 border rounded-xl p-4 h-fit'>
        <h2 className='text-xl font-semibold mb-4'>Filters</h2>
        <div className='space-y-3'>
          <label  className='block'>
            <input type='checkbox' className='mr-2'/>
            Electronics
          </label>
          <label  className='block'>
            <input type='checkbox' className='mr-2'/>
            Fashion
          </label>
          <label  className='block'>
            <input type='checkbox' className='mr-2'/>
            Home & Kitchen
          </label>

        </div>
      </aside>
      {/* Main Content */}
      <main className='md:col-span-3'>
        <div className='flex justify-between items-center mb-6'>
          <h1 className='text-3xl font-semibold'>Products</h1>
          <select
            className='border px-3 py-2 rounded-lg'
            value={sort}
            onChange={(e)=>setSort(e.target.value)}
            >
              <option value="default">Sort By</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name-asc">Name: A → Z</option>
            <option value="name-desc">Name: Z → A</option>
 
            </select>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {Products.map((product)=>(
            <ProductCard key={product._id} product={product}/>
          ))}
        </div>
      </main>
      <h1 className='text-2xl font-semibold'>Products</h1>
    </div>
  )
}

export default Products