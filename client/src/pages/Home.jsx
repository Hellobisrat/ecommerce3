import Hero from "../components/Hero";
import FeaturedCategories from "../components/FeaturedCategories";
import FeaturedProducts from "../components/FeaturedProducts";

const Home = () => {
  return (
    <div className='space-y-20'>
     <Hero />
      <FeaturedCategories />
      <FeaturedProducts />

    </div>
  )
}

export default Home