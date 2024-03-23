
import ServicesCard from "../Components/ServicesCard"
import { services } from "../Constants"


const Services = () => {
  return (
    <section id="services" className="max-container 
    flex flex-wrap justify-center items-center gap-9">
      {
        services.map((service)=>(
          <ServicesCard key={service.title} {...service}/>
        ))
      }
    </section>
  )
}

export default Services