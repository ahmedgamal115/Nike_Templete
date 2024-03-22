import { AiFillStar } from 'react-icons/ai';

const PopularProductCard = ({ imageURL , title , price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <div className="bg-card bg-cover bg-center rounded-xl flex justify-center items-center">
            <img 
            src={imageURL} 
            alt={title}
            className="w-[250px] h-[210px] object-contain" />
        </div>
        <div className='flex mt-8 justify-start 
        items-center gap-2.5'>
            <AiFillStar className='text-[25px]  text-orange-400'/>
            <p className='font-Garamond 
            text-xl leading-normal text-slate-gray'>(4.5)</p>
        </div>
        <p className='mt-2 text-2xl 
        font-bold leading-normal
        font-Garamond md:text-xl'>{title}</p>
        <p className='text-coral-red mt-2 
        font-bold text-2xl leading-normal 
        font-montserrat md:text-xl'>{price}</p>
    </div>
  )
}

export default PopularProductCard