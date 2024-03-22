import { useState } from "react"

const Employess = () => {
    const [motionActive,setMotionActive] = useState(false)
  return (
    <div className="flex justify-center items-center">
        <div className=" relative w-[700px] h-[700px] border-2 border-coral-red rounded-full">
            <div className={`absolute w-[500px] h-[150px] bg-primary transition-motion duration-300
            ${motionActive ? 'top-[calc(50%_-_75px)] left-[calc(50%_-_250px)] scale-110' : 'top-[-20px] left-[calc(50%_-_250px)]'}`}
            onClick={()=>{
                setMotionActive(true)
                setTimeout(() => {
                    setMotionActive(false)
                }, 3000);
            }}>

            </div>
            <div className={`absolute top-[calc(50%_-_75px)] left-[calc(0%_-_200px)] w-[400px] h-[150px] bg-primary 
            ${motionActive ? 'scale-[0.1] rotate-[60deg]' : 'scale-100 rotate-0'}`}>

            </div>
        </div>
    </div>
  )
}

export default Employess