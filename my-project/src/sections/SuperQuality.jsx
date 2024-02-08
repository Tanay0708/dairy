import { dh, ghee, shoe8 } from "../assets/images"
import Button from "../components/Button"


const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
      

      <h2 className='font-palanquin text-4xl  font-bold lg:max-w-lg'>
      जानिए  <span className="text-coral-red">
      घी </span><span className="text-coral-red"> का जादू
       </span> 
      </h2>
      <p className='mt-4 info-text lg:max-w-lg'>
      आवश्यक पोषक तत्वों से भरपूर, हमारा घी अपने संभावित स्वास्थ्य लाभों के लिए जाना जाता है। प्रत्येक चम्मच के साथ आने वाली अच्छाइयों का अन्वेषण करें।
      
      </p>
    
    {/* <div className="mt-6">
    <Button label='Shop now'  />
    </div> */}
     
      </div>
      <div className="flex-1 flex justify-center items-center">
<img src='https://www.livofy.com/health/wp-content/uploads/2023/03/Ghee.png' alt="" width={570} height={522} className="object-contain"/>
      </div>
    </section>
  )
}

export default SuperQuality