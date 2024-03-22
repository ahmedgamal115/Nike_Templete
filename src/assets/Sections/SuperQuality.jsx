import mainPoster from '../Images/pngwing.com222.png'
import Button from '../Components/Button'
import cardBg from '../Images/pexels-ani-ani-14305154.jpg'

const SuperQuality = () => {
  return (
    <section id='about-us' className="max-container w-full select-none
    flex justify-between items-center max-lg:flex-col flex-row gap-10">
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl 
        font-palanquin font-bold capitalize lg:max-w-lg'>
          We Provide You <span className='text-coral-red'>Super Quality</span> Shoes
        </h2>
        <p className='mt-4 text-lg leading-7 lg:max-w-lg 
        font-Garamond text-slate-gray'>
          Ensuring premium comfort and style, our meticulously
          crafted footwear is designed to elevate your experience,
          Providing you with unmatched quality, innovation, and a
          touch of elegance.
        </p>
        <p className='mt-6 mb-11 leading-7 text-xl lg:max-w-lg font-Garamond text-slate-gray'>Our dedication to detail and excellence ensures your
          satisfaction
        </p>
        <Button label = {'View details'}/>
      </div>
      <div className='relative 
      flex-1 flex justify-center items-center w-[100%] h-[70vh]'>
        <img 
        src={cardBg} 
        alt="background Card"
        width={550}
        height={800}
        className='absolute top-[50%] left-[50%] h-[65vh]
        translate-x-[-50%] translate-y-[-50%] z-10 object-cover rounded-2xl'
         />
        <img 
        src={mainPoster} 
        alt="Poster"
        width={570}
        height={520}
        className='object-contain z-20' />
      </div>
    </section>
  )
}

export default SuperQuality