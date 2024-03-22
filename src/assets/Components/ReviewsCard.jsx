import { AiFillStar } from 'react-icons/ai';

const ReviewsCard = ({ userURL,feedback,rating,customerName }) => {
  return (
    <div className="flex justify-center items-center flex-col gap-4">
        <img 
        src={userURL} 
        alt="Customer Profile"
        width={90}
        height={90}
        className="object-cover rounded-full 
        w-[90px] h-[90px] bg-slate-800" />
        <p className='text-lg font-palanquin 
        text-center text-slate-gray max-w-lg'>{feedback}</p>
        <div className='flex justify-center items-center gap-2'>
            <AiFillStar className='text-[20px] text-orange-500'/>
            <p className='text-lg font-Garamond text-slate-gray'>({rating})</p>
        </div>
        <h2 className='text-2xl font-bold text-center'>{customerName}</h2>
    </div>
  )
}

export default ReviewsCard