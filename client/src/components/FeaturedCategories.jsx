const categories = [
  { id: 1, name: "Electronics", image: "https://via.placeholder.com/300" },
  { id: 2, name: "Fashion", image: "https://via.placeholder.com/300" },
  { id: 3, name: "Home & Kitchen", image: "https://via.placeholder.com/300" },
];



const FeaturedCategories = () => {
  return (
    <section className="mt-16">
     <h2 className="text-3xl font-medium mb-6">Shop by Category</h2>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {categories.map((cat)=>(
        <div
        key={cat.id}
        className="rounded-xl overflow-hidden shadow hover:shadow-lg transition cursor-pointer ">
          <img src={cat.image} alt={cat.image} className="w-full h-48 object-cover"/>
           <div className="p-4 text-center font-medium text-lg">{cat.name}</div>
          </div>
      ))}
     </div>
    </section>
  )
}

export default FeaturedCategories