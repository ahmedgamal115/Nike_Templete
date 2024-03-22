import Button from '../Components/Button'
import poster from '../Images/poster.jpg'
import rightArrow from '../Icons/Right-arrow.png'


const SpecialOffer = () => {
  return (
    <section id='offer' className="flex justify-between items-center 
    max-container
    max-lg:flex-col-reverse gap-10">
      <div className='flex-1 items-center justify-start flex max-h-screen'>
        <img 
        src= {poster}
        alt= "Poster Nike"
        width={550}
        height={410} 
        className='object-contain'/>
      </div>
      <div className='relative 
        flex flex-col flex-1
        justify-center items-start w-full'>
        <h2 className='text-4xl 
        font-palanquin font-bold capitalize lg:max-w-lg'>
          <span className='text-coral-red'>Special</span> Offer
        </h2>
        <p className='mt-4 text-lg leading-7 lg:max-w-lg 
        font-Garamond text-slate-gray'>
          Embark on a shopping journey that redefines your experience
          with unbeatable deals. From premier selections to incredible
          savings, We offer unparalleled value that sets us apart. 
        </p>
        <p className='mt-6 mb-11 leading-7 text-xl lg:max-w-lg font-Garamond text-slate-gray'>Our dedication to detail and excellence ensures your
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations, Your journey with us
          is nothing short of exceptional.
        </p>
        <div className='flex justify-start items-center gap-10'>
          <Button 
          label="Shop Now" 
          iconURL={rightArrow}/>
          <Button 
          label="Learn more"
          type='removebg'/>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer