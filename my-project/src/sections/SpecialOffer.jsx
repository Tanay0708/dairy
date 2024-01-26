import { offer } from "../assets/images"
import Button from "../components/Button"


const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1 ">
        <img src='https://sidsfarm.com/wp-content/uploads/2022/03/WhatsApp-Image-2022-03-23-at-6.28.59-PM.jpeg' alt=""  width={773}height={687} className="object-contain w-full"/>
      </div>
      <div className="flex flex-1 flex-col">
      

      <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
        We provide You <span className="text-coral-red">
        Super</span><span className="text-coral-red"> Quality
       </span> Milk
      </h2>
      <p className='mt-4 info-text lg:max-w-lg font-bold'>
      Purity you can trust and test!
      </p>
    <p className="mt-6 lg:max-w-lg info-text">
    Raise a query and allow us to show you how to test the purity of milk!
    </p>
    <div className="mt-6">
    <Button label='Shop now'  />
    </div>
     
      </div>
    </section>
  )
}

export default SpecialOffer