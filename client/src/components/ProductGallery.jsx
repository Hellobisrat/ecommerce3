import {useState} from 'react'

const ProductGallery = ({images}) => {
    const [active, setActive] = useState(images[0]);

  return (
    <div>
    <img
        src={active}
        alt="product"
        className="w-full h-[400px] object-cover rounded-xl shadow mb-4"
      />
    <div className='flex gap-3'>
      {images.map((img,i)=>(
        <img
            key={i}
            src={img}
            onClick={() => setActive(img)}
            className={`w-20 h-20 object-cover rounded cursor-pointer border ${
              active === img ? "border-black" : "border-gray-300"
            }`}
        />

      ))}
    </div>
    
    </div>
  )
}

export default ProductGallery