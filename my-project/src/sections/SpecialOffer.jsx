import { offer } from "../assets/images"
import { iso } from "../assets/new"
import Button from "../components/Button"


const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1 bg-white">
        <img src={iso} alt=""  width={773}height={687} className="object-contain w-full "/>
      </div>
      <div className="flex flex-1 flex-col">
      

      <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
        Your <span className="text-coral-red">
        ISO certified</span><span className="text-coral-red"> Ghee
       </span> 
      </h2>
      <p className='mt-4 info-text lg:max-w-lg font-bold'>
      Purity you can trust and test!
      </p>
    <p className="mt-6 lg:max-w-lg info-text">
    we take pride in delivering a premium culinary experience with our authentic, traditional clarified butter – now with the added assurance of ISO certification. Our commitment to quality and excellence is backed by international standards, ensuring that every spoonful of Pure Gold Ghee meets the highest benchmarks of purity and safety.
    </p>
    {/* <div className="mt-6">
    <Button label='Shop now'  />
    </div> */}
     
      </div>
    </section>
  )
}

export default SpecialOffer