import PopularProductCard from "../Components/PopularProductCard"
import { products } from "../Constants"


const PopularProduct = () => {
  return (
    <section id="products" className="max-container max-sm:mt-5">
      <h2 className="text-4xl font-bold font-Garamond">
        Our <span className="text-coral-red">Popular</span> Products
      </h2>
      <p className="mt-5 lg:max-w-lg 
      font-palanquin text-slate-gray">
        Experience top-notch quality and style with our sought-after
        selection Discover a world of comfort,and value
      </p>
      <div className="grid grid-cols-1 
                      lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2
                      mt-14 sm:gap-4 gap-16
                      justify-center items-center
                      w-full">
        {products.map((product,index)=>(
          <PopularProductCard key={index} {...product}/>
        ))}
      </div>
    </section>
  )
}

export default PopularProduct