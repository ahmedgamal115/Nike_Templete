

const ShoeCard = ({ imageURL, bigShoeImage, setActiveShoe }) => {
    const handelChooseImage = (imageURL)=>{
        if(bigShoeImage !== imageURL){
            setActiveShoe(imageURL)
        }
    }
  return (
    <div className={`border-2 rounded-xl
    ${bigShoeImage === imageURL ? 
    'border-coral-red' : 'border-transparent'}
    cursor-pointer max-sm:flex-1 bg-card bg-cover bg-center 
    sm:w-32 sm:h-32 py-5 rounded-xl flex 
    justify-center items-center max-sm:p-2 max-sm:w-24 max-sm:h-24`}
    onClick={()=>{handelChooseImage(imageURL)}}>
        <img 
        src={imageURL} 
        alt="Shoes Collection"
        width={127}
        height={105}
        className="object-contain" />
    </div>
  )
}

export default ShoeCard