import { shoe8 } from "../assets/images"
import Button from "../components/Button"


const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
      

      <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
        Your Daily  <span className="text-coral-red">
        Dose of</span><span className="text-coral-red"> Happiness.
       </span> 
      </h2>
      <p className='mt-4 info-text lg:max-w-lg'>
      Our health is something that we never want to compromise on and Sid’s Farm helps you with wholesome dairy products for a balanced diet.
      </p>
    
    <div className="mt-6">
    <Button label='Shop now'  />
    </div>
     
      </div>
      <div className="flex-1 flex justify-center items-center">
<img src={'https://sidsfarm.com/wp-content/uploads/2023/08/Website-Image-03-1.png'} alt="" width={570} height={522} className="object-contain"/>
      </div>
    </section>
  )
}

export default SuperQuality