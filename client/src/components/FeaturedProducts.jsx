import React from 'react'
const products = [
  { id: 1, name: "Sample Product 1", price: 29.99, image: "https://via.placeholder.com/300" },
  { id: 2, name: "Sample Product 2", price: 49.99, image: "https://via.placeholder.com/300" },
  { id: 3, name: "Sample Product 3", price: 19.99, image: "https://via.placeholder.com/300" },
  { id: 4, name: "Sample Product 4", price: 99.99, image: "https://via.placeholder.com/300" },
];

const FeaturedProducts = () => {
  return (
    <section className='mt-16'>
      <h2 className='text-3xl font-semibold mb-6'>Featured Products</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
        {products.map((p)=>(
          <div
          key={p.id}
          className='border rounded-xl p-4 shadow hover:shadow-lg transition cursor-pointer'>
          <img src={p.image} alt={p.image} className='w-full h-48 object-cover rounded'/>
          <h3 className="mt-4 font-medium">{p.name}</h3>
            <p className="text-gray-600">${p.price}</p>
         </div>
        ))}
      </div>
      </section>
  )
}

export default FeaturedProducts