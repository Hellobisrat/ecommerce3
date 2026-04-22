import React from 'react'

const Hero = () => {
  return (
    <section className='bg-gray-100 py-20 rounded-xl'>
      <div className='container mx-auto px-6 text-center'>
        <h1 className='text-4xl md:text-6xl font-bold mb-6'>
          Shop the Latest Trends
        </h1>
        <p className='text-lg text-gray-600 mb-8 max-w-2xl mx-auto'>
           Discover high‑quality products at unbeatable prices. Fast delivery, secure checkout, and a seamless shopping experience.
        </p>
        <a
          href='/products'
          className='bg-black text-white px-8 py-3 rounded-lg text-lg hover:bg-gray-800 transition'>
            Shop Now
          </a>
      </div>
      </section>
  )
}

export default Hero