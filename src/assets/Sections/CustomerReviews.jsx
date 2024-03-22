import ReviewsCard from "../Components/ReviewsCard"
import { customersReviews } from "../Constants"


const CustomerReviews = () => {
  return (
    <section id="" className="w-full max-container ">
      <h2 className="text-4xl 
      font-Garamond font-bold text-center">What Our <span className="text-coral-red">Customer</span> Say?</h2>
      <p className="font-palanquin text-slate-gray 
      text-lg text-center m-auto mt-4 leading-7 max-w-lg">
        Hear genuine form our satisfied customers about
        their exceptional experiences with us.
      </p>
      <div className="flex flex-1 justify-evenly items-center 
      max-lg:flex-col gap-14 mt-24">
        {
          customersReviews.map((customersReview)=>(
            <ReviewsCard key={customersReview.customerName} {...customersReview}/>
          ))
        }
      </div>
    </section>
  )
}

export default CustomerReviews