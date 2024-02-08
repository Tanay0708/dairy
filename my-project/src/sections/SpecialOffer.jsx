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
      आपका <span className="text-coral-red">
        ISO प्रमाणित </span><span className="text-coral-red">
       </span> 
       घी
      </h2>
      <p className='mt-4 info-text lg:max-w-lg font-bold'>
      शुद्धता पर आप भरोसा और परीक्षण कर सकते हैं!
      </p>
    <p className="mt-6 lg:max-w-lg info-text">
    हम अपने प्रामाणिक, पारंपरिक स्पष्ट मक्खन के साथ एक प्रीमियम पाक अनुभव प्रदान करने में गर्व महसूस करते हैं - अब ISO प्रमाणीकरण के अतिरिक्त आश्वासन के साथ। गुणवत्ता और उत्कृष्टता के प्रति हमारी प्रतिबद्धता अंतरराष्ट्रीय मानकों द्वारा समर्थित है, जो यह सुनिश्चित करती है कि शुद्ध सोने का प्रत्येक चम्मच घी शुद्धता और सुरक्षा के उच्चतम मानकों को पूरा करता है।
    </p>
    {/* <div className="mt-6">
    <Button label='Shop now'  />
    </div> */}
     
      </div>
    </section>
  )
}

export default SpecialOffer