
const Button = ({label,iconURL,type}) => {
  return (
    <button className={`flex items-center ${!iconURL && 'max-w-[180px]'}
    justify-center gap-2 px-7 py-4 border 
    font-Garamond text-lg leading-none  
    ${type === 'removebg' && type ? `border-gray-400 text-gray-700` 
    : `bg-coral-red border-coral-red text-white`}
    rounded-full  select-none font-medium`}>
        {label}
        {iconURL && 
          <img 
          src={iconURL} 
          alt="right arrow click" 
          className="ml-2 rounded-full 
          w-5 h-5 bg-slate-100"
          />
        }
        
    </button>
  )
}

export default Button