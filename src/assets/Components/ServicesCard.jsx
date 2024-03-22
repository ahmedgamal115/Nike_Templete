

const ServicesCard = ({icon , title , details}) => {
  return (
    <div className="flex-1 w-full p-10 shadow-3xl 
    sm:w-[350px] sm:min-w-[350px] px-10 py-16 rounded-3xl">
        <img 
        src={icon} 
        alt="ServicesIcon" 
        width={25}
        height={25}
        className="bg-orange-500 rounded-full p-2 w-11 h-11"/>
        <h2 className="text-3xl font-bold 
        mt-5 font-palanquin leading-normal">{title}</h2>
        <p className="max-w-lg text-lg text-slate-gray 
        break-words mt-3">{details}</p>
    </div>
  )
}

export default ServicesCard