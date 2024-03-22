import Button from "../Components/Button"

const Subscribe = () => {
  return (
    <section id="" className="max-container w-full
    flex justify-between max-lg:flex-col 
    flex-row
    items-center gap-10">
      <div className="flex-1">
        <h2 className="leading-[68px] text-4xl 
        lg:max-w-md font-Garamond font-bold">Sign Up For <span className="text-coral-red">Updates</span> & Newsletter</h2>
      </div>
      <div className="flex-1 w-max sm:w-full lg:w-[40%] flex justify-between items-center
        border-2 p-2
      border-gray-400 border-red rounded-full">
          <input 
          type="text" 
          name="" 
          id=""
          placeholder="subscribe@nike.com"
          className="p-2 focus:outline-none bg-none w-[70%]"
          />
          <Button label="Sign Up"/>

      </div>
    </section>
  )
}

export default Subscribe