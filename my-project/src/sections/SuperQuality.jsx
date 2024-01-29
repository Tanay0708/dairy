import { dh, shoe8 } from "../assets/images"
import Button from "../components/Button"


const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
      

      <h2 className='font-palanquin text-4xl  font-bold lg:max-w-lg'>
        Discover  <span className="text-coral-red">
        Magic</span><span className="text-coral-red"> of Ghee
       </span> 
      </h2>
      <p className='mt-4 info-text lg:max-w-lg'>
      Packed with essential nutrients, our ghee is known for its potential health benefits. Explore the goodness that comes with each spoonful.
      
      </p>
    
    {/* <div className="mt-6">
    <Button label='Shop now'  />
    </div> */}
     
      </div>
      <div className="flex-1 flex justify-center items-center">
<img src={dh} alt="" width={570} height={522} className="object-contain"/>
      </div>
    </section>
  )
}

export default SuperQuality