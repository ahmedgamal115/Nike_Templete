import {Footer,CustomerReviews,
  PopularProduct,Services,
  SpecialOffer,Subscribe,
  SuperQuality,Hero,Employess} from './assets/Sections/index'


import Navbar from './assets/Components/Navbar'
const App = () =>(
  <main>
    <Navbar/>
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero/>
    </section>
    <section className="padding">
      <PopularProduct/>
    </section>
    <section className="padding">
      <SuperQuality/>
    </section>
    <section className="padding-x py-10">
      <Services/>
    </section>
    <section className="padding">
      <SpecialOffer/>
    </section>
    {/* <section className="padding">
      <Employess/>
    </section> */}
    <section className="padding bg-pale-blue">
      <CustomerReviews/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe/>
    </section>
    <section className="padding-x padding-t pb-8 bg-black ">
      <Footer/>
    </section>
    
  </main>
)

export default App