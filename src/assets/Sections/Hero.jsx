import Button from "../Components/Button"
import rightArrow from '../Icons/Right-arrow.png'
import {statistics,shoes} from '../Constants/index'
import bigshoe from '../Images/pngwing.com (1).png'
import { useState } from "react"
import ShoeCard from "../Components/ShoeCard"

const Hero = () => {
  const [activeShoe, setActiveShoe] = useState(bigshoe)
  return (
    <section
    id="home"
    className="flex w-full 
    xl:flex-row flex-col 
    justify-center min-h-screen gap-10">
      <div className="relative 
      xl:w-2/5 flex flex-col
      justify-center items-start w-full
      max-xl:padding-x pt-28">
        <p className="text-xl 
        font-Garamond 
        text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl
        max-sm:text-[72px]
        max-sm:leading-normal
        font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap 
          relative z-10 pr-10 ">The New Arrival</span>
          <br/>
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-Garamond text-slate-gray 
        text-lg leading-8 mt-8 mb-10 sm:max-w-sm">
          Discover stylish Nike
          arrivals, quality comfort,
          and innovation for your 
          active life.
        </p>
        <Button 
        label="Shop Now" 
        iconURL={rightArrow}/>
        <div className="flex justify-start 
        items-start flex-wrap w-full mt-10 gap-16">
          {statistics.map((statistic)=>(
            <div key={statistic.label}>
              <p className="font-bold text-4xl font-Garamond">{statistic.value}</p>
              <p className="leading-7 font-palanquin text-slate-gray">{statistic.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 
      flex justify-center items-center
      xl:min-h-screen max-xl:py-40 bg-green-100 
      bg-hero bg-cover bg-center bg-no-repeat max-sm:w-full">
        <img 
        src={activeShoe} 
        alt="shoe collection"
        width={610}
        height={500}
        className="object-contain relative 
        z-10 drop-shadow-2xl sm:w-[610px] sm:h-[500px] max-sm:w-[610px] max-sm:h-[500px]" />
        <div className="flex justify-center items-center gap-5 
        absolute -bottom-[10%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe,index)=>(
            <div key={index}>
              <ShoeCard imageURL={shoe.image} bigShoeImage={activeShoe} setActiveShoe={setActiveShoe}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero